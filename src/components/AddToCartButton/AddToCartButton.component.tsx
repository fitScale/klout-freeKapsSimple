"use client";

import Cookies from "js-cookie";
import style from "./AddToCartButton.module.css";
import { VariantData } from "@/helpers/functions/getVariantData";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import { useContext, useState } from "react";
import { AppContext } from "@/contexts/AppContext";
import createDiscpatch from "@/helpers/functions/createDispatch";

export interface AddToCartButtonProps {
  darkTheme: boolean;
  themeColor: string;
  variantId: string;
  addToCartFn: CartClientServices.addCartItemMutationFn;
  createCartFn: CartClientServices.createCartMutationFn;
  small?: boolean;
}

const AddToCartButton = ({
  addToCartButtonConfig,
}: {
  addToCartButtonConfig: AddToCartButtonProps;
}) => {
  const { appState, dispatch } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  const small = addToCartButtonConfig.small;

  return (
    <div
      className={style.addToCart}
      style={{
        backgroundColor: addToCartButtonConfig.themeColor,
        border: `2px solid ${
          addToCartButtonConfig.darkTheme ? "white" : "black"
        }`,
        padding: small ? "15px" : "17px",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={async () => {
        if (Cookies.get("appClient_cartId")) {
          if (addToCartButtonConfig.variantId) {
            const data = await CartClientServices.addCartItem(
              addToCartButtonConfig.addToCartFn,
              addToCartButtonConfig.createCartFn,
              {
                cartId: Cookies.get("appClient_cartId"),
                merchandiseId: addToCartButtonConfig.variantId,
                quantity: 1,
              }
            );
            dispatch(createDiscpatch(true, "SET_CART_OPEN"));
            return data;
          }
        }
        if (addToCartButtonConfig.variantId) {
          const data = await CartClientServices.createCart(
            addToCartButtonConfig.createCartFn,
            {
              merchandiseId: addToCartButtonConfig.variantId,
              quantity: 1,
            }
          );
          dispatch(createDiscpatch(true, "SET_CART_OPEN"));
          return data;
        }
      }}
    >
      <p
        className="body-B-Medium"
        style={{ fontSize: small ? "14px" : "18px" }}
      >
        ADD TO CART
      </p>
      <div className={hover ? style.hover : undefined}>
        <Svg icon="ArrowIcon" color="white" size={small ? "13px" : "16px"} />
      </div>
    </div>
  );
};

export default AddToCartButton;
