import React, { useState } from 'react';
import Image from 'next/image';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const defaultImageUrl = '/image/hero.png'; // Ensure this path is correct

  // State to manage image source
  const [imgSrc, setImgSrc] = useState(thumbnailUrl);

  return (
    <div className="relative text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-md w-full">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative w-96 h-52">
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 hover:opacity-80"
           
            onError={() => {
              // Fallback to default image if YouTube image fails
              setImgSrc(defaultImageUrl);
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 p-2">
            <span className="text-sm font-semibold">{title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default YouTubeVideo;
