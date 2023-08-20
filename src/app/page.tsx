"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import Svg from "../../public/svgs/svgComponent/svg.component";
import Link from "next/link";
import InfoBox, { infoBoxProps } from "@/components/infoBox/infoBox.component";
import KloutCard, {
  KloutCardProps,
} from "@/components/KloutCard/KloutCard.component";
import UserReview, {
  UserReviewProps,
} from "@/components/UserReview/UserReview.component";
import UserReviewSlider from "@/components/UserReviewSlider/UserReviewSlider.component";
import reviews from "../../public/data/userReviews";
import ValuesGrid, {
  ValuesGridProps,
} from "@/components/ValuesGrid/ValuesGrid.component";
import Footer from "@/components/Footer/Footer.component";
import { useRef } from "react";

import CtaButton, {
  CtaButtonConfig,
} from "@/components/CtaButton/CtaButton.component";

export default function Home() {
  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691872483/Klout/Logos/Alian-Green-min_d4vyct.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1/1",
  };

  const mobileHeroBg1: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874657/Klout/Banner%20Images/KloutHero-BG1_ywuykx.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "9/16",
    blur: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691963579/Klout/Banner%20Images/KloutHero-BG1-min-blur-min_i7fpho.jpg",
  };

  const mobileHeroBg2: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874657/Klout/Banner%20Images/KloutHero-BG2_pp3nvj.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1080/1420",
  };

  const mobileHeroProducts: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874658/Klout/Banner%20Images/KloutBannerProducts_lyu7zq.png",
    alt: "Klout Alian Logo",
    aspectRatio: "9/16",
  };

  const CtaConfig: CtaButtonConfig = {
    text: "claim my free pump kaps now!",
    link: "/checkout",
  };

  const pumpInfoBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691883148/Klout/Banner%20Images/Mid_Funnel_Banner_Long_drfxue.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1080/4480",
  };

  const pumpConfig: infoBoxProps = {
    title: "PUMP LEVELS",
    copy: "Fuel your muscles with the might of VasoDrive™ and NO3-T Nitrates. As Pump Kaps work their magic, feel each rep gradually increase muscle fullness until you achieve the most skin-tearing pump of your life.",
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/810-min_ocdggb.png",
  };

  const bloodFlowConfig: infoBoxProps = {
    title: "BLOOD FLOW",
    copy: "Backed by the strength of AmentoPump, as you shatter your limits, enhanced blood flow allows for more pronounced veins, ensuring peak performance and an unparalleled physique.",
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/810-min_ocdggb.png",
  };

  const strengthConfig: infoBoxProps = {
    title: "STRENGTH LEVELS",
    copy: "Unlock next-level strength and stamina powered by VasoDrive and AmentoPump. With Pump Kaps, every set and rep is supercharged, letting you lift heavier and persevere longer in even the most demanding sessions.",
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/710-min_bqwmqo.png",
  };

  const productInfoBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692574612/Klout/Banner%20Images/Pre-banner-1-2_kp5o3i.jpg",
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
          title: "max endurance",
          icon: "FireIcon",
        },
        {
          title: "max hydration",
          icon: "WaterIcon",
        },
        {
          title: "Intense Pumps",
          icon: "FlexIcon",
        },
      ],
      link: "/kaio-pump",
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
    },
  ];

  const valuesGridConfig: ValuesGridProps = {
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

  const generateProductCard = (cards: KloutCardProps[]) => {
    const gen = [];
    for (let i = 0; i < cards.length; i++) {
      gen.push(<KloutCard config={cards[i]} />);
    }
    return gen;
  };

  const targetElementRef = useRef({} as HTMLDivElement);

  const scrollToElement = (ref: React.RefObject<HTMLDivElement>): void => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //desktop

  const desktopLogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png",
    alt: "Klout Alian Logo",
    aspectRatio: "300/105",
  };

  const desktopHero1: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692070790/Klout/Banner%20Images/FinalDesktop_gzxmer.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "16/9",
    blur: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692070921/Klout/Banner%20Images/banner1-blur_usb6kz.jpg",
  };

  const desktopHero2: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692077772/Klout/Banner%20Images/Realfinaldesktop_dckdaz.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1920/848",
    blur: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692074495/Klout/Banner%20Images/FinalBlur_yhihhk.jpg",
  };

  const reviewBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692119674/Klout/Banner%20Images/DesktopBanner3-min_s3m6fx.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1920/1080",
  };

  const desktopBannerProducts: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692075195/Klout/Banner%20Images/DesktopBanner2-v4_ovpzk0.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1920/2413",
  };

  const generateReview = (reviews: UserReviewProps[]) => {
    const gen = [];
    for (let i = 0; i < reviews.length; i++) {
      gen.push(<UserReview userReviewConfig={reviews[i]} />);
    }
    return gen;
  };

  return (
    <>
      <main className={style.main}>
        <ImageContainer imageContainerConfig={backgroundImage} />
        <div className={style.logo}>
          <ImageContainer imageContainerConfig={logoConfig} />
        </div>
        <div className={style.header}>
          <Svg icon="DangerIcon" color="var(--primaryColor)" size="14px" />
          <p>THIS OFFER ENDS SOON!</p>
        </div>
        <div className={style.heroBackground}>
          <ImageContainer imageContainerConfig={mobileHeroBg1} />
          <ImageContainer imageContainerConfig={mobileHeroBg2} />
          <div className={style.mobileProducts}>
            <ImageContainer imageContainerConfig={mobileHeroProducts} />
          </div>
          <div className={style.backgroundBlackBuffer}></div>
        </div>
        <div className={style.heroCopy}>
          <div>
            <h1>GET FREE PUMP KAPS</h1>
            <div>
              <h2>
                WHEN YOU BUY <span className="underline">ANY PRE-WORKOUT</span>
              </h2>
            </div>
          </div>
          <div>
            <h3>
              <span className={style.retail}>PUMP KAPS RETAIL PRICE:</span>{" "}
              <span className={style.price}>$35.00</span>{" "}
              <span className="underline">FREE!</span>
            </h3>
            <h3>
              PLUS, EXPERIENCE ONE OF OUR{" "}
              <span className="underline">KILLER PRE-WORKOUTS!</span>
            </h3>
          </div>
        </div>
        <div className={style.heroBuffer}>
          <div className={style.ctaCopy}>
            <CtaButton config={CtaConfig} />
            <div>
              <h4>TRY THE KING OF KAPS FOR FREE!</h4>
              <p>
                Our industry-leading Pump Kaps are your new secret weapon for
                unlocking skin-splitting pumps that not only feel incredible but
                make you look absolutely diced.{" "}
              </p>
              <div
                onClick={() => {
                  scrollToElement(targetElementRef);
                }}
              >
                <p className="highlightCopy">VIEW PRODUCT BREAKDOWN</p>
                <Svg icon="ArrowIcon" color="var(--primaryColor)" size="12px" />
              </div>
            </div>
          </div>
          <CtaButton config={CtaConfig} />
        </div>
        <div className={style.pumpInfo} ref={targetElementRef}>
          <div></div>
          <div>
            <h4>OUT OF THIS WORLD PUMPS...</h4>
            <p>
              Meet KLOUT's Pump Kaps; formulated with cutting-edge ingredients,
              they promise skin-splitting pumps that make every muscle and vein
              stand out. With Pump Kaps, elevate both your performance and
              appearance to champion levels.
            </p>
          </div>
          <InfoBox config={pumpConfig} />
          <InfoBox config={bloodFlowConfig} />
          <InfoBox config={strengthConfig} />
          <CtaButton config={CtaConfig} />
        </div>
        <div className={style.productInfo}>
          <ImageContainer imageContainerConfig={productInfoBanner} />
          <div>
            <h4>STACK YOUR KAPS WITH ONE OF OUR INDUSTRY-LEADING PRES</h4>
            <p>
              Experience unmatched energy with one of our elite pre-workout
              products. To ensure you're fully equipped, we're gifting you the
              kaps as a special bonus to add to the stack.
            </p>
          </div>
          <div className={style.productInfoGrid}>
            {generateProductCard(productCards)}
          </div>
          <CtaButton config={CtaConfig} />
          <div className={style.socialProof}>
            <h4>
              {"thousands have spoken, klout pwr is unmatched".toUpperCase()}
            </h4>
            <p>
              Klout PWR stands unparalleled in it’s league. The raving reviews
              of thousands can't be wrong – experience the unmatched power for
              yourself.
            </p>
          </div>
          <UserReviewSlider userReviewSliderConfig={{ reviews: reviews }} />
          <ValuesGrid valuesGridConfig={valuesGridConfig} />
          <CtaButton config={CtaConfig} />
        </div>
        <Footer />
      </main>
      <main className={style.desktop}>
        <div className={style.desktopBackgroundHero}>
          <ImageContainer imageContainerConfig={desktopHero1} />
          <ImageContainer imageContainerConfig={desktopHero2} />
        </div>
        <div className={style.heroText}>
          <p>
            PUMP KAPS RETAIL PRICE: <span className={style.price}>$35.00</span>{" "}
            <span className="underline">FREE!</span>
          </p>
          <p>PLUS, EXPERIENCE ONE OF OUR KILLER PRE-WORKOUTS!</p>
        </div>
        <div className={style.header}>
          <div className={style.desktopLogo}>
            <ImageContainer imageContainerConfig={desktopLogo} />
          </div>
          <div>
            <Svg icon="DangerIcon" color="var(--primaryColor)" />
            <p>THIS OFFER ENDS SOON!</p>
          </div>
          <p>#PWRTOCONTROL</p>
        </div>
        <div className={style.heroCopyDesktop}>
          <h1>
            GET <span className="underline">FREE</span> PUMP KAPS
          </h1>
          <h2>WHEN YOU BUY ANY PRE-WORKOUT</h2>
        </div>
        <div className={style.bannerOffsetDesktop}></div>
        <div className={style.pumpInfoDesktop}>
          <h2>TRY THE KING OF KAPS FOR FREE!</h2>
          <p>
            Our industry-leading Pump Kaps are your new secret weapon for
            unlocking skin-splitting pumps that not only feel incredible but
            make you look absolutely diced. Meticulously crafted with a blend of
            cutting-edge ingredients, these capsules are designed to supercharge
            your circulation, optimizing every rep and set.
          </p>
          <div className={style.desktopInfoBoxes}>
            <InfoBox
              config={{
                ...pumpConfig,
                info: { title: "VasoDrive™ Power", icon: "FlexIcon" },
              }}
            />
            <InfoBox
              config={{
                ...bloodFlowConfig,
                info: { title: "Peak Performance", icon: "FireIcon" },
              }}
            />
            <InfoBox
              config={{
                ...strengthConfig,
                info: { title: "Supercharged Sets", icon: "ElectricIcon" },
              }}
            />
          </div>
          <CtaButton config={CtaConfig} />
        </div>
        <div className={style.productInfoDesktop}>
          <div className={style.desktopProductBackground}>
            <ImageContainer imageContainerConfig={desktopBannerProducts} />
          </div>
          <div className={style.productCopyDesktop}>
            <h2>STACK YOUR KAPS WITH ONE OF OUR INDUSTRY-LEADING PRES</h2>
            <p>
              Experience unmatched energy with one of our elite pre-workout
              products. To ensure you're fully equipped, we're gifting you the
              kaps as a special bonus to add to the stack.
            </p>
          </div>
          <div className={style.desktopKaps}>
            {generateProductCard(productCards)}
          </div>
        </div>
        <div className={style.reviews}>
          <div className={style.reviewsBackground}>
            <ImageContainer imageContainerConfig={reviewBanner} />
          </div>
          <div className={style.reviewHeading}>
            <h1>
              {"thousands have spoken, klout pwr is unmatched".toUpperCase()}
            </h1>
            <p>
              Klout PWR stands unparalleled in it’s league. The raving reviews
              of thousands can't be wrong – experience the unmatched power for
              yourself.
            </p>
            <div>
              <Svg icon="verifiedIcon" color="white" size="18px" />
              <p>44 Verified Reviews for Pump Kaps</p>
            </div>
          </div>
          <div className={style.reviewGrid}>{generateReview(reviews)}</div>
          <CtaButton config={CtaConfig} />
        </div>
        <Footer />
      </main>
    </>
  );
}
