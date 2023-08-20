"use client";

import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import CartCard from "../CartCard/CartCard.component";
import style from "./CartOverlay.module.css";
import { NetworkStatus, useQuery } from "@apollo/client";
import { getCartQuery } from "@/shopify/graphql/queries/cart.queries";
import Cookies from "js-cookie";
import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import RingSpinner, {
  RingSpinnerProps,
} from "../RingSpinner/RingSpinner.component";
import LinkButton, {
  LinkButtonProps,
} from "../LinkButton/LinkButton.component";
import { AppContext } from "@/contexts/AppContext";
import createDiscpatch from "@/helpers/functions/createDispatch";
import { useRafState } from "react-use";
import wait from "@/helpers/functions/wait";
import ElementSlider, {
  ElementSliderProps,
} from "../ElementSlider/ElementSlider.component";
import CollectionProductList, {
  CollectionProductListProps,
} from "../CollectionProductList/CollectionProductList.component";
import { ProductClientServices } from "@/shopify/services/client/product.services.client";
import { getCollectionSingleQuery } from "@/shopify/graphql/queries/product.queries";
import TextIconCombo from "../TextIconCombo/TextIconCombo.component";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import Link from "next/link";
import { formatter } from "@/helpers/functions/formatMoney";
import { useRouter } from "next/navigation";
import { useLockBodyScroll } from "@/helpers/hooks/useLockBodyScroll";

export type AwaitedGetCartQuery = Awaited<
  ReturnType<typeof CartClientServices.parseCart>
>;

const CartOverlay = () => {
  const cartId = Cookies.get("appClient_cartId");

  const router = useRouter();

  const [cartData, setCart] = useState<AwaitedGetCartQuery>();
  const [fade, setFade] = useRafState(false);
  const [visable, setVisable] = useState(false);
  const [countdownFalse, setCountdownFalse] = useState(false);
  const cartContainer = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { data, networkStatus, loading } = useQuery(getCartQuery, {
    variables: { cartId: cartId ? cartId : "" },
    notifyOnNetworkStatusChange: true,
  });

  const { data: collection, loading: collectionLoading } = useQuery(
    getCollectionSingleQuery,
    {
      variables: {
        collectionId: "gid://shopify/Collection/416900448471",
        first: 250,
      },
    }
  );

  const { appState, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (data) {
      setCart(CartClientServices.parseCart(data));
    }
  }, [data, appState.cartOpen]);

  useEffect(() => {
    if (appState.cartOpen === true) {
      cartContainer.current.scrollTop = 0;
      setVisable(true);
      setFade(true);
    }
    if (appState.cartOpen === false) {
      setFade(false);
      wait(0.2).then(() => {
        setVisable(false);
      });
    }
  }, [appState.cartOpen]);

  const genetateCartCard = (
    cart: ReturnType<typeof CartClientServices.parseCart>
  ) => {
    const lines = cart?.cart.lines;
    const gen = [];
    if (lines && cartData) {
      for (let i = 0; i < lines.length; i++) {
        gen.push(
          <CartCard
            key={i}
            cartCardConfig={{
              productId: lines[i].productId,
              variantId: lines[i].merchandise.id,
              cartData: cartData,
              setCart: setCart,
              networkStatus: networkStatus,
              countdownFalse: countdownFalse,
            }}
          />
        );
      }
    }
    return gen;
  };

  const linkButtonConfig: LinkButtonProps = {
    text: "Shop All Products",
    link: "/",
  };

  const chckoutURL = cartData?.cart.checkoutUrl;

  const closeCart = () => {
    dispatch(createDiscpatch(false, "SET_CART_OPEN"));
  };

  const containerStyles: CSSProperties = {
    visibility: appState.cartOpen ? "unset" : "hidden",
  };

  const elementSliderConfig: ElementSliderProps = {
    heading: "RECOMMENDED PRODUCTS",
    darkTheme: false,
  };

  return (
    <div
      className={`${style.container} ${fade ? style.fadeBg : undefined} ${
        visable ? undefined : style.hidden
      }`}
    >
      <div
        className={style.close}
        onClick={() => {
          closeCart();
        }}
      ></div>
      <div
        ref={cartContainer}
        className={`${style.cartContainer} ${
          fade ? undefined : style.moveCart
        }`}
      >
        {cartData && cartData.cart.totalQuantity! > 0 ? (
          <>
            {genetateCartCard(cartData)}
            <div className={style.desktopBuffer}></div>
          </>
        ) : loading || collectionLoading ? (
          <div className={style.spinnerContainer}>
            <RingSpinner ringSpinnerConfig={{ color: "black" }} />
          </div>
        ) : (
          <div></div>
        )}

        {collection && (
          <div className={style.recommeneded}>
            <ElementSlider elementSliderConfig={elementSliderConfig}>
              <CollectionProductList
                collectionProductListConfig={{
                  collection:
                    ProductClientServices.parseCollectionSingle(collection),
                  currentVariantId: "",
                }}
              />
            </ElementSlider>
          </div>
        )}
      </div>
      {cartData && cartData.cart.totalQuantity! >= 1 ? (
        <div
          className={`${style.checkoutLink} ${
            fade ? undefined : style.desktopMove
          } ${fade ? style.checkoutFade : undefined} 
       `}
          style={{ marginBottom: "0px" }}
        >
          <p className="body-B-Small">{`ORDER TOTAL: ${formatter.format(
            Number(cartData?.cart.price?.subtotalAmount.amount)
          )} | ${cartData?.cart.totalQuantity} Items`}</p>
          <div
            className={style.checkoutButton}
            onClick={() => {
              setCountdownFalse(true);
              router.push(chckoutURL ? chckoutURL : "");
            }}
          >
            <p className="body-B-Medium">CHECKOUT NOW</p>
            <Svg icon="ArrowIcon" color="white" />
          </div>
        </div>
      ) : (
        <div
          className={`${fade ? undefined : style.desktopMove} ${
            style.checkoutLink
          } ${fade ? style.checkoutFade : undefined} 
       `}
          style={{ marginBottom: "0px" }}
        >
          <p className="body-B-Small">
            {"Your cart is empty. Lets change that!"}
          </p>
          <Link href="/shop/all-products">
            <div className={style.checkoutButton}>
              <p className="body-B-Medium">SHOP BEST SELLERS</p>
              <Svg icon="ArrowIcon" color="white" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartOverlay;
