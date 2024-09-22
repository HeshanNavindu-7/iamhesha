import React, { useState } from 'react';
import YouTubeVideo from './YouTubeVideo';

const allVideos = [
  { videoId: 'dC1qKDjZ4wM', title: 'Unlocking the Secrets of Ruwanwali Maha Seya | රුවන්වැලිසෑය ඔබ නොඇසු පුදුම හිතෙන රහස් |Anuradhapura', category: 'Travel' },
  { videoId: 'gwrKJ-o6yf4', title: 'Google Maps Immersive View: A New Era of Virtual Travel', category: 'Tech' },
  { videoId: 'JqikVpWxyOQ', title: 'whisky kade pusa-විස්කි කඩේ පුසා sinhala song|paduru party 2023|Bandu Samarasigha', category: 'Vlog' },
  { videoId: 'rEWmWqSHpcI', title: 'VR and AR: Advancing Computing Boundaries | Winning Speech IEEE Tech Narrator', category: 'Tech' },

  { videoId: 'zdg6A4PZZgk', title: 'Artificial Intelligence: The Future of Technology', category: 'Tech' },
  { videoId: 'YzY6SeAGubM', title: 'Experience the Thrill of GDG devfest Sri Lanka 2022 -- Google & Blaze Entertainment Team Up', category: 'Vlog' },
  { videoId: 'A1TsP69uq5c', title: 'Thanthirimale Raja Maha Viharaya | තන්තිරිමලය රජ මහා විහාරය | thanthirimale', category: 'Vlog Travel' },
  // Add more videos as needed
];

const VideoSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of videos to show
  const [category, setCategory] = useState('All');

  const filteredVideos = category === 'All' ? allVideos : allVideos.filter(video => video.category === category);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => (prevCount === allVideos.length ? 6 : allVideos.length));
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My YouTube Videos</h2>

        {/* Filter Section */}
        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Tech', 'Travel', 'Vlog'].map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-950 text-white'}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVideos.slice(0, visibleCount).map((video, index) => (
            <YouTubeVideo key={index} videoId={video.videoId} title={video.title} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {visibleCount === allVideos.length ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
