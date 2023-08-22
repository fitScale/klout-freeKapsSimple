"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import KloutCard, {
  KloutCardProps,
} from "@/components/KloutCard/KloutCard.component";

import { ValuesGridProps } from "@/components/ValuesGrid/ValuesGrid.component";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer.component";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import { useMutation } from "@apollo/client";
import {
  addCartItemMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  const [selected, setSelected] = useState<undefined | number>(undefined);
  const [variantId, setId] = useState<string | undefined>();
  const [cart, setCart] = useState<undefined | string>(undefined);

  const flavorRef = useRef({} as HTMLDivElement);

  const flavorRef2 = useRef({} as HTMLDivElement);

  const [createCart] = useMutation(createCartMutation);
  const [addCart] = useMutation(addCartItemMutation);

  useEffect(() => {
    CartClientServices.createCart(createCart, {
      merchandiseId: "gid://shopify/ProductVariant/43838165221634",
      quantity: 1,
    }).then((e) => {
      setCart(e.cart.id);
    });
  }, []);

  useEffect(() => {
    if (selected !== undefined && flavorRef.current) {
      flavorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (selected !== undefined && flavorRef2.current) {
      flavorRef2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setId(undefined);
  }, [selected]);

  const reviewRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    if (variantId !== undefined && reviewRef.current) {
      reviewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [variantId]);

  const checkout = async () => {
    const cartData = await CartClientServices.addCartItem(addCart, createCart, {
      cartId: cart,
      merchandiseId: variantId!,
      quantity: 1,
    });
    console.log(cartData);
    console.log(cartData.cart.checkoutUrl!);
    router.push(cartData.cart.checkoutUrl!);
  };

  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691872483/Klout/Logos/Alian-Green-min_d4vyct.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1/1",
  };

  const pumpInfoBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691883148/Klout/Banner%20Images/Mid_Funnel_Banner_Long_drfxue.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1080/4480",
  };

  const backgroundImage: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691956027/Klout/Misc%20Assets/BackgroundImage1_tbzn9n.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1080/1920",
  };

  const productCards: KloutCardProps[] = [
    {
      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/KAIO-PsychoSerum-Front-Plain-min_efdscx.png",
      aspectRatio: "800/1000",
      title: "kaio final destination",
      price: "$57.00",
      descripton:
        "KAIO, the apex pre-workout, boasts eight trademarked ingredients including NO3-T Nitrate, delivering unmatched energy, focus, and intense pumps for transformative workouts.",
      values: [
        {
          title: "insane power",
          icon: "DangerIcon",
        },
        {
          title: "Elevated Focus",
          icon: "EyeIcon",
        },
        {
          title: "Intense Pumps",
          icon: "FlexIcon",
        },
      ],
      link: "/kaio-fd",
      checkout: true,
    },
    {
      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Kaio_Pump-min_hittuz.png",
      aspectRatio: "800/1000",
      title: "kaio pump & performance",
      price: "$57.00",
      descripton:
        "KAIO Pump & Performance is a 3-in-1 powerhouse, blending optimal pumps, extended endurance, and premium hydration for peak training sessions.",
      values: [
        {
          title: "Intense Pumps",
          icon: "FlexIcon",
        },
        {
          title: "Max endurance",
          icon: "FireIcon",
        },
        {
          title: "No Caffine",
          icon: "verifiedIcon",
        },
      ],
      link: "/kaio-pump",
      checkout: true,
    },
    {
      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
      aspectRatio: "800/1000",
      title: "Klout mamba high-stim",
      price: "$47.00",
      descripton:
        "Mamba delivers unparalleled high-stim energy, a premium NO3-T Nitrate pump, and intense focus with five trademarked ingredients, ensuring a unique flavor-packed experience.",
      values: [
        {
          title: "crazy Energy",
          icon: "DangerIcon",
        },
        {
          title: "dailed focus",
          icon: "EyeIcon",
        },
        {
          title: "Insane Drive",
          icon: "FireIcon",
        },
      ],
      link: "/mamba",
      checkout: true,
    },
    {
      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
      aspectRatio: "800/1000",
      title: "Klout karma low-stim",
      price: "$47.00",
      descripton:
        "Karma offers a low-stim, nootropic-rich blend with smooth energy, making it ideal for those seeking profound focus without excessive stimulants.",
      values: [
        {
          title: "Low-Caffeine",
          icon: "verifiedIcon",
        },
        {
          title: "crash-free",
          icon: "StarIcon",
        },
        {
          title: "unreal focus",
          icon: "EyeIcon",
        },
      ],
      link: "/karma",
      checkout: true,
    },
  ];

  const generateProductCard = (cards: KloutCardProps[]) => {
    const gen = [];
    for (let i = 0; i < cards.length; i++) {
      gen.push(
        <div
          onClick={() => {
            setSelected(i);
          }}
        >
          <KloutCard
            config={{ ...cards[i], selected: selected === i ? true : false }}
          />
        </div>
      );
    }
    return gen;
  };

  interface flavor {
    name: string;
    description: string;
    color: string;
    bgColor: string;
    variantId: string;
    productName: string;
    price: string;
    flavorImage: string;
  }

  const generateFlavors = (flavors: flavor[]) => {
    const gen = [];
    for (let i = 0; i < flavors.length; i++) {
      gen.push(
        <div
          className={style.falvorBox}
          style={{
            backgroundColor: flavors[i].bgColor,
            filter:
              variantId === flavors[i].variantId
                ? "brightness(100%)"
                : "brightness(50%)",
          }}
          onClick={() => {
            setId(flavors[i].variantId);
          }}
        >
          <p style={{ color: flavors[i].color }}>{flavors[i].name}</p>
          <p>{flavors[i].description}</p>
        </div>
      );
    }
    return gen;
  };

  let flavors: flavor[] | undefined;

  if (selected === 0) {
    flavors = [
      {
        name: "Psycho Serum:",
        description:
          "A thrilling concoction of bold black cherry meets refreshing watermelon, delivering an electrifying punch that's sure to awaken the senses.",
        color: "lime",
        bgColor: "darkGreen",
        variantId: "gid://shopify/ProductVariant/43499165778178",
        productName: "KAIO FINAL DESTINATION",
        price: "57",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/KAIO-PsychoSerum-Front-Plain-min_efdscx.png",
      },
      {
        name: "Cosmic Dust:",
        description:
          "A tantalizing blend capturing the essence of the universe, with hints of sweet and sour that transports your taste buds to new galaxies.",
        color: "magenta",
        bgColor: "Purple",
        variantId: "gid://shopify/ProductVariant/43499165810946",
        productName: "KAIO FINAL DESTINATION",
        price: "57",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/KAIO-PsychoSerum-Front-Plain-min_efdscx.png",
      },
      {
        name: "Orange Creamsicle:",
        description:
          "A vibrant twist of orange and smooth cream. Power up, as each sip rockets you into a workout fueled by sunlit flavors.",
        color: "#f0b800",
        bgColor: "#8a6e12",
        variantId: "gid://shopify/ProductVariant/43826706710786",
        productName: "KAIO FINAL DESTINATION",
        price: "57",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/KAIO-PsychoSerum-Front-Plain-min_efdscx.png",
      },
    ];
  } else if (selected === 1) {
    flavors = [
      {
        name: "Cotton Candy",
        description:
          "A fusion of fluffy sweetness, cotton candy delivers a carnival of flavor, igniting a vibrant rush that'll dance across your taste buds.",
        color: "#00d8ff",
        bgColor: "#025d6e",
        variantId: "gid://shopify/ProductVariant/43753091498242",
        productName: "KAIO PUMP & PERFORMANCE",
        price: "57",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Kaio_Pump-min_hittuz.png",
      },
      {
        name: "Orange Creamsicle:",
        description:
          "A vibrant twist of orange and smooth cream. Power up, as each sip rockets you into a workout fueled by sunlit flavors.",
        color: "#f0b800",
        bgColor: "#8a6e12",
        variantId: "gid://shopify/ProductVariant/43753091531010",
        productName: "KAIO PUMP & PERFORMANCE",
        price: "57",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Kaio_Pump-min_hittuz.png",
      },
    ];
    //
  } else if (selected === 2) {
    // https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png
    flavors = [
      {
        name: "Sour Paradise:",
        description:
          "A soup explosion where tart meets tropical, Sour Paradise delivers powerful burst of flavor, priming you for the workout ahead.",
        color: "#ffbc00",
        bgColor: "#7e8200",
        variantId: "gid://shopify/ProductVariant/42584647893250",
        productName: "MAMBA HIGH-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
      },
      {
        name: "Arctic Cherry:",
        description:
          "A cool burst of fresh cherry, Arctic Cherry delivers a smooth chill with a hint of tartness, giving your taste buds a refreshing and simple delight.",
        color: "#fc7c8b",
        bgColor: "#751d28",
        variantId: "gid://shopify/ProductVariant/43198190452994",
        productName: "MAMBA HIGH-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
      },
      {
        name: "Space Kandy:",
        description:
          "An out-of-this-world blend of sweetness and cosmic tanginess, Space Kandy propels you through a galaxy of flavor, ensuring every sip is an interstellar adventure across your taste buds.",
        color: "#00ff3f",
        bgColor: "#005916",
        variantId: "gid://shopify/ProductVariant/43342798618882",
        productName: "MAMBA HIGH-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
      },
      {
        name: "Poison Apple:",
        description:
          "A tantalizing mix of sweet and sinister, Poison Apple offers a bite of crisp apple with an unexpected twist, teasing your taste buds with a hint of mystery.",
        color: "#ff3349",
        bgColor: "#540009",
        variantId: "gid://shopify/ProductVariant/42584647926018",
        productName: "MAMBA HIGH-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
      },
    ];
  } else if (selected === 3) {
    // https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png
    flavors = [
      {
        name: "Juicy Burst:",
        description:
          "Dive into a pink paradise where the flavor bursts with juicy goodness, captivating every taste bud.",
        color: "#e6009d",
        bgColor: "#750050",
        variantId: "gid://shopify/ProductVariant/42567092371714",
        productName: "KARMA LOW-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
      },
      {
        name: "Sour Paradise:",
        description:
          "A soup explosion where tart meets tropical, Sour Paradise delivers powerful burst of flavor, priming you for the workout ahead.",
        color: "#ffbc00",
        bgColor: "#7e8200",
        variantId: "gid://shopify/ProductVariant/41999407644930",
        productName: "KARMA LOW-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
      },
      {
        name: "Arctic Cherry:",
        description:
          "A cool burst of fresh cherry, Arctic Cherry delivers a smooth chill with a hint of tartness, giving your taste buds a refreshing and simple delight.",
        color: "#fc7c8b",
        bgColor: "#751d28",
        variantId: "gid://shopify/ProductVariant/43198182195458",
        productName: "KARMA LOW-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
      },
      {
        name: "Space Kandy:",
        description:
          "An out-of-this-world blend of sweetness and cosmic tanginess, Space Kandy propels you through a galaxy of flavor, ensuring every sip is an interstellar adventure across your taste buds.",
        color: "#00ff3f",
        bgColor: "#005916",
        variantId: "gid://shopify/ProductVariant/43342801666306",
        productName: "KARMA LOW-STIM",
        price: "47",
        flavorImage:
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
      },
    ];
  }

  let variantData = flavors?.filter((e) => {
    if (e.variantId === variantId) {
      return e;
    }
  })[0];

  const reviewBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692119674/Klout/Banner%20Images/DesktopBanner3-min_s3m6fx.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1920/1080",
  };

  const desktopLogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png",
    alt: "Klout Alian Logo",
    aspectRatio: "300/105",
  };

  return (
    <>
      <main className={style.main}>
        <Link href="/">
          <div className={style.logo}>
            <ImageContainer imageContainerConfig={logoConfig} />
          </div>
        </Link>
        <div className={style.header}>
          <Svg icon="DangerIcon" color="var(--primaryColor)" size="14px" />
          <p>LIMITED TIME OFFER!</p>
        </div>
        <div className={style.heroBackground}></div>
        <div className={style.heroCopy}>
          <div>
            <h1 style={{ fontSize: "15px" }}>
              FOLLOW THE INSTRUCTIONS BELOW TO CLAIM YOUR FREE KAPS:
            </h1>
          </div>
        </div>
        <div className={style.select}>
          <p>1: SELECT YOUR PRE-WORKOUT:</p>

          <div className={style.productInfoGrid}>
            {generateProductCard(productCards)}
          </div>
        </div>

        {flavors && (
          <>
            <div className={style.proxyFlavor} ref={flavorRef}></div>
            <div className={style.flavor}>
              <p>2: SELECT YOUR FLAVOR:</p>
              <p style={{ fontWeight: "700", fontSize: "14px" }}>
                ( TAP TO SELECT )
              </p>
              {generateFlavors(flavors)}
            </div>
          </>
        )}
        {variantId && (
          <>
            <div className={style.proxyReview} ref={reviewRef}></div>
            <div className={style.orderReview}>
              <div className={style.urgancy}>
                <Svg
                  icon="DangerIcon"
                  color="var(--primaryColor)"
                  size="15px"
                />
                <p> THIS OFFER ENDS SOON</p>
              </div>
              <p>3: REVIEW YOUR ORDER</p>
              <div className={style.value}>
                <p>{`-- ${variantData?.productName}: $${variantData?.price}.00`}</p>
                <p>
                  -- KLOUT PUMP KAPS:{" "}
                  <span className={style.markout}>$35.00</span> FREE
                </p>
                <p>
                  -- EXPRESS SHIPPING:{" "}
                  <span className={style.markout}>$8.57</span> FREE
                </p>
              </div>
              <div className={style.spacer}></div>
              <p className={style.finalPrice}>
                FINAL PRICE:{" "}
                <span className={style.markout}>{`$${
                  Number(variantData?.price) + 35 + 8.57
                }`}</span>
                {` $${variantData?.price}.00`}{" "}
              </p>
              <div>
                <div className={style.savings}>
                  <p>
                    You Just Saved $
                    {Math.round(
                      (Number(variantData?.price) +
                        35 +
                        8.57 -
                        Number(variantData?.price)) *
                        100
                    ) / 100}{" "}
                    !
                  </p>
                </div>
              </div>
              <div className={style.reviewGrid}>
                <div className={style.productReview}>
                  <ImageContainer
                    imageContainerConfig={{
                      src: variantData?.flavorImage!,
                      alt: "",
                      aspectRatio: "8/10",
                    }}
                  />
                  <p style={{ fontWeight: "700" }}>
                    {variantData?.productName}
                  </p>
                  <p> ${variantData?.price}.00</p>
                  <div
                    className={style.flavorInfo}
                    style={{
                      backgroundColor: variantData?.bgColor,
                      color: variantData?.color,
                    }}
                  >
                    <p>{variantData?.name}</p>
                  </div>
                </div>
                <div className={style.productReview}>
                  <ImageContainer
                    imageContainerConfig={{
                      src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/PumpCaps-min_txkkpe.png",
                      alt: "",
                      aspectRatio: "8/10",
                    }}
                  />
                  <p style={{ fontWeight: "700" }}>KLOUT PUMP KAPS</p>
                  <p>
                    <span className={style.markout}>$35.00</span> FREE
                  </p>
                  <div
                    className={style.flavorInfo}
                    style={{
                      backgroundColor: "grey",
                    }}
                  >
                    <p>Unflavored</p>
                  </div>
                </div>
              </div>
              <div
                className={style.checkout}
                onClick={() => {
                  checkout();
                }}
              >
                <p>CHECKOUT NOW!</p>
              </div>
            </div>
          </>
        )}
      </main>
      <main className={style.desktop}>
        <div className={style.desktopBackgroundHero}></div>

        <div className={style.header}>
          <div className={style.desktopLogo}>
            <Link href="/">
              <ImageContainer imageContainerConfig={desktopLogo} />
            </Link>
          </div>
          <div>
            <Svg icon="DangerIcon" color="var(--primaryColor)" />
            <p>THIS OFFER ENDS SOON!</p>
          </div>
          <p>#PWRTOCONTROL</p>
        </div>
        <div className={style.heroCopyDesktop}>
          <h1>FOLLOW THE INSTRUCTIONS BELOW TO CLAIM YOUR FREE KAPS:</h1>
        </div>
        <div className={style.selectDesktop}>
          <h2>1: SELECT YOUR PRE-WORKOUT</h2>
          <div className={style.productCardGrid}>
            {generateProductCard(productCards)}
          </div>
        </div>
        <div className={style.checkoutDesktop}>
          {flavors && (
            <>
              <div>
                <div className={style.proxyFlavor} ref={flavorRef2}></div>
                <div className={style.flavor}>
                  <p>2: SELECT YOUR FLAVOR:</p>
                  <p style={{ fontWeight: "700", fontSize: "14px" }}>
                    ( TAP TO SELECT )
                  </p>
                  {generateFlavors(flavors)}
                </div>
              </div>
              <div>
                <div className={style.proxyReview} ref={reviewRef}></div>
                <div className={style.orderReview}>
                  <div className={style.urgancy}>
                    <Svg
                      icon="DangerIcon"
                      color="var(--primaryColor)"
                      size="15px"
                    />
                    <p> THIS OFFER ENDS SOON</p>
                  </div>
                  {variantId ? (
                    <>
                      <div className={style.pricesDesktop}>
                        <p style={{ fontWeight: "900" }}>
                          3: REVIEW YOUR ORDER
                        </p>
                        <div className={style.value}>
                          <p>{`-- ${variantData?.productName}: $${variantData?.price}.00`}</p>
                          <p>
                            -- PUMP KAPS:{" "}
                            <span className={style.markout}>$35.00</span> FREE
                          </p>
                          <p>
                            -- SHIPPING:{" "}
                            <span className={style.markout}>$8.57</span> FREE
                          </p>
                        </div>
                        <div className={style.spacer}></div>
                        <p className={style.finalPrice}>
                          FINAL PRICE:{" "}
                          <span className={style.markout}>{`$${
                            Number(variantData?.price) + 35 + 8.57
                          }`}</span>
                          {` $${variantData?.price}.00`}{" "}
                        </p>
                        <div>
                          <div className={style.savings}>
                            <p>
                              You Just Saved $
                              {Math.round(
                                (Number(variantData?.price) +
                                  35 +
                                  8.57 -
                                  Number(variantData?.price)) *
                                  100
                              ) / 100}{" "}
                              !
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={style.reviewGrid}>
                          <div className={style.productReview}>
                            <ImageContainer
                              imageContainerConfig={{
                                src: variantData?.flavorImage!,
                                alt: "",
                                aspectRatio: "8/10",
                              }}
                            />
                            <p style={{ fontWeight: "700", fontSize: "13px" }}>
                              {variantData?.productName}
                            </p>
                            <p style={{ fontWeight: "700", fontSize: "10px" }}>
                              {" "}
                              ${variantData?.price}.00
                            </p>
                            <div
                              className={style.flavorInfo}
                              style={{
                                backgroundColor: variantData?.bgColor,
                                color: variantData?.color,
                              }}
                            >
                              <p
                                style={{ fontWeight: "700", fontSize: "10px" }}
                              >
                                {variantData?.name}
                              </p>
                            </div>
                          </div>
                          <div className={style.productReview}>
                            <ImageContainer
                              imageContainerConfig={{
                                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/PumpCaps-min_txkkpe.png",
                                alt: "",
                                aspectRatio: "8/10",
                              }}
                            />
                            <p style={{ fontWeight: "700", fontSize: "13px" }}>
                              PUMP KAPS
                            </p>
                            <p style={{ fontWeight: "700", fontSize: "10px" }}>
                              <span className={style.markout}>$35.00</span> FREE
                            </p>
                            <div
                              className={style.flavorInfo}
                              style={{
                                backgroundColor: "grey",
                              }}
                            >
                              <p
                                style={{ fontWeight: "700", fontSize: "10px" }}
                              >
                                Unflavored
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={style.checkout}
                          onClick={() => {
                            checkout();
                          }}
                        >
                          <p>CHECKOUT NOW!</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      {" "}
                      <p style={{ fontWeight: "900" }}>3: REVIEW YOUR ORDER</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
