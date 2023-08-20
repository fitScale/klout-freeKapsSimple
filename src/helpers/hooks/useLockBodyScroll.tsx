import { useLayoutEffect, useRef } from "react";

export const useLockBodyScroll = (open: boolean) => {
  const scrollY = useRef(0);

  useLayoutEffect(() => {
    // Get a reference to the body and contentWrap
    const body = document.body;
    const contentWrap = document.getElementById("contentWrap");

    if (open) {
      // When the overlay opens, remember the current scroll position
      scrollY.current = window.scrollY;

      // Lock the scroll by setting overflow to hidden on the body and contentWrap
      body.style.overflowY = "hidden";
      if (contentWrap) {
        contentWrap.style.overflowY = "hidden";
        contentWrap.style.height = "100vh"; // constrain the height

        // Move the scroll from body to contentWrap
        contentWrap.scrollTop = scrollY.current;
      }
    } else {
      // When the overlay closes, unlock the scroll and reset the body position
      body.style.overflowY = "";
      if (contentWrap) {
        contentWrap.style.overflowY = "";
        contentWrap.style.height = ""; // remove the height constraint
      }

      // Restore the original scroll position
      window.scrollTo(0, scrollY.current);
    }
  }, [open]);
};
