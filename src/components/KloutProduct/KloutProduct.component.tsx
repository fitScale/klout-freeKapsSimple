import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./KloutProduct.module.css";
import Image from "next/image";
import StarsContainer from "@/components/StarsContainer/StarsContainer.component";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import ValuesGrid, {
  ValuesGridProps,
} from "@/components/ValuesGrid/ValuesGrid.component";
import CtaLink from "@/components/CtaLink/CtaLink.component";
import CtaButton, {
  CtaButtonConfig,
} from "@/components/CtaButton/CtaButton.component";
import Link from "next/link";
import InfoBox, { infoBoxProps } from "@/components/infoBox/infoBox.component";
import KloutCard, {
  KloutCardProps,
} from "@/components/KloutCard/KloutCard.component";
import Footer from "@/components/Footer/Footer.component";
import UserReview, {
  UserReviewProps,
} from "../UserReview/UserReview.component";
import reviews from "../../../public/data/userReviews";

export interface KloutProductProps {
  title: string;
  subTitle: string;
  price: string;
  servings: string;
  description: string;
  heroBannerSrc: string;
  desktopBanner: string;
  color: string;
  info: infoBoxProps[];
  values: ValuesGridProps;
  reviews: string;
}

const KloutProduct = ({ config }: { config: KloutProductProps }) => {
  const logoConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691955757/Klout/Logos/Alian-White_xdcifw.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1/1",
  };

  const mobileHeroBg1: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691955366/Klout/Banner%20Images/KAIOABANNER1_l3ahcs.png",
    alt: "Product Image Banner",
    aspectRatio: "1080/1622",
  };

  const backgroundImage: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691956027/Klout/Misc%20Assets/BackgroundImage1_tbzn9n.jpg",
    alt: "Klout Alian Logo",
    aspectRatio: "1080/1920",
  };

  const ctaConfig: CtaButtonConfig = {
    text: "claim my free pump kaps now!",
    link: "/checkout",
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

  const generateInfoBoxes = (boxes: infoBoxProps[]) => {
    const gen = [];
    for (let i = 0; i < boxes.length; i++) {
      gen.push(<InfoBox config={boxes[i]} />);
    }
    return gen;
  };

  const generateProductCard = (cards: KloutCardProps[]) => {
    const gen = [];
    for (let i = 0; i < cards.length; i++) {
      gen.push(<KloutCard config={{ ...cards[i], color: config.color }} />);
    }
    return gen;
  };

  const desktopBanner: ImageContainerProps = {
    src: config.desktopBanner,
    alt: "Product Image Banner",
    aspectRatio: "1920/1308",
  };

  const reviewBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1692119674/Klout/Banner%20Images/DesktopBanner3-min_s3m6fx.png",
    alt: "Klout Alian Logo",
    aspectRatio: "1920/1080",
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
        <div>
          <Link href="/">
            <ImageContainer imageContainerConfig={logoConfig} />
          </Link>
        </div>
        <ImageContainer
          imageContainerConfig={{ ...mobileHeroBg1, src: config.heroBannerSrc }}
        />
        <div className={style.backgroundImages}>
          <div></div>
          <ImageContainer imageContainerConfig={backgroundImage} />
          <ImageContainer imageContainerConfig={backgroundImage} />
          <ImageContainer imageContainerConfig={backgroundImage} />
        </div>
        <div className={style.body}>
          <div className={style.buffer}></div>
          <div className={style.heading}>
            <h1>{config.title.toUpperCase()}</h1>
            <h2>{config.subTitle.toUpperCase()}</h2>
            <div className={style.reviews}>
              <StarsContainer
                starsContainerConfig={{ stars: 5, color: config.color }}
              />
              <p>{`( ${config.reviews} Reviews )`}</p>
            </div>
            <p>
              <span className={style.price}>{`${config.price}`}</span>
              {" ~ "}
              <span className={style.servings}>
                {config.servings} LOADED SERVINGS
              </span>
            </p>
          </div>
          <p>{config.description}</p>
          <div className={style.breakdown}>
            <p>FORUMULA BREAKDOWN</p>
            <Svg icon="ArrowIcon" color="white" size="14px" />
          </div>
          <ValuesGrid valuesGridConfig={config.values} />
          <CtaButton config={{ ...ctaConfig, color: config.color }} />
          <div className={style.infoBoxes}>
            {generateInfoBoxes(config.info)}
          </div>
          <CtaButton config={{ ...ctaConfig, color: config.color }} />
          <div className={style.productInfoGrid}>
            {generateProductCard(productCards)}
          </div>
          <CtaButton config={{ ...ctaConfig, color: config.color }} />
        </div>
        <Footer />
      </main>
      <main className={style.desktopMain}>
        <div>
          <Link href="/">
            <ImageContainer imageContainerConfig={logoConfig} />
          </Link>
        </div>
        <div className={style.backgroundImage}>
          <ImageContainer imageContainerConfig={desktopBanner} />
        </div>
        <div className={style.mainCopy}>
          <div className={style.headingDesktop}>
            <h1>{config.title.toUpperCase()}</h1>
            <h2>{config.subTitle.toUpperCase()}</h2>
            <div className={style.starsContainer}>
              <StarsContainer
                starsContainerConfig={{ stars: 5, color: config.color }}
              />
              <p>
                {config.price} ~ {config.servings} LOADED SERVINGS
              </p>
            </div>
          </div>

          <p className={style.description}>{config.description}</p>
          <div className={style.breakdown}>
            <p>FORUMULA BREAKDOWN</p>
            <Svg icon="ArrowIcon" color="white" size="14px" />
          </div>
          <div className={style.valuesDesktop}>
            <ValuesGrid valuesGridConfig={config.values} />
          </div>

          <div className={style.infoGrid}>{generateInfoBoxes(config.info)}</div>
          <CtaButton config={{ ...ctaConfig, color: config.color }} />
        </div>
        <h2 style={{ marginLeft: "48px" }}>OUR OTHER PRE-WORKOUTS:</h2>
        <div className={style.productCards}>
          {generateProductCard(productCards)}
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
          <CtaButton config={ctaConfig} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default KloutProduct;
