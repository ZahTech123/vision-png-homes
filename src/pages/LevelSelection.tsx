import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import building images
import img1 from '../assets/Level/BuildingView/IMG-20250804-WA0077.jpg';
import img2 from '../assets/Level/BuildingView/IMG-20250804-WA0078.jpg';
import img3 from '../assets/Level/BuildingView/IMG-20250804-WA0079.jpg';
import img4 from '../assets/Level/BuildingView/IMG-20250804-WA0080.jpg';
import img5 from '../assets/Level/BuildingView/IMG-20250804-WA0081.jpg';
import img6 from '../assets/Level/BuildingView/IMG-20250804-WA0082.jpg';

const buildingImages = [img1, img2, img3, img4, img5, img6];

export function LevelSelection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % buildingImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 space-y-6 overflow-hidden">
      {/* Left Watermark Image */}
      <img
        src={buildingImages[currentImageIndex]}
        alt="Building Watermark Left"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-full object-cover opacity-10 transition-opacity duration-1000 ease-in-out"
        style={{ width: '25vw', zIndex: -1, filter: 'contrast(180%)' }}
      />

      {/* Right Watermark Image */}
      <img
        src={buildingImages[currentImageIndex]}
        alt="Building Watermark Right"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-cover opacity-10 transition-opacity duration-1000 ease-in-out"
        style={{ width: '25vw', zIndex: -1, filter: 'contrast(180%)' }}
      />

      <div className="absolute top-4 left-4">
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-8">Select a Level</h1>
      <div className="flex flex-col space-y-4 z-10"> {/* Ensure buttons are above watermarks */}
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L8S4">Level 8, Suite 4</Link>
        </Button>
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L8S2">Level 8, Suite 2</Link>
        </Button>
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L8S1">Level 8, Suite 1</Link>
        </Button>
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L7S2">Level 7, Suite 2</Link>
        </Button>
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L7S1">Level 7, Suite 1</Link>
        </Button>
        <Button size="lg" className="text-lg px-8 py-3">
          <Link to="/level/L1S1">Level 1, Suite 1</Link>
        </Button>
      </div>
    </div>
  );
}
