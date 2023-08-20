"use client";

import SetContext, {
  SetContextProps,
} from "@/helpers/components/SetContext/SetContext.component";
import style from "./ProductGridPage.module.css";
import CollectionProductList, {
  CollectionProductListProps,
  CollectionSingle,
} from "../CollectionProductList/CollectionProductList.component";
import MobileBackgroundImage, {
  MobileBackgroundImageProps,
} from "../MobileBackgroundImage/MobileBackgroundImage.component";
import Link from "next/link";
import { useEffect } from "react";

export interface CollectionData {
  name: string;
  slug: string;
  data: CollectionSingle;
}

export interface ProductGridPageProps {
  heading: string;
  collection: CollectionData;
  lowItem?: boolean;
}

const ProductGridPage = ({
  productGridPageConfig,
}: {
  productGridPageConfig: ProductGridPageProps;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setDarkThemeConfig: SetContextProps = {
    payload: true,
    type: "SET_DARK_THEME",
  };

  const setNavInvertConfig: SetContextProps = {
    payload: false,
    type: "SET_NAV_INVERT",
  };

  const setCartConfig: SetContextProps = {
    payload: false,
    type: "SET_CART_OPEN",
  };

  const allCollections = [
    { name: "ALL PRODUCTS", slug: "all-products" },
    { name: "PRE-WORKOUT", slug: "pre-workout" },
  ];

  const collectionProductListConfig: CollectionProductListProps = {
    collection: productGridPageConfig.collection.data,
    currentVariantId: "",
  };

  const mobileBackgroundWhite: MobileBackgroundImageProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689358491/VZN/Misc%20Assets/BackgroundMobileBackgroundFadeLight-min_bh0xbu.jpg",
  };

  const desktopBackgroundWhite: MobileBackgroundImageProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1690836580/VZN/Misc%20Assets/DullBackground_u2stmy.jpg",
  };

  const generateCategoryList = (collection: CollectionData) => {
    const gen = [];
    const allCollections = [
      { name: "ALL PRODUCTS", slug: "all-products" },
      { name: "PRE-WORKOUT", slug: "pre-workout" },
      { name: "RECOVERY", slug: "recovery" },
    ];

    for (let i = 0; i < allCollections.length; i++) {
      if (allCollections[i].slug === collection.slug) {
        allCollections.splice(i, 1);
      }
    }

    allCollections.unshift(collection);

    for (let i = 0; i < allCollections.length; i++) {
      const idMatch = allCollections[i].slug === collection.slug;

      gen.push(
        <Link href={`/shop/${allCollections[i].slug}`}>
          <p
            style={{
              fontWeight: idMatch ? "900" : "500",
              textDecoration: idMatch ? "underline" : "none",
            }}
          >
            {allCollections[i].name}
          </p>
        </Link>
      );
    }
    return gen;
  };

  return (
    <>
      <SetContext setContextConfig={setDarkThemeConfig} />
      <SetContext setContextConfig={setNavInvertConfig} />
      <SetContext setContextConfig={setCartConfig} />
      <main className={style.main}>
        <div className={style.header}>
          <h1>{productGridPageConfig.heading}</h1>
          <div className={style.categoryContainer}>
            <div className={style.categoryScroll}>
              {generateCategoryList(productGridPageConfig.collection)}
            </div>
          </div>
        </div>
        {productGridPageConfig.lowItem ? (
          <div
            className={style.collectionBody2}
            style={{ backgroundColor: "white", minHeight: "unset" }}
          >
            <CollectionProductList
              collectionProductListConfig={collectionProductListConfig}
            />
          </div>
        ) : (
          <div className={style.collectionBody}>
            <div className={style.mobileBackground}>
              <MobileBackgroundImage
                mobileBackgroundImageConfig={mobileBackgroundWhite}
              />
            </div>
            <div className={style.desktopBackground}>
              <MobileBackgroundImage
                mobileBackgroundImageConfig={desktopBackgroundWhite}
              />
            </div>
            <CollectionProductList
              collectionProductListConfig={collectionProductListConfig}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default ProductGridPage;
