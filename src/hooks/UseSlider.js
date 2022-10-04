import { useState, useEffect } from "react";

export const UseSlider = (itemWidthRef, gap, unmountЫlides) => {
  const [itemWidth, setSItemWidth] = useState(0);
  const [positionSlider, setPositionSlider] = useState(0);
  const [transition, setTransition] = useState(0.3);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handlerWidth = () => {
      setSItemWidth(itemWidthRef.current.offsetWidth);
      setPositionSlider(-itemWidthRef.current.offsetWidth - gap);
      setCount(1);
    };
    window.addEventListener("resize", handlerWidth);
    handlerWidth();
    return () => window.removeEventListener("resize", handlerWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const handlerPrev = () => {
    if (count > 0 && count < unmountЫlides) {
      setCount((prev) => count - 1);
      setTransition(0.3);
      setPositionSlider((prev) => prev + itemWidth + gap);
    }
    setTimeout(() => {
      if (count === 1) {
        setCount(unmountЫlides - 1);
        setTransition(0);
        setPositionSlider((-itemWidth - gap) * (unmountЫlides - 1));
      }
    }, 300);
  };
  const handlerNext = () => {
    if (count < unmountЫlides && count > 0) {
      setTransition(0.3);
      setCount(count + 1);
      setPositionSlider((prev) => prev - itemWidth - gap);
    }
    setTimeout(() => {
      if (count === unmountЫlides - 1) {
        setTransition(0);
        setCount(1);
        setPositionSlider(-itemWidth - gap);
      }
    }, 300);
  };
  return [transition, positionSlider, handlerPrev, handlerNext, itemWidth];
};
