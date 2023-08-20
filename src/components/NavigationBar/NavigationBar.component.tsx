"use client";

import { useState, useContext, useEffect } from "react";
import style from "./NavigationBar.module.css";

import Svg from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import { useWindowScroll } from "react-use";
import { AppContext } from "@/contexts/AppContext";
import createDiscpatch from "@/helpers/functions/createDispatch";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  const path = usePathname();

  const { appState, dispatch } = useContext(AppContext);
  const { y } = useWindowScroll();

  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    if (!appState.menuOpen && !appState.cartOpen) {
      setLastScrollPos(y);
    }
  }, [appState.menuOpen, appState.cartOpen, y]);

  const backgroundHidden =
    appState.menuOpen || appState.cartOpen ? lastScrollPos < 15 : y < 15;
  const colorValue = appState.darkTheme ? "black" : "white";
  const colorValueInvert = appState.darkTheme ? "white" : "black";
  const navInitaldark = appState.navInvert
    ? backgroundHidden
      ? colorValue
      : colorValueInvert
    : colorValueInvert;

  const imageColorValue = appState.darkTheme
    ? "https://res.cloudinary.com/dod9nbjke/image/upload/v1688773962/VZN/Logos/VZN_Logo_Black_Small-min_ki4z23.png"
    : "https://res.cloudinary.com/dod9nbjke/image/upload/v1688766061/VZN/Logos/VZN_Logo_white_Small-min_dtefej.png";

  const imageColorValueInvert = appState.darkTheme
    ? "https://res.cloudinary.com/dod9nbjke/image/upload/v1688766061/VZN/Logos/VZN_Logo_white_Small-min_dtefej.png"
    : "https://res.cloudinary.com/dod9nbjke/image/upload/v1688773962/VZN/Logos/VZN_Logo_Black_Small-min_ki4z23.png";

  const imageContainerConfig: ImageContainerProps = {
    src: appState.navInvert
      ? backgroundHidden
        ? imageColorValue
        : imageColorValueInvert
      : imageColorValueInvert,
    alt: "VZN Nutrition Logo",
    aspectRatio: "352/157",
    height: "25px",
  };

  const imageContainerConfigDesktop: ImageContainerProps = {
    src: imageColorValueInvert,
    alt: "VZN Nutrition Logo",
    aspectRatio: "352/157",
    height: "25px",
  };

  return (
    <>
      <nav
        className={style.conatinerMobile}
        style={{
          backgroundColor: backgroundHidden ? "transparent" : colorValue,
          borderBottom: backgroundHidden
            ? "2px solid transparent"
            : `2px solid ${colorValueInvert} `,
        }}
      >
        <div
          onClick={() => {
            dispatch(createDiscpatch(true, "SET_MENU_OPEN"));
          }}
        >
          <Svg icon="MenuIcon" size="25px" color={navInitaldark} />
        </div>
        <Link href={"/"}>
          <ImageContainer imageContainerConfig={imageContainerConfig} />
        </Link>
        <div
          onClick={() => {
            dispatch(createDiscpatch(true, "SET_CART_OPEN"));
          }}
        >
          <Svg icon="CartIcon" size="25px" color={navInitaldark} />
        </div>
      </nav>
      <nav
        className={style.conatinerDesktop}
        style={{
          backgroundColor: colorValue,
          borderBottom: `2px solid ${colorValueInvert}`,
        }}
      >
        <Link href={"/"}>
          <ImageContainer imageContainerConfig={imageContainerConfigDesktop} />
        </Link>
        <div className={style.linkContainer}>
          <ul style={{ color: colorValueInvert }}>
            <li>
              <Link href="/">
                <p
                  style={{
                    textDecoration: path === "/" ? "underline" : "",
                    fontWeight: path === "/" ? "800" : "700",
                  }}
                  className={`${path === "/" ? style.pulse : ""}`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/shop/all-products">
                <p
                  style={{
                    textDecoration:
                      path.split("/")[1] === "shop" ? "underline" : "",
                    fontWeight: path === "/" ? "800" : "700",
                  }}
                  className={`${
                    path.split("/")[1] === "shop" ? style.pulse : ""
                  }`}
                >
                  Shop
                </p>
              </Link>
            </li>
            <li>
              <p
                onClick={() => {
                  alert("STACK BUILDER COMING SOON...");
                }}
              >
                Stack Builder
              </p>
            </li>
            <li>
              <Link href="/our-story">
                <p
                  style={{
                    textDecoration:
                      path.split("/")[1] === "our-story" ? "underline" : "",
                    fontWeight: path === "/" ? "800" : "700",
                  }}
                  className={`${
                    path.split("/")[1] === "our-story" ? style.pulse : ""
                  }`}
                >
                  Our Story
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact-page">
                <p style={{ fontWeight: "700" }}>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={style.icon}
          onClick={() => {
            dispatch(createDiscpatch(true, "SET_CART_OPEN"));
          }}
        >
          <Svg icon="CartIcon" size="25px" color={colorValueInvert} />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
