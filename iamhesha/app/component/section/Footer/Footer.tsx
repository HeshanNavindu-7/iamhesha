import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-center text-lg">Quick Links</h4>
          <ul className="mt-2 flex space-x-4 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
       <div className='mb-4 md:mb-0'>
       <h4 className="font-bold text-center text-lg ">Social Links</h4>
        <div className="flex space-x-4 mb-4 md:mb-0">
    
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.49 4.49v.49A12.94 12.94 0 013 4s-4 9 5 13a13.11 13.11 0 01-8 2c11 6 22 0 22-13a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.88 10.91.58.11.79-.25.79-.56 0-.28-.01-1.03-.01-2-3.21.68-3.89-1.41-3.89-1.41-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99 0 1.99.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.41-5.29 5.69.42.37.79 1.1.79 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.2.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46C0 23.2.8 24 1.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.06 20.45H3.56V9.03h3.5v11.42zM5.31 7.55a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zm14.57 12.9h-3.5v-5.73c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.19 1.48-2.19 3v5.84H8.8V9.03h3.36v1.56h.05a3.68 3.68 0 013.31-1.82c3.54 0 4.19 2.33 4.19 5.37v6.3z" />
            </svg>
          </a>
        </div>
      </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} iamHesha Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
