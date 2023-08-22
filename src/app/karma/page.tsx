import KloutProduct from "@/components/KloutProduct/KloutProduct.component";
import { KloutProductProps } from "@/components/KloutProduct/KloutProduct.component";

const Karma = () => {
  const config: KloutProductProps = {
    title: "KARMA LOW-STIM",
    subTitle: "“The Precision Powerhouse”",
    price: "$57.00",
    servings: "25",
    reviews: "39",
    description:
      "Crafted with a potent nootropic blend, six elite trademarked ingredients, and just the right touch of energy, Karma is the game-changer for those looking to stay dialed in their entire session, with no jitters and certainly no crash. Low on stimulants, high on clarity, and insanely unique and tasty flavors - that's Karma.",
    desktopBanner:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692125607/Klout/Banner%20Images/FinalKarma_vb9cc2.jpg",
    heroBannerSrc:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692721934/Klout/Banner%20Images/Klout4_tv6ift.jpg",
    color: "#e300a3",
    info: [
      {
        title: "FOCUS LEVELS",
        copy: "Karma fine-tunes your mental compass, directing you straight to your goals. With unwavering focus, watch distractions crumble as you crush your workouts.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691975456/Klout/Misc%20Assets/Pink_-_Max-min_1_aget5j.png",
      },
      {
        title: "PUMP LEVELS",
        copy: "Unleash unprecedented muscle volume with Karma's unique blend. Experience a pump so profound it feels like you're bursting out of your own skin. Karma ensures that every rep is maximized, every set intensified. Flex, flaunt, and feel the difference.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691975456/Klout/Misc%20Assets/810-min_1_tehufl.png",
      },
      {
        title: "ENERGY LEVELS",
        copy: "Bid goodbye to jitters and crashes. With a reasonable 200mg of Caffeine Anhydrous and the natural touch of Theobromine, KARMA's energy release is seamless, pushing you just right without the overdrive.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691975456/Klout/Misc%20Assets/Pink-710-min_1_tvbkvc.png",
      },
    ],
    values: {
      values: [
        {
          heading: "Nootropic Nirvana",
          subtext: "",
          icon: "EyeIcon",
          information:
            "Elevate every rep with unmatched focus, thanks to the powerful synergy of L-Theanine and Alpha GPC. KARMA ensures you're laser-focused, annihilating every distraction that comes your way.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Smooth Energy Surge",
          subtext: "",
          icon: "ElectricIcon",
          information:
            "Bid goodbye to jitters and crashes. With a meticulous 200mg of Caffeine Anhydrous and the natural touch of Theobromine, KARMA's energy release is seamless, pushing you just right without the overdrive.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Nitrate Pump Power",
          subtext: "",
          icon: "FlexIcon",
          information:
            "Bask in the glory of skin-tearing pumps powered by the premium NO3-T Nitrate blend. Every set feels deeper, every rep more pronounced, sculpting your physique to perfection.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Hyper Hydration",
          subtext: "",
          icon: "WaterIcon",
          information:
            "Fuel your workouts and keep dehydration at bay with Aquamin®. Ensuring optimal electrolyte balance, KARMA guarantees you stay hydrated, helping you power through even the most grueling sessions.",
          darkTheme: true,
          smallHeading: true,
        },
      ],
      darkTheme: true,
    },
  };

  return <KloutProduct config={config} />;
};

export default Karma;
