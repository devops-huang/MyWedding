// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Sparkles } from 'lucide-react';

export function WeddingHeader({
  title,
  subtitle
}) {
  return <div className="text-center mb-8">
      <div className="flex justify-center items-center mb-4">
        <Sparkles className="w-6 h-6 text-blue-400 mx-2" />
        <h1 className="text-3xl font-bold text-white font-yahei">{title}</h1>
        <Sparkles className="w-6 h-6 text-blue-400 mx-2" />
      </div>
      {subtitle && <p className="text-blue-100 text-lg font-light font-yahei">{subtitle}</p>}
    </div>;
}