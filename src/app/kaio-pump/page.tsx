import KloutProduct from "@/components/KloutProduct/KloutProduct.component";
import { KloutProductProps } from "@/components/KloutProduct/KloutProduct.component";

const KaioPump = () => {
  const config: KloutProductProps = {
    title: "KAIO PUMP & PERFORMANCE",
    subTitle: "“The Performance Powerhouse”",
    price: "$57.00",
    servings: "25",
    reviews: "39",
    description:
      "KAIO Pump & Performance is not just another supplement; it's an industry-first blend where pump, endurance, and hydration converge in a one-of-a-kind formula. Experience the synergy of meticulously selected ingredients, tailored to keep you hydrated and firing on all cylinders through even the most intense sessions.",
    desktopBanner:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692724856/Klout/Banner%20Images/Finalkaiof_qdss2h.jpg",
    heroBannerSrc:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1692721934/Klout/Banner%20Images/KloutBanner3_s6xmd6.jpg",
    color: "#f58f00",
    info: [
      {
        title: "PUMP LEVELS",
        copy: "Unleash unprecedented muscle volume with Kaio's unique blend. Experience a pump so profound it feels like you're bursting out of your own skin. Kaio ensures that every rep is maximized, every set intensified. Flex, flaunt, and feel the difference.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691967037/Klout/Misc%20Assets/Max-Orange_bxvtmp.png",
      },
      {
        title: "ENDURANCE LEVELS",
        copy: "Wave goodbye to early burnouts and dwindling energy. Infused with powerful endurance boosters, this blend ensures that every moment of your workout counts, pushing you closer to your peak with every session.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691967037/Klout/Misc%20Assets/Max-Orange_bxvtmp.png",
      },
      {
        title: "HYDRATION LEVELS",
        copy: "Stay rejuvenated, replenished, and ready. With a meticulously crafted hydration blend, KAIO Pump & Performance ensures that your muscles remain saturated, your performance stays optimal, and your recovery is rapid.",
        src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691967037/Klout/Misc%20Assets/Max-Orange_bxvtmp.png",
      },
    ],
    values: {
      values: [
        {
          heading: "Nootropics Blend",
          subtext: "",
          icon: "EyeIcon",
          information:
            "Elevate mental clarity and maintain razor-sharp focus throughout your workouts. L-Ornithine HCI, combined with the antioxidant properties of Grape Seed Extract, helps enhance cognitive function. With every scoop, you're not just fueling your body; you're sharpening your mind for peak performance.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Endurance Blend",
          subtext: "",
          icon: "FireIcon",
          information:
            "Unleash your body's potential with Peak ATPTM, designed to amplify muscular power and provide sustained energy. The inclusion of Senactiv® fosters cell regeneration and endurance, while Taurine keeps fatigue at bay, ensuring longer, more intense workouts.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Hydration Profile",
          subtext: "",
          icon: "WaterIcon",
          information:
            "Experience superior hydration with the infusion of Pink Himalayan Salt and Coconut Water Powder. Our blend also boasts Potassium Citrate and Magnesium Citrate, ensuring a balance of electrolytes and aiding in enhanced pumps.",
          darkTheme: true,
          smallHeading: true,
        },
        {
          heading: "Pump Complex",
          subtext: "",
          icon: "FlexIcon",
          information:
            "Powered by 3D-Pump® and ClusterDextrin, our formula ensures unparalleled muscle hydration and carb-fueled pumps. With the addition of L-Ornithine HCI and Grape Seed Extract, you're guaranteed skin-splitting muscle pumps fortified with workout fuel.",
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
