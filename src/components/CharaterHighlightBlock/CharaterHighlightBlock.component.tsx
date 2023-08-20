"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import style from "./CharaterHighlightBlock.module.css";
import Image from "next/image";
import AddToCartButton, {
  AddToCartButtonProps,
} from "../AddToCartButton/AddToCartButton.component";
import { useMutation } from "@apollo/client";
import {
  addCartItemMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import { VariantData } from "@/helpers/functions/getVariantData";

export interface CharaterHighlightBlockProps {
  heading: string;
  subText: string;
  textIcon: TextIconComboProps;
  forgroundImage: {
    src: string;
    alt: string;
    height: string;
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
  darkTheme: boolean;
  offset: string;
  variantData: VariantData;
  themeColor: string;
}

const CharaterHighlightBlock = ({
  charaterHighlightBlockConfig,
}: {
  charaterHighlightBlockConfig: CharaterHighlightBlockProps;
}) => {
  const refetch = {
    refetchQueries: ["getCart"],
  };

  const [addToCart] = useMutation(addCartItemMutation, refetch);
  const [createCart] = useMutation(createCartMutation, refetch);

  const dark = charaterHighlightBlockConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";
  const forgroundImage = charaterHighlightBlockConfig.forgroundImage;
  const backgroundImage = charaterHighlightBlockConfig.backgroundImage;

  const addToCartButtonConfig: AddToCartButtonProps = {
    addToCartFn: addToCart,
    createCartFn: createCart,
    variantId: charaterHighlightBlockConfig.variantData?.id!,
    darkTheme: dark,
    themeColor: charaterHighlightBlockConfig.themeColor,
  };

  return (
    <div className={style.proxyContainer}>
      <div
        className={style.container}
        style={{ border: `1px solid ${themeTextColor}` }}
      >
        <div
          className={style.backgroundImage}
          style={{
            transform: `translateY(${charaterHighlightBlockConfig.offset})`,
          }}
        >
          <Image fill src={backgroundImage.src} alt={backgroundImage.alt} />
        </div>
        <div className={style.copyContainer}>
          <TextIconCombo
            textIconComboConfig={charaterHighlightBlockConfig.textIcon}
          />
          <h4>{charaterHighlightBlockConfig.heading}</h4>
          <p>{charaterHighlightBlockConfig.subText}</p>
          {charaterHighlightBlockConfig.variantData?.quantityAvailable! > 0 ? (
            <AddToCartButton addToCartButtonConfig={addToCartButtonConfig} />
          ) : (
            <div className={style.OFS}>
              <p className="body-B-Medium">OUT OF STOCK</p>
            </div>
          )}
        </div>
      </div>
      <div className={style.fourFiveContainer}>
        <div
          className={style.forgroundImage}
          style={{
            transform: `translateY(${charaterHighlightBlockConfig.offset})`,
            aspectRatio: `1080/${charaterHighlightBlockConfig.forgroundImage.height}`,
          }}
        >
          <Image fill src={forgroundImage.src} alt={forgroundImage.alt} />
        </div>
      </div>
    </div>
  );
};

export default CharaterHighlightBlock;
