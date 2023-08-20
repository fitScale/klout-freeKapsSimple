import style from "./ProductPage.module.css";

import MobileBackgroundImage, {
  MobileBackgroundImageProps,
} from "@/components/MobileBackgroundImage/MobileBackgroundImage.component";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";

import StarsContainer, {
  StarsContainerProps,
} from "@/components/StarsContainer/StarsContainer.component";

import SetContext, {
  SetContextProps,
} from "@/helpers/components/SetContext/SetContext.component";

import { ProductServerServices } from "@/shopify/services/server/product.services.server";

import { formatter } from "@/helpers/functions/formatMoney";

import CheckoutConfig, {
  CheckoutConfigProps,
} from "@/components/CheckoutConfig/CheckoutConfig.component";

import getVariantData, {
  VariantData,
} from "@/helpers/functions/getVariantData";

import StatBarBlock, {
  StatBarBlockProps,
} from "@/components/StatBarBlock/StatBarBlock.component";

import TextDropDownCollection, {
  TextDropDownCollectionProps,
} from "@/components/TextDropDownCollection/TextDropDownCollection.component";

import FeaturedIconBox, {
  FeaturedIconBoxProps,
} from "@/components/FeaturedIconBox/FeaturedIconBox.component";

import ElementSlider, {
  ElementSliderProps,
} from "@/components/ElementSlider/ElementSlider.component";

import CharaterHighlightBlock, {
  CharaterHighlightBlockProps,
} from "@/components/CharaterHighlightBlock/CharaterHighlightBlock.component";

import ValuesGrid, {
  ValuesGridProps,
} from "@/components/ValuesGrid/ValuesGrid.component";

import ImageTextBox, {
  ImageTextBoxProps,
} from "@/components/ImageTextBox/ImageTextBox.component";

import FeaturedIconCounter, {
  FeaturedIconCounterProps,
} from "@/components/FeaturedIconCounter/FeaturedIconCounter.component";

import UserReviewSlider, {
  UserReviewSliderProps,
} from "@/components/UserReviewSlider/UserReviewSlider.component";

import CollectionProductList, {
  CollectionProductListProps,
} from "@/components/CollectionProductList/CollectionProductList.component";
import LinkButton, {
  LinkButtonProps,
} from "@/components/LinkButton/LinkButton.component";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import FuledSocialProofBlock, {
  FuledSocialProofBlockProps,
} from "@/components/FuledSocialProofBlock/FuledSocialProofBlock.component";
import DesktopBackgroundImage, {
  DesktopBackgroundImageProps,
} from "@/components/DesktopBackgroundImage/DesktopBackgroundImage.component";
import HorizontalTextImage, {
  HorizontalTextImageProps,
} from "@/components/HorizontalTextImage/HorizontalTextImage.componet";

export interface ProductPageProps {
  productId: string;
  variantId: string;
  productData: Awaited<
    ReturnType<typeof ProductServerServices.getProductSingle>
  >;
  variantData: VariantData;
  collectionData: Awaited<
    ReturnType<typeof ProductServerServices.getCollectionSingle>
  >;
  transitionOffset: string;
  darkTheme: boolean;
  themeColor: string;
  navInvert: boolean;
  subscriptionDiscount: number;
  userReviews: UserReviewSliderProps;
  bannerImage: ImageContainerProps;
  mobileBackgroundImage: MobileBackgroundImageProps;
  statsBlockConfig: StatBarBlockProps;
  textDropDownCollectionConfig: TextDropDownCollectionProps;
  ingredientsSliderConfig: FeaturedIconBoxProps[];
  charaterHighlightBlockConfig: CharaterHighlightBlockProps;
  imageTextBoxConfig: ImageTextBoxProps;
  desktopConfig: {
    bannerImageDesktopConfig: ImageContainerProps;
    charaterHighlightDesktopOffset: string;
    backgroundOffset?: string;
  };
  hideReviews?: boolean;
  customStars?: boolean;
}

