"use client";

import Link from "next/link";
import style from "./MenuOverlay.module.css";
import ImageContainer from "../ImageContainer/ImageContainer.componenet";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/contexts/AppContext";
import wait from "@/helpers/functions/wait";
import createDiscpatch from "@/helpers/functions/createDispatch";
import { useLockBodyScroll } from "@/helpers/hooks/useLockBodyScroll";

const MenuOverlay = () => {
  const { appState, dispatch } = useContext(AppContext);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (appState.menuOpen === true) {
      setFade(true);
    } else if (appState.menuOpen === false) {
      setFade(false);
    }
  }, [appState.menuOpen]);

  return (
    <div
      className={`${style.container} ${fade ? style.fade : ""}`}
      style={{ display: appState.menuOpen ? "block" : "none" }}
      onClick={() => {
        setFade(false);
        wait(0.1).then(() => {
          dispatch(createDiscpatch(false, "SET_MENU_OPEN"));
        });
      }}
    >
      <div className={`${style.menu}  ${fade ? style.move : ""}`}>
        <h2>SHOP:</h2>
        <div className={style.shopLinks}>
          <Link href="/shop/pre-workout">PRE-WORKOUT</Link>
          <Link href="/shop/recovery">RECOVERY</Link>
          <Link href="/shop/all-products">SHOP ALL</Link>
        </div>
        <div
          className={style.stackBuilder}
          onClick={() => {
            alert("STACK BUILDER COMING SOON...");
          }}
        >
          <p>
            BUILD YOUR OWN STACK AND GET UP TO{" "}
            <span className="underline">35% OFF!</span>
          </p>
          <ImageContainer
            imageContainerConfig={{
              src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689205127/VZN/Image%20Banners/DialedBanner_rz4rob.jpg",
              alt: "",
              aspectRatio: "1/1",
              className: style.image,
            }}
          />
          <Link href="/" className={style.stackBuilderATC}>
            BUILD NOW!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
