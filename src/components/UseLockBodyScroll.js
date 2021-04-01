import { useLayoutEffect } from "react";

export default function UseLockBodyScroll(showMenu) {
  useLayoutEffect(
    () => {
      if(showMenu) {
          //prevent scrolling on mount
          document.body.style.overflow = "hidden";
      }
      else {
            // re-enable scrolling when menu closes
          document.body.style.overflow = "visible";
        }
    },
    [showMenu]//empty array to ensures effect is only run when mount and unmount
  );
}