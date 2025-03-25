"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  initialOpacity?: number;
  distance?: number;
  threshold?: number;
  rootMargin?: string;
  preserveLayout?: boolean;
  gridLayout?: boolean;
}

export function StaggeredAnimation({
  children,
  className,
  delay = 0,
  staggerDelay = 100,
  direction = "up",
  initialOpacity = 0,
  distance = 12,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  preserveLayout = false,
  gridLayout = false,
}: StaggeredAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentContainer = containerRef.current;

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [threshold, rootMargin]);

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

  // If preserveLayout is true, render children directly in the container
  // and apply styles to the container itself
  if (preserveLayout) {
    return (
      <div
        ref={containerRef}
        className={cn(className)}
        style={{
          opacity: isVisible ? 1 : initialOpacity,
          transform: isVisible ? "none" : getTransform(),
          transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
          transitionDelay: `${isVisible ? delay : 0}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  // For grid layouts where we need to preserve the grid but animate each child
  if (gridLayout) {
    // Convert children to an array to map over them
    const childrenArray = React.Children.toArray(children);

    return (
      <div ref={containerRef} className={cn(className)}>
        {childrenArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;

          // Type-safe props with the correct interface
          const childElement = child as React.ReactElement<{
            style?: React.CSSProperties;
          }>;
          const childStyle = childElement.props.style || {};

          return React.cloneElement(childElement, {
            key: childElement.key || index,
            style: {
              ...childStyle,
              opacity: isVisible ? 1 : initialOpacity,
              transform: isVisible ? "none" : getTransform(),
              transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: `${
                isVisible ? delay + index * staggerDelay : 0
              }ms`,
            },
          });
        })}
      </div>
    );
  }

  // Convert children to an array
  const childrenArray = React.Children.toArray(children);

  // Normal staggered animation with each child wrapped individually
  return (
    <div ref={containerRef} className={cn("min-h-[10px]", className)}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isVisible ? 1 : initialOpacity,
            transform: isVisible ? "none" : getTransform(),
            transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
            transitionDelay: `${
              isVisible ? delay + index * staggerDelay : 0
            }ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
