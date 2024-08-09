"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

interface ICarouselProps {
  slides: React.ReactElement[];
  cachedSlides?: boolean;
  duration?: number;
  animationDuration?: number;
  animationTimingFunction?: string;
  animationType?: "FADE" | "SLIDE" | "ZOOM";
  animationDelay?: number;
  withNavigation?: boolean;
}

interface ICarouselState {
  active: number;
  nextActive: number;
}

interface IAction {
  type: string;
  index?: number;
}

export default function Carousel(props: ICarouselProps): React.ReactElement {
  const [state, dispatch] = React.useReducer(
    (state: ICarouselState, action: IAction) => {
      switch (action.type) {
        case "NEXT":
          return {
            active: state.nextActive,
            nextActive: (state.nextActive + 1) % props.slides.length,
          };
        case "CUSTOM":
          return {
            active: action.index!,
            nextActive: (action.index! + 1) % props.slides.length,
          };
        default:
          throw new Error();
      }
    },
    { active: 0, nextActive: 1 }
  );

  const timerId: React.MutableRefObject<ReturnType<typeof setTimeout> | undefined> = React.useRef();

  React.useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, props.duration || 1000);
    return () => clearTimeout(timerId.current);
  }, [state.nextActive, props.duration]);

  return (
    <div style={styles.container} className="animated-carousel-container ">

      <button className="flex justify-center items-center mt-[18%] ml-2 float-left relative w-auto z-50 text-3xl"><ChevronLeft className=" text-3xl " /></button>
      {(props.slides || []).map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.item,
            ...getAnimationStyle({
              index,
              activeIndex: state.active,
              nextActiveIndex: state.nextActive,
              animationType: props.animationType,
              duration: props.animationDuration,
              timingFunction: props.animationTimingFunction,
              animationDelay: props.animationDelay,
            }),
          }}
          className="animated-carousel-item"
        >
          {slide}
        </div>
      ))}
      {props.withNavigation && (
        <div className="animated-carousel-dots" style={{ zIndex: 1 }}>
          {props.slides.map((_, index) => (
            <button
              key={`${index}`}
              className={`animated-carousel-dot ${index === state.active ? "active" : ""
                }`.trim()}
              onClick={() => dispatch({ type: "CUSTOM", index })}
            />
          ))}
        </div>
      )}
      <button className="flex justify-center items-center float-right mt-[20%] mr-1 relative z-50 w-auto text-3xl"><ChevronRight className=" font-thin text-4xl" /></button>

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    // position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  item: {
    position: "absolute",
    background: "linear-gradient(to right, #DBEDE1, #F7FCF8, #DBEDE1, #DBEDE1 )",
    width: "100%",
    height: "80%",
  },
};


function getAnimationStyle({
  index,
  activeIndex,
  nextActiveIndex,
  animationType,
  duration,
  timingFunction,
  animationDelay,
}: {
  index: number;
  activeIndex: number;
  nextActiveIndex: number;
  animationType?: string;
  duration?: number;
  timingFunction?: string;
  animationDelay?: number;
}): React.CSSProperties {
  const transitionPostfix: string = `${(duration || 700) / 1000}s  ${timingFunction || "cubic-bezier(0.1, 0.99, 0.1, 0.99)"
    } ${(animationDelay || 100) / 1000}s`;
  let style: React.CSSProperties;

  switch (animationType) {
    case "FADE":
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: `opacity ${transitionPostfix}`,
      };
      break;
    case "SLIDE":
      style = {
        transform: `translateX(${(index - activeIndex) * 100}%)`,
        transition: `transform ${transitionPostfix}`,
      };
      break;
    case "ZOOM":
      style = {
        transform: `scale(${activeIndex === index ? 1 : 2})`,
        opacity: activeIndex === index ? 1 : 0,
        transition: `transform ${transitionPostfix}, opacity ${transitionPostfix}`,
      };
      break;
    default:
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: "none",
      };
  }

  return {
    ...style,
    zIndex: activeIndex === index ? 1 : 0,
  };
}
