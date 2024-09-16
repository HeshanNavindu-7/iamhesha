import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="relative text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-xs">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-52 object-cover transition-opacity duration-300 hover:opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 p-2">
          <span className="text-sm font-semibold">{title}</span>
        </div>
      </a>
    </div>
  );
};

export default YouTubeVideo;
