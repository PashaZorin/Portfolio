import { useState, useEffect } from "react";

export const UseSlider = (itemWidthRef, arrayLength, gap, unmount) => {
  const [itemWidth, setSItemWidth] = useState(0);
  const [positionSlider, setPositionSlider] = useState(0);
  const [transition, setTransition] = useState(0.3);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handlerWidth = () => {
      setSItemWidth(itemWidthRef.current.offsetWidth);
      setPositionSlider(-itemWidthRef.current.offsetWidth - gap);
      setCount(1);
      console.log(count, "count");
    };
    window.addEventListener("resize", handlerWidth);
    handlerWidth();
    return () => window.removeEventListener("resize", handlerWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  useEffect(() => {
    setTimeout(() => {
      if (count === unmount) {
        setTransition(0);
        setCount(1);
        setPositionSlider(-itemWidth - gap);
        console.log("changes");
      }
    }, 300);
    setTimeout(() => {
      if (count === 0) {
        setCount(unmount - 1);
        setPositionSlider((-itemWidth - gap) * unmount - 1);
        setTransition(0);
      }
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  const handlerPrev = () => {
    if (count > 0 && count < unmount) {
      console.log(count);
      setCount((prev) => count - 1);
      setTransition(0.3);
      setPositionSlider((prev) => prev + itemWidth + gap);
    }
  };
  const handlerNext = () => {
    if (count < unmount && count > 0) {
      console.log(count);
      setTransition(0.3);
      setCount(count + 1);
      setPositionSlider((prev) => prev - itemWidth - gap);
    }
  };
  return [transition, positionSlider, handlerPrev, handlerNext, itemWidth];
};
