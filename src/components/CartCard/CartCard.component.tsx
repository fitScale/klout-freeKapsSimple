"use client";

import { NetworkStatus, useMutation, useQuery } from "@apollo/client";
import style from "./CartCard.module.css";

import type { VariantData } from "@/helpers/functions/getVariantData";
import { getProductSingleQuery } from "@/shopify/graphql/queries/product.queries";
import { ProductClientServices } from "@/shopify/services/client/product.services.client";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import { formatter } from "@/helpers/functions/formatMoney";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import Countdown, { zeroPad } from "react-countdown";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import {
  addCartItemMutation,
  createCartMutation,
  removeCartItemMutation,
  updateCartItemMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction, useState } from "react";
import { AwaitedGetCartQuery } from "../CartOverlay/CartOverlay.component";
import RingSpinner, {
  RingSpinnerProps,
} from "../RingSpinner/RingSpinner.component";

const renderer = ({
  minutes,
  seconds,
}: {
  hours: any;
  minutes: any;
  seconds: any;
}) => {
  return (
    <span style={{ textDecoration: "underline" }}>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

export interface CartCardProps {
  variantId: string;
  productId: string;
  cartData: AwaitedGetCartQuery;
  setCart: Dispatch<SetStateAction<AwaitedGetCartQuery | undefined>>;
  networkStatus: NetworkStatus;
  countdownFalse: boolean;
}
const CartCard = ({ cartCardConfig }: { cartCardConfig: CartCardProps }) => {
  const cartId = Cookies.get("appClient_cartId");

  const [date] = useState(Date.now());

  const { data } = useQuery(getProductSingleQuery, {
    variables: { productId: cartCardConfig.productId },
  });

  const refetch = {
    refetchQueries: ["getCart"],
  };

  const [updateCartItem] = useMutation(updateCartItemMutation, refetch);
  if (data) {
    const parsedData = ProductClientServices.parseProductSingle(data);
    const variantData = parsedData.variants?.map((e) => {
      if (e.id === cartCardConfig.variantId) {
        return e;
      }
    })[0];

    const cartLines = cartCardConfig.cartData.cart.lines;

    // lol bc I couldnt find another solution to finding the type

    const typeFunction = () => {
      let x;
      for (let i = 0; i < cartLines!.length!; i++) {
        if (cartLines![i].merchandise.id === variantData?.id) {
          x = cartLines![i];
        }
      }
      return x;
    };

    let line: ReturnType<typeof typeFunction>;

    for (let i = 0; i < cartLines!.length!; i++) {
      if (cartLines![i].merchandise.id === variantData?.id) {
        line = cartLines![i];
      }
    }

    const quanity = variantData?.quanityAvalible!;
    const lowStock = quanity < 50;

    const themeColor = JSON.parse(variantData?.metaField?.value!).themeColor;
    const servings = JSON.parse(variantData?.metaField?.value!).servings;

    const imageContainerConfig: ImageContainerProps = {
      src: variantData?.image?.src!,
      alt: "",
      aspectRatio: "1/1",
    };

    const warningTextIconConfig: TextIconComboProps = {
      icon: "InfoIcon",
      color: "red",
      text: "Stock for this item is very low.",
    };

    const decrementQuantity = () => {
      CartClientServices.updateCartItem(updateCartItem, {
        cartId: cartCardConfig.cartData.cart.id!,
        lines: {
          id: line?.lineId!,
          quantity: line?.quantity! - 1,
        },
      });
    };

    const incrementQuantity = () => {
      CartClientServices.updateCartItem(updateCartItem, {
        cartId: cartCardConfig.cartData.cart.id!,
        lines: {
          id: line?.lineId!,
          quantity: line?.quantity! + 1,
        },
      });
    };

    const removeItem = () => {
      CartClientServices.updateCartItem(updateCartItem, {
        cartId: cartCardConfig.cartData.cart.id!,
        lines: {
          id: line?.lineId!,
          quantity: line?.quantity! - line?.quantity!,
        },
      });
    };

    return (
      <div className={style.container}>
        <div className={style.mainContainer}>
          <div className={style.copyContainer}>
            <div className={style.heading}>
              <p className="body-B-Medium">{parsedData.title}</p>
              <p
                style={{ color: themeColor }}
              >{`Flavor: ${variantData?.title}`}</p>
            </div>
            <div className={style.pricing}>
              <p>{formatter.format(Number(variantData?.price.amount))}</p>
              <p>~ {servings} Servings</p>
            </div>
          </div>
          <div className={style.imageBox}>
            <ImageContainer imageContainerConfig={imageContainerConfig} />
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.footerContiner}>
          <div
            className={style.trash}
            onClick={() => {
              removeItem();
            }}
          >
            <Svg icon="TrashIcon" />
          </div>
          <div className={style.quantityChange}>
            <div
              onClick={() => {
                decrementQuantity();
              }}
            >
              <Svg icon="MinusIcon" />
            </div>
            <p>{line?.quantity}</p>
            <div
              onClick={() => {
                incrementQuantity();
              }}
            >
              <Svg icon="PlusIcon" />
            </div>
          </div>
        </div>
        {lowStock && !cartCardConfig.countdownFalse && (
          <div className={style.warning}>
            <TextIconCombo textIconComboConfig={warningTextIconConfig} />
            <p>
              Your cart is only reserved for the next:{" "}
              <Countdown
                zeroPadTime={3}
                renderer={renderer}
                date={date + 1000 * 60 * 10}
              />
            </p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={style.containerLoading}>
        <div></div>
      </div>
    );
  }
};

export default CartCard;
