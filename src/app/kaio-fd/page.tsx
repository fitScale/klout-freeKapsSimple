import KloutProduct from "@/components/KloutProduct/KloutProduct.component";
import { KloutProductProps } from "@/components/KloutProduct/KloutProduct.component";

const KaioPump = () => {
  const config: KloutProductProps = {
    title: "kaio final destination:",
    subTitle: "“tHE PR ANNIHILATOR”",
    price: "$57.00",
    servings: "25",
    reviews: "39",
    desktopBanner:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692121882/Klout/Banner%20Images/KAIOABANNERDesktop2_wtjkla.jpg",
    description:
      "KAIO Final Destination - where energy isn't just a small boost, it's a PR shattering force. Eight elite, trademarked ingredients converge to unleash relentless energy, out of this world pumps and a focus that completely eliminates distractions. With KAIO, not only will you touch your limits, you'll obliterate them.",
    heroBannerSrc:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1691955366/Klout/Banner%20Images/KAIOABANNER1_l3ahcs.png",
    color: "#D200ED",
    info: [
      {
        title: "ENERGY LEVELS",
        copy: "With KAIO Final Destination, experience a rush that surpasses anything you've ever known. Each scoop is a direct ticket to untapped reservoirs of power. As you take it, watch fatigue get sidelined and raw energy take center stage.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/Max-min_ummbaw.png",
      },
      {
        title: "FOCUS LEVELS",
        copy: "In the chaos of weights and reps, find clarity. KAIO narrows your world to just you and your goals. Each ingredient is tailored to fine-tune your attention, making distractions a thing of the past.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/Max-min_ummbaw.png",
      },
      {
        title: "PUMP LEVELS",
        copy: "With KAIO, experience a pump so profound it feels like you're bursting out of your own skin. KAIO ensures that every rep is maximized, every set intensified. Flex, flaunt, and feel the difference.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/Max-min_ummbaw.png",
      },
    ],
    values: {
      values: [
        {
          heading: "Energy Overdrive",
          subtext: "",
          icon: "ElectricIcon",
          information:
            "Ride the unyielding wave of energy unleashed by our elite blend. Ingredients like Caffeine Anhydrous and Theobromine guarantee a PR-shattering force behind each workout.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Relentless Focus",
          subtext: "",
          icon: "EyeIcon",
          information:
            "Stay dialed in and distraction-free. With potent nootropics like L-Tyrosine and Alpha GPC, KAIO ensures a mental clarity that'll keep you razor-focused from start to finish.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Pump Performance:",
          subtext: "",
          icon: "FlexIcon",
          information:
            "With ingredients like Beta-Alanine and Citrulline Malate, feel your muscles engorge, leading to pumps that not only look explosive but feel unbeatable, setting the stage for unparalleled gains.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "NO3-T Nitrate Infusion",
          subtext: "",
          icon: "FlexIcon",
          information:
            "Experience skin-splitting pumps like never before. Dive deep into every rep with the unique NO3-T Nitrate blend, making every flex felt and every muscle pronounced.",
          darkTheme: true,
          smallHeading: true,
        },
      ],
      darkTheme: true,
    },
  };

  return <KloutProduct config={config} />;
};

export default KaioPump;
