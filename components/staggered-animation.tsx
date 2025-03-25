"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  initialOpacity?: number;
  distance?: number;
}

export function StaggeredAnimation({
  children,
  className,
  delay = 0,
  staggerDelay = 100,
  direction = "up",
  initialOpacity = 0,
  distance = 12,
}: StaggeredAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Convert children to an array
  const childrenArray = React.Children.toArray(children);

  // Get direction styles
  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "fade":
        return "none";
      default:
        return "none";
    }
  };

  return (
    <>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={cn(className)}
          style={{
            opacity: isVisible ? 1 : initialOpacity,
            transform: isVisible ? "none" : getTransform(),
            transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
            transitionDelay: `${delay + index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </>
  );
}
