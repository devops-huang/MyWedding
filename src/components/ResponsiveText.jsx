// @ts-ignore;
import React from 'react';

export function ResponsiveText({
  children,
  className = "",
  size = "base",
  weight = "normal"
}) {
  const sizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl md:text-2xl",
    xl: "text-xl sm:text-2xl md:text-3xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl",
    "4xl": "text-4xl sm:text-5xl md:text-6xl"
  };
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold"
  };
  return <div className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}>
      {children}
    </div>;
}