export const valuesGridConfig: ValuesGridProps = {
  values: [
    {
      heading: "PROUDLY MADE IN THE USA",
      subtext: "",
      icon: "USAIcon",
      information:
        "Crafted with pride in the USA, our products embody the highest standards of quality and excellence.",
      darkTheme: true,
      smallHeading: true,
    },
    {
      heading: "HIGH QUALITY INGREDIENTS",
      subtext: "",
      icon: "MoleculeIcon",
      information:
        "Highly studied, premium ingredients. You will not find ineffective doses of any ingredients here.",
      darkTheme: true,
      smallHeading: true,
    },
    {
      heading: "FORMULATED BY EXPERTS",
      subtext: "",
      icon: "ElectricIcon",
      information:
        "Our products are formulated by experts who utilize the latest science in order to establish our quality researched products.",
      darkTheme: true,
      smallHeading: true,
    },
    {
      heading: "TRANSPARENT LABELS",
      subtext: "",
      icon: "NoContractsIcon",
      information:
        "Our products and labels offer complete transparency, allowing no use of proprietary blends. What you see is what you get, no hidden secrets.",
      darkTheme: true,
      smallHeading: true,
    },
  ],
  darkTheme: true,
};

const ProductPage = async ({
  productPageConfig,
}: {
  productPageConfig: ProductPageProps;
}) => {
  const productData = productPageConfig.productData;
  const variantData = productPageConfig.variantData;
  const dark = productPageConfig.darkTheme;

  const reviews = JSON.parse(variantData?.metaField?.value!).reviews;

  const mobileBackgroundImageConfig: MobileBackgroundImageProps =
    productPageConfig.mobileBackgroundImage;

  const bannerImageConfig: ImageContainerProps = productPageConfig.bannerImage;

  const starsConfig: StarsContainerProps = {
    stars: productPageConfig.customStars ? 0 : 5,
    color: productPageConfig.themeColor,
  };

  const setDarkThemeConfig: SetContextProps = {
    payload: dark,
    type: "SET_DARK_THEME",
  };

  const setNavInvertConfig: SetContextProps = {
    payload: productPageConfig.navInvert,
    type: "SET_NAV_INVERT",
  };

  const setCartConfig: SetContextProps = {
    payload: false,
    type: "SET_CART_OPEN",
  };

  const checkoutConfig: CheckoutConfigProps = {
    productData: productData,
    variantData: variantData,
    darkTheme: dark,
    themeColor: productPageConfig.themeColor,
    subscriptionDiscount: productPageConfig.subscriptionDiscount,
  };

  const statBarBlockConfig: StatBarBlockProps =
    productPageConfig.statsBlockConfig;

  const textDropDownCollectionConfig: TextDropDownCollectionProps =
    productPageConfig.textDropDownCollectionConfig;

  const elementSliderConfig: ElementSliderProps = {
    heading: "KEY INGREDIANTS",
    darkTheme: dark,
  };

  const ingredientsSliderConfig: FeaturedIconBoxProps[] =
    productPageConfig.ingredientsSliderConfig;

  const charaterHighlightBlockConfig: CharaterHighlightBlockProps =
    productPageConfig.charaterHighlightBlockConfig;

  const imageTextBoxConfig: ImageTextBoxProps =
    productPageConfig.imageTextBoxConfig;

  const featuredIconCounterConfig: FeaturedIconCounterProps = {
    headerBefore: "OVER",
    headingAfter: "WORKOUTS FUELED BY VZN ",
    icon: "FlexIcon",
    total: 78720,
    darkTheme: true,
  };

  const userReviewSliderConfig: UserReviewSliderProps =
    productPageConfig.userReviews;

  const collectionProductListConfig: CollectionProductListProps = {
    collection: productPageConfig.collectionData,
    currentVariantId: productPageConfig.variantId,
  };

  const productCardsSliderConfig: ElementSliderProps = {
    heading: "RECOMMENDED PRODUCTS",
    darkTheme: true,
  };

  const linkButtonConfig: LinkButtonProps = {
    link: "/shop/all-products",
    text: "View All Products",
  };

  // START DESKTOP CONFIGS

  const bannerImageDesktopConfig: ImageContainerProps = {
    ...productPageConfig.desktopConfig?.bannerImageDesktopConfig!,
  };

  const productImage: HorizontalTextImageProps = {
    src: productPageConfig.imageTextBoxConfig.src,
    heading: productPageConfig.imageTextBoxConfig.heading,
    subText: productPageConfig.imageTextBoxConfig.subText,
    darkTheme: dark,
    productImage: true,
  };

  const whyChooseImageConfig: HorizontalTextImageProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689639788/VZN/Image%20Banners/FamilyBanner-min_vez9mq.jpg",
    heading: "WHAT SETS US APART, WHY CHOOSE VZN ?",
    subText:
      "VZN Nutrition is not just another supplement company; we are a passionate community-driven brand committed to empowering individuals to reach new heights in their fitness journey. We stand out from the crowd, attracting like-minded individuals who share our passion for pushing boundaries and achieving extraordinary results.",
    darkTheme: dark,
  };

  const stackBuilderImageConfig: HorizontalTextImageProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689639376/VZN/Image%20Banners/VznBannerStackBuilder_wevdng.jpg",
    heading: "BUILD YOUR OWN STACK & SAVE BIG TIME!",
    subText:
      "Choose from our premium selection of products and create a personalized stack tailored to your fitness goals. Whether you want outrageous energy, skin-splitting pumps, laser-like focus, or a combination of all, the 'Stack Builder' is your gateway to unbeatable savings and unparalleled performance enhancement. ",
    darkTheme: dark,
    builder: true,
  };

  const fuledSocialProofBlockConfig: FuledSocialProofBlockProps = {
    beforeHeading: "OVER",
    afterHeading: "WORKOUTS FUELED BY VZN",
    subText:
      "See for yourself why thousands of fitness enthusiasts across the globe trust VZN Nutrition over all others. With a dedicated community and proven results, we are the go-to choice for those seeking unparalleled performance and out of this world gains.",
    total: 72405,
    backgroundImage: {
      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689619515/VZN/Image%20Banners/VZNTEAM_d5c2hz.jpg",
      alt: "",
      aspectRatio: "16/9",
    },
    reviews: productPageConfig.userReviews.reviews,
  };

  const desktopBackgroundImageConfig: DesktopBackgroundImageProps = {
    src: dark
      ? "https://res.cloudinary.com/dod9nbjke/image/upload/v1689632228/VZN/Misc%20Assets/Desktop-background-blackFade_kwingw.jpg"
      : "https://res.cloudinary.com/dod9nbjke/image/upload/v1689632228/VZN/Misc%20Assets/Desktop-background-whiteFade_gjprfs.jpg",
  };

  const generateIngredients = (ingredients: FeaturedIconBoxProps[]) => {
    const gen = [];
    for (let i = 0; i < ingredients.length; i++) {
      gen.push(<FeaturedIconBox featuredIconBoxConfig={ingredients[i]} />);
    }
    return gen;
  };

  return (
    <>
      <SetContext setContextConfig={setDarkThemeConfig} />
      <SetContext setContextConfig={setNavInvertConfig} />
      <SetContext setContextConfig={setCartConfig} />
      <main
        className={style.mainMobile}
        style={{
          color: dark ? "white" : "black",
        }}
      >
        <ImageContainer imageContainerConfig={bannerImageConfig} />
        <div className={style.headingCopy}>
          <h1>{productData.title?.toUpperCase()}</h1>
          <div className={style.mainReviewContainer}>
            <StarsContainer starsContainerConfig={starsConfig} />
            <p
              className="body-Small"
              style={{ color: "var(--bg600)" }}
            >{`( ${reviews} Reviews  )`}</p>
          </div>
          {productPageConfig.variantData?.quantityAvailable! < 1 && (
            <p className={style.OFS}>OUT OF STOCK</p>
          )}
          <div className={style.pricesContainer}>
            <p className="body-B-Medium stikeAndDisable">
              {variantData?.comparePrice?.amount &&
                formatter.format(Number(variantData?.comparePrice?.amount))}
            </p>
            <p className="body-B-Medium">
              {formatter.format(Number(variantData?.price.amount))}
            </p>
            <p className="body-Medium">
              {JSON.parse(variantData?.metaField?.value!).servings} Full-Dose
              Servings
            </p>
          </div>
        </div>
        <div className={style.productBody}>
          <MobileBackgroundImage
            mobileBackgroundImageConfig={mobileBackgroundImageConfig}
          />
          <CheckoutConfig checkoutConfig={checkoutConfig} />
          <StatBarBlock statBarBlockConfig={statBarBlockConfig} />
          <TextDropDownCollection
            textDropDownCollectionConfig={textDropDownCollectionConfig}
          />
          <ElementSlider elementSliderConfig={elementSliderConfig}>
            {generateIngredients(ingredientsSliderConfig)}
          </ElementSlider>
          <CharaterHighlightBlock
            charaterHighlightBlockConfig={charaterHighlightBlockConfig}
          />
          <ImageTextBox imageTextBoxConfig={imageTextBoxConfig} />
          <ValuesGrid valuesGridConfig={valuesGridConfig} />
          <FeaturedIconCounter
            featuredIconCounterConfig={featuredIconCounterConfig}
          />
          <UserReviewSlider
            userReviewSliderConfig={{
              ...userReviewSliderConfig,
              hide: productPageConfig.hideReviews,
            }}
          />
          <ElementSlider elementSliderConfig={productCardsSliderConfig}>
            <CollectionProductList
              collectionProductListConfig={collectionProductListConfig}
            />
          </ElementSlider>
          <LinkButton linkButtonConfig={linkButtonConfig} />
          <div
            className={style.backgroundTransitionBlack}
            style={{ height: productPageConfig.transitionOffset }}
          ></div>
          <div className={style.backgroundTransition}></div>
        </div>
      </main>
      <div className={style.offset}></div>
      <main className={style.mainDesktop}>
        <div className={style.desktopImageContainer}>
          <ImageContainer imageContainerConfig={bannerImageDesktopConfig} />
        </div>
        <DesktopBackgroundImage
          desktopBackgroundImageConfig={desktopBackgroundImageConfig}
        />
        <div className={style.desktopHeaderContainer}>
          <div className={style.desktopHeaderCopy}>
            <h1>{productData.title?.toUpperCase()}</h1>
            <div className={style.desktopReviewContainer}>
              <StarsContainer starsContainerConfig={starsConfig} />
              <p
                className="body-Small"
                style={{
                  color: dark ? "var(--bg600)" : "white",
                  textShadow: "var(--blackHighlight)",
                }}
              >{`( ${reviews} Reviews  )`}</p>
            </div>
            <TextDropDownCollection
              textDropDownCollectionConfig={{
                ...textDropDownCollectionConfig,
                desktop: true,
                inital: 0,
              }}
            />
            <div className={style.desktopDropDownBuffer}></div>
            <div className={style.destkopIngredientsContainer}>
              <div className={style.desktopIngredients}>
                <div className={style.desktopIngredientText}>
                  <p style={{ color: dark ? "white" : "black" }}>
                    KEY INGREDIENTS
                  </p>{" "}
                  <Svg
                    icon="ArrowSkinnyIcon"
                    color={dark ? "white" : "black"}
                  />
                </div>
                {generateIngredients(
                  ingredientsSliderConfig.map((e) => {
                    return { ...e, minWidth: "unset" };
                  })
                )}
              </div>
              <div className={style.desktopIngredientsBuffer}></div>
            </div>
          </div>
          <div className={style.desktopHeaderSpacer}></div>
          <div className={style.desktopHeaderCheckout}>
            <StatBarBlock statBarBlockConfig={statBarBlockConfig} />
            <CheckoutConfig checkoutConfig={checkoutConfig} />
          </div>
        </div>
        <div className={style.desktopProductBody}>
          <ValuesGrid
            valuesGridConfig={{ ...valuesGridConfig, darkTheme: dark }}
          />
          <div className={style.desktopMiddleCopyContainer}>
            <div className={style.desktopCharacterHighlight}>
              <CharaterHighlightBlock
                charaterHighlightBlockConfig={{
                  ...charaterHighlightBlockConfig,
                  offset:
                    productPageConfig.desktopConfig
                      .charaterHighlightDesktopOffset,
                  subText:
                    " From renowned bodybuilders to elite fitness experts, our products have become a staple in their training regimens. With a community of passionate athletes who rely on our brand to fuel their performance.",
                }}
              />
            </div>
            <div className={style.desktopMiddleCopy}>
              <HorizontalTextImage horizontalTextImageConfig={productImage} />
              <HorizontalTextImage
                horizontalTextImageConfig={whyChooseImageConfig}
              />
              <HorizontalTextImage
                horizontalTextImageConfig={stackBuilderImageConfig}
              />
            </div>
          </div>
          <FuledSocialProofBlock
            fuledSocialProofBlockConfig={fuledSocialProofBlockConfig}
          />
          <div className={style.desktopRecommended}>
            <div className={style.desktopRecommendedText}>
              <div className={style.desktopRecommendedTextArrow}>
                <p style={{ color: "white" }}>RECOMMENDED PRODUCTS</p>{" "}
                <Svg icon="ArrowSkinnyIcon" color="white" />
              </div>
              <p className={style.allProducts} style={{ color: "white" }}>
                View All Products
              </p>
            </div>
            <CollectionProductList
              collectionProductListConfig={{
                ...collectionProductListConfig,
                max: 6,
              }}
            />
          </div>
        </div>
        <div className={style.desktopTranstionBlack}></div>
        <div
          className={style.desktopTranstion}
          style={{
            height: productPageConfig.desktopConfig.backgroundOffset
              ? productPageConfig.desktopConfig.backgroundOffset
              : "55%",
          }}
        ></div>
      </main>
    </>
  );
};

export default ProductPage;
