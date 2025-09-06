// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function PhotoGallery({
  photos
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openGallery = index => setSelectedIndex(index);
  const closeGallery = () => setSelectedIndex(null);
  const nextPhoto = () => setSelectedIndex(prev => (prev + 1) % photos.length);
  const prevPhoto = () => setSelectedIndex(prev => (prev - 1 + photos.length) % photos.length);
  if (selectedIndex !== null) {
    return <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <button onClick={closeGallery} className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <button onClick={prevPhoto} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button onClick={nextPhoto} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        <img src={photos[selectedIndex]} alt={`婚纱照 ${selectedIndex + 1}`} className="max-w-full max-h-full object-contain" />
      </div>;
  }
  return <div className="grid grid-cols-2 gap-4 p-4">
      {photos.map((photo, index) => <div key={index} className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => openGallery(index)}>
          <img src={photo} alt={`婚纱照 ${index + 1}`} className="w-full h-48 object-cover rounded-xl shadow-lg" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>)}
    </div>;
}