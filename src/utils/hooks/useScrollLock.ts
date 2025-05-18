import { useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (isLocked) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
      body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = body.dataset.scrollY ? parseInt(body.dataset.scrollY) : 0;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      delete body.dataset.scrollY;
      window.scrollTo({left: 0, top: scrollY, behavior: 'auto'});
    }
  }, [isLocked]);
};
