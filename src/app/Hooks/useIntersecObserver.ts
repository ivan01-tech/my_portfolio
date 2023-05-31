import { classActive } from "@/app/utils/constant";
import { getClassWithID } from "@/app/utils/getClassWithID";
import { RefObject, useEffect } from "react";

interface Args extends IntersectionObserverInit {}

export const useIntersectObserver = function (
  elementRef: RefObject<Element>,
  { threshold, root, rootMargin }: Args
) {
  useEffect(
    function () {
      if (!elementRef.current) return;

      const intersecParams = { root, threshold, rootMargin };

      const observer = new IntersectionObserver(function ([ent]) {
        if (ent.isIntersecting) {
          //console.log("here we go : ", elementRef);

          const id = elementRef.current?.id;
          //console.log("id : ", id);

          const areActive = document.querySelectorAll(`.${classActive}`);

          areActive.forEach((elt) => {
            elt.classList.remove(classActive);
          });

          const specialClassnameBtn = getClassWithID(id || "");

          if (!specialClassnameBtn) return;
          
          const btns = document.querySelectorAll(`.${specialClassnameBtn}`);

          //console.log("current : ", btns);

          btns.forEach((elt) => {
            elt.classList.add(classActive);
          });
        }
      }, intersecParams);

      // observer the element
      observer.observe(elementRef.current);

      return () => {
        if (!elementRef.current) return;
        observer.unobserve(elementRef.current);
      };
    },
    [elementRef.current, root, rootMargin, threshold]
  );
};
