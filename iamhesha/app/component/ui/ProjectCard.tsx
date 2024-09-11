// components/ui/ProjectCard.tsx
import Image from 'next/image';
// import Link from 'next/link';
import { FaGithub, FaBehance, FaVideo } from 'react-icons/fa';  // Import icons from react-icons

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  videoUrl?: string;  // Optional video URL
  githubUrl?: string; // Optional GitHub URL
  behanceUrl?: string; // Optional Behance URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, videoUrl, githubUrl, behanceUrl }) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden relative">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href={link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>

      {/* Bottom Section for Icons */}
      <div className="bg-gray-700 dark:bg-gray-800 p-4 flex justify-around items-center">
        {videoUrl && (
          <a href={videoUrl} className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaVideo className="inline-block mr-2" /> <span className="text-xs">Video</span>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline-block mr-2" /> <span className="text-xs">GitHub</span>
          </a>
        )}
        {behanceUrl && (
          <a href={behanceUrl} className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaBehance className="inline-block mr-2" /> <span className="text-xs">Behance</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
