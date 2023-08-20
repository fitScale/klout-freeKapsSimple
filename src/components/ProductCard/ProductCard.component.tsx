"use client";

import Image from "next/image";
import style from "./ProductCard.module.css";
import { ProductServerServices } from "@/shopify/services/server/product.services.server";
import { formatter } from "@/helpers/functions/formatMoney";
import StarsContainer from "../StarsContainer/StarsContainer.component";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  StatBar,
  generateStatBars,
} from "../StatBarBlock/StatBarBlock.component";
import { stat } from "fs";
import AddToCartButton, {
  AddToCartButtonProps,
} from "../AddToCartButton/AddToCartButton.component";
import { useMutation } from "@apollo/client";
import {
  addCartItemMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import wait from "@/helpers/functions/wait";
import Svg from "../../../public/svgs/svgComponent/svg.component";

export type ProductCollectionSingleVariant = Awaited<
  ReturnType<(typeof ProductServerServices)["getCollectionSingle"]>
>["collection"]["products"]["products"][0]["variants"][0];

export type ProductCollectionSingleProduct = Awaited<
  ReturnType<(typeof ProductServerServices)["getCollectionSingle"]>
>["collection"]["products"]["products"][0];

export interface ProductCardProps {
  variantData: ProductCollectionSingleVariant;
  productData: ProductCollectionSingleProduct;
}

const ProductCard = ({
  productCardConfig,
}: {
  productCardConfig: ProductCardProps;
}) => {
  const [hover, SetHover] = useState(false);
  const [fade, setFade] = useState(false);
  const router = useRouter();

  const refetch = {
    refetchQueries: ["getCart"],
  };

  const variantData = productCardConfig.variantData;

  const metaFeild = variantData.metaField?.value;

  const pathRawPath = usePathname();

  const fullPath = pathRawPath?.split("/");
  const actualPath = fullPath!.join("/");

  const title = JSON.parse(variantData.metaField?.value!).shortHandTitle;

  const themeColor = JSON.parse(variantData.metaField?.value!).themeColor;

  const stats: any = JSON.parse(variantData.metaField?.value!).statsBlockConfig
    .stats;

  return (
    <Link
      href={`/products/${
        JSON.parse(variantData.metaField?.value!).baseUrl
      }/${encodeURIComponent(variantData.id)}`}
    >
      <div
        className={style.container}
        onMouseOver={async () => {
          const mediaQuery = window.matchMedia("(min-width: 961px)");
          if (mediaQuery.matches) {
            SetHover(true);
          }
        }}
        onMouseOut={() => {
          const mediaQuery = window.matchMedia("(min-width: 961px)");
          if (mediaQuery.matches) {
            SetHover(false);
          }
        }}
      >
        <div
          className={style.hoverContainer}
          style={{ opacity: hover ? 1 : 0 }}
        >
          <h4>{metaFeild && title}</h4>
          <div className={style.statBarContainer}>
            {generateStatBars(
              stats,
              "black",
              themeColor,
              style.statContainer,
              style.statCopyContainer,
              style.statBar,
              "18px"
            )}
          </div>
          <div
            className={style.moreInfo}
            style={{ backgroundColor: themeColor }}
          >
            <p>MORE INFO</p>
            <Svg icon="ArrowIcon" color="white" size="13px" />
          </div>
        </div>
        <div
          className={style.proxyContainer}
          style={{ opacity: hover ? 0 : 1 }}
        >
          <div className={style.imageContainer}>
            <Image fill src={variantData.image!} alt="" />
          </div>
          <div className={style.copyContainer}>
            <p className={style.heading}>
              {metaFeild &&
                JSON.parse(variantData.metaField?.value!).shortHandTitle}
            </p>
            <div className={style.subHeadingContainer}>
              <p className={style.price}>
                {formatter.format(Number(variantData.price.amount))}
              </p>
              {metaFeild && (
                <p className={style.servings}>
                  {`${JSON.parse(variantData.metaField?.value!).servings}
              Serv.`}
                </p>
              )}
            </div>
            <StarsContainer
              starsContainerConfig={{
                stars: variantData.metaField?.value
                  ? (JSON.parse(variantData.metaField?.value!).stars as number)
                  : 5,
                color: "black",
                size: "20px",
              }}
            />
          </div>
          <div className={style.flavorContainer}>
            <Image
              fill
              src={
                variantData.metaField?.value
                  ? (JSON.parse(variantData.metaField?.value!)
                      .productFlavorImage as string)
                  : ""
              }
              alt=""
            />
          </div>
          {variantData.quantity! < 1 &&
            variantData.title !== "BLTZD GREEN APPLE GRAPE" && (
              <div className={style.outOfStock}>
                <p>Out of Stock</p>
              </div>
            )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
