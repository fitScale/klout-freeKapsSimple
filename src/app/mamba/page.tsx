import KloutProduct from "@/components/KloutProduct/KloutProduct.component";
import { KloutProductProps } from "@/components/KloutProduct/KloutProduct.component";

const KaioPump = () => {
  const config: KloutProductProps = {
    title: "MAMBA HIGH-STIM",
    subTitle: "“The Performance Juggernaut”",
    price: "$47.00",
    servings: "25",
    reviews: "435",
    description:
      " Packed with an elite lineup of stimulants and nootropics, Mamba promises a rush that's unparalleled and unbeatable. When you need a force to push past boundaries, to crush every PR, and shatter your goals, reach for Mamba. Prepare to dominate, every single lift.",
    desktopBanner:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692125405/Klout/Banner%20Images/FinalKioKen_lv1wuh.jpg",
    heroBannerSrc:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692721934/Klout/Banner%20Images/Klout2_xdkhlw.jpg",
    color: "#f00038",
    info: [
      {
        title: "POWER LEVELS",
        copy: "Fuel up with Mamba, where raw power meets relentless drive. Elevate your sessions, break barriers, and feel the surging energy with each scoop. Say goodbye to fatigue and hello to relentless vigor. With Mamba, you don't just get through the workout; you dominate it.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691968731/Klout/Misc%20Assets/Red-max_zhhmn5.png",
      },
      {
        title: "PUMP LEVELS",
        copy: "Unleash unprecedented muscle volume with Mamba's unique blend. Experience a pump so profound it feels like you're bursting out of your own skin. Mamba ensures that every rep is maximized, every set intensified. Flex, flaunt, and feel the difference.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691968730/Klout/Misc%20Assets/red-810_lbxtwl.png",
      },
      {
        title: "FOCUS LEVELS",
        copy: "Channel unwavering concentration and dive deep into your zone. Mamba's nootropic blend is specifically designed to sharpen your senses and hone your attention. When the noise fades, and all that remains is you and your mission, you'll know Mamba's focus component is hard at work.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691968730/Klout/Misc%20Assets/red-710_ixuutl.png",
      },
    ],
    values: {
      values: [
        {
          heading: "Energy Eruption",
          subtext: "",
          icon: "ElectricIcon",
          information:
            " Dive into workouts with an unparalleled energy boost. Mamba's precise concoction of high-grade stimulants ensures you're always on, never fatigued.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Pump Blend",
          subtext: "",
          icon: "FlexIcon",
          information:
            "Every rep counts with Mamba. Boosted blood flow ensures nutrients reach every muscle fiber, delivering pumps that not only feel good but also fuel muscle growth.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Hyper Focus",
          subtext: "",
          icon: "EyeIcon",
          information:
            "Elevate your mental game. With Mamba, every moment in the gym is a focused endeavor, free from distractions, fully immersed.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Insane Flavors",
          subtext: "",
          icon: "FireIcon",
          information:
            "Who said effective can't be delicious? Mamba’s unique flavors ensure that your taste buds are just as pumped as your muscles.",
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
