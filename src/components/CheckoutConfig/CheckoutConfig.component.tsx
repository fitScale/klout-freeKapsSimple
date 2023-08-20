"use client";

import { ProductClientServices } from "@/shopify/services/client/product.services.client";
import style from "./CheckoutConfig.module.css";
import { ProductServerServices } from "@/shopify/services/server/product.services.server";
import getVariantData, {
  VariantData,
} from "@/helpers/functions/getVariantData";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import { CSSProperties, useContext, useState } from "react";
import BoxThemes from "@/helpers/functions/BoxThemes";
import { formatter } from "@/helpers/functions/formatMoney";
import { useMutation } from "@apollo/client";
import {
  addCartItemMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import { usePathname, useRouter } from "next/navigation";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import Cookies from "js-cookie";
import AddToCartButton, {
  AddToCartButtonProps,
} from "../AddToCartButton/AddToCartButton.component";
import Link from "next/link";
import { AppContext } from "@/contexts/AppContext";

export interface CheckoutConfigProps {
  productData: Awaited<
    ReturnType<(typeof ProductServerServices)["getProductSingle"]>
  >;
  variantData: VariantData;
  darkTheme: boolean;
  themeColor: string;
  subscriptionDiscount: number;
}

const CheckoutConfig = ({
  checkoutConfig,
}: {
  checkoutConfig: CheckoutConfigProps;
}) => {
  const refetch = {
    refetchQueries: ["getCart"],
  };

  const [subscribed, setSubscribed] = useState(false);
  const [createCart] = useMutation(createCartMutation, refetch);
  const [addToCart] = useMutation(addCartItemMutation, refetch);
  const pathRawPath = usePathname();

  const fullPath = pathRawPath?.split("/");
  fullPath?.pop();
  const actualPath = fullPath!.join("/");

  const dark = checkoutConfig.darkTheme;
  const themeColor = checkoutConfig.themeColor;
  const themeTextColor = dark ? "white" : "black";
  const notAvalible = checkoutConfig.variantData?.quantityAvailable!;

  const flavorConfig: TextIconComboProps = {
    text: "Select Flavor:",
    icon: "verifiedIcon",
    color: themeTextColor,
    fontClass: "body-Small",
  };

  const contractConfig: TextIconComboProps = {
    text: "No Contracts  •  Cancel Anytime",
    icon: "NoContractsIcon",
    color: themeTextColor,
    fontClass: "body-Small",
  };

  const saveExtraConfig: TextIconComboProps = {
    text: "Save an Extra 10%",
    icon: "PriceDownIcon",
    color: themeTextColor,
    fontClass: "body-Small",
  };

  const moneyBackConfig: TextIconComboProps = {
    text: "Free Delivery; Every 30 days",
    icon: "CycleIcon",
    color: themeTextColor,
    fontClass: "body-Small",
  };

  const addToCartConfig: AddToCartButtonProps = {
    addToCartFn: addToCart,
    createCartFn: createCart,
    variantId: checkoutConfig.variantData?.id!,
    darkTheme: dark,
    themeColor,
  };

  const generateOptions = (variants: VariantData[]) => {
    const gen = [];
    for (let i = 0; i < variants.length; i++) {
      const selected = variants[i]?.id === checkoutConfig.variantData?.id;

      gen.push(
        <Link href={`${actualPath}/${encodeURIComponent(variants[i]?.id!)}`}>
          <p
            key={i}
            className="body-B-Small"
            style={{
              color: selected ? "white" : "var(--bg600)",
              fontWeight: selected ? "900" : "500",
              backgroundColor: selected
                ? themeColor
                : dark
                ? "var(--b800)"
                : "var(--bg500)",
              border: selected ? `1px solid ${themeTextColor}` : "none",
            }}
          >
            {variants[i]?.title}
          </p>
        </Link>
      );
    }
    return gen;
  };

  return (
    <>
      <div className={style.container} style={BoxThemes("outer", dark)}>
        <div
          className={style.optionsContainer}
          style={BoxThemes("inner", dark)}
        >
          <div className={style.optionsHeader}>
            <p>Select Flavor:</p>
          </div>
          {checkoutConfig.productData.variants && (
            <div className={style.options}>
              {generateOptions(checkoutConfig.productData.variants)}
            </div>
          )}
        </div>

        <div
          className={`${style.oneTimeContainer} ${
            dark ? style.dark : style.light
          }`}
          style={BoxThemes("inner", dark)}
          onClick={() => {
            setSubscribed(false);
          }}
        >
          <div className={style.oneTimeHeader}>
            <div
              className={style.indicator}
              style={{
                backgroundColor: !subscribed
                  ? themeColor
                  : dark
                  ? "var(--bg600)"
                  : "var(--bg500)",
                border: !subscribed ? `2px solid ${themeTextColor}` : "none",
              }}
            >
              <div
                style={{
                  display: !subscribed ? "unset" : "none",
                }}
              ></div>
            </div>
            <p>One-Time</p>
          </div>
          <p className="body-B-Small">
            {formatter.format(Number(checkoutConfig.variantData?.price.amount))}
          </p>
        </div>
        {notAvalible < 1 ? (
          <div
            className={style.OFS}
            style={{
              backgroundColor: dark ? "var(--bg600)" : "var(--bg500)",
              border: dark ? "1px solid white" : "1px solid black",
            }}
          >
            <p className="body-B-Medium">OUT OF STOCK</p>
          </div>
        ) : (
          <AddToCartButton addToCartButtonConfig={addToCartConfig} />
        )}
      </div>
    </>
  );
};

export default CheckoutConfig;
{
  /* <>
      <div className={style.container} style={BoxThemes("outer", dark)}>
        <div
          className={style.optionsContainer}
          style={BoxThemes("inner", dark)}
        >
          <div className={style.optionsHeader}>
            <p>Select Flavor:</p>
          </div>
          {checkoutConfig.productData.variants && (
            <div className={style.options}>
              {generateOptions(checkoutConfig.productData.variants)}
            </div>
          )}
        </div>
        <div
          className={`${style.subscriptionContainer} `}
          style={BoxThemes("inner", dark)}
        >
          <div className={style.subscriptionHeader}>
            <div
              className={style.indicator}
              style={{
                backgroundColor: subscribed
                  ? themeColor
                  : dark
                  ? "var(--bg600)"
                  : "var(--bg500)",
                border: subscribed ? `2px solid ${themeTextColor}` : "none",
              }}
            >
              <div
                style={{
                  display: subscribed ? "unset" : "none",
                }}
              ></div>
            </div>
            <p>Subscribe & Save</p>
          </div>
          <div className={style.subscriptionPrices}>
            <div className={style.comparePrices}>
              <p className="body-B-Small stikeAndDisable">
                {formatter.format(
                  Number(checkoutConfig.variantData?.price.amount)
                )}
              </p>
              <p className="body-B-Small">
                {formatter.format(
                  Math.round(
                    Number(checkoutConfig.variantData?.price.amount) * 100 -
                      Number(checkoutConfig.variantData?.price.amount) *
                        checkoutConfig.subscriptionDiscount *
                        100
                  ) / 100
                )}
              </p>
            </div>
            <p className="body-B-Small">
              SAVE {checkoutConfig.subscriptionDiscount * 100}%
            </p>
          </div>
          <hr />
          <div className={style.subscriptionBonuses}>
            <TextIconCombo textIconComboConfig={saveExtraConfig} />
            <TextIconCombo textIconComboConfig={contractConfig} />
          </div>
        </div>
        <div
          className={`${style.oneTimeContainer} ${
            dark ? style.dark : style.light
          }`}
          style={BoxThemes("inner", dark)}
          onClick={() => {
            setSubscribed(false);
          }}
        >
          <div className={style.oneTimeHeader}>
            <div
              className={style.indicator}
              style={{
                backgroundColor: !subscribed
                  ? themeColor
                  : dark
                  ? "var(--bg600)"
                  : "var(--bg500)",
                border: !subscribed ? `2px solid ${themeTextColor}` : "none",
              }}
            >
              <div
                style={{
                  display: !subscribed ? "unset" : "none",
                }}
              ></div>
            </div>
            <p>One-Time</p>
          </div>
          <p className="body-B-Small">
            {formatter.format(Number(checkoutConfig.variantData?.price.amount))}
          </p>
        </div>
        {notAvalible < 1 ? (
          <div
            className={style.OFS}
            style={{
              backgroundColor: dark ? "var(--bg600)" : "var(--bg500)",
              border: dark ? "1px solid white" : "1px solid black",
            }}
          >
            <p className="body-B-Medium">OUT OF STOCK</p>
          </div>
        ) : (
          <AddToCartButton addToCartButtonConfig={addToCartConfig} />
        )}
      </div>
    </> */
}
