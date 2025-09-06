// @ts-ignore;
import React from 'react';

export function ResponsiveGrid({
  children,
  className = "",
  cols = 1,
  sm = 2,
  md = 3,
  lg = 4,
  gap = 4
}) {
  return <div className={`grid grid-cols-${cols} sm:grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} gap-${gap} ${className}`}>
      {children}
    </div>;
}