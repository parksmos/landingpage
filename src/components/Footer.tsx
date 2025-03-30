import { useState, useEffect, useRef } from 'react';

/**
 * 항공 여행 웹사이트 푸터 컴포넌트
 */
const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  
  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // 컴포넌트 언마운트시 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-white py-10 border-t border-gray-200"
    >
      <div className="container mx-auto px-4">
        {/* 파트너사 로고 */}
        <div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-10 py-6 border-b border-gray-200"
        >
          <span className="text-sm text-cloud-500 mr-4">Follow</span>
          
          {/* 소셜 미디어 아이콘 */}
          <a href="#" className="text-cloud-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
            </svg>
          </a>
          
          <a href="#" className="text-cloud-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          
          <a href="#" className="text-cloud-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
            </svg>
          </a>
          
          <a href="#" className="text-cloud-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.949 7.051c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-8.5 8.5c-.391.391-1.023.391-1.414 0l-3.5-3.5c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0L10 15.586l7.949-8.535z" />
            </svg>
          </a>
          
          <div className="flex-grow"></div>
          
          {/* 파트너 로고 */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" alt="Booking.com" className="h-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png" alt="Trivago" className="h-5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Expedia_logo.svg/1280px-Expedia_logo.svg.png" alt="Expedia" className="h-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        
        {/* 푸터 링크 */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          <div>
            <h3 className="font-bold text-lg mb-4 text-cloud-900">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Press Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cloud-900">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Europe</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Asia</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">North America</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">South America</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Africa</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Australia</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cloud-900">Travel Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Luxury Travel</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Budget Travel</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Adventure Travel</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Family Vacations</a></li>
              <li><a href="#" className="text-cloud-600 hover:text-primary transition-colors">Honeymoon</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cloud-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-cloud-600">Email: info@trivio.com</li>
              <li className="text-cloud-600">Phone: +1 (123) 456-7890</li>
              <li className="text-cloud-600">Address: 123 Travel Street, Suite 100, New York, NY 10001</li>
            </ul>
            
            <div className="mt-4">
              <a href="#" className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:shadow-button transition-all inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* 저작권 */}
        <div 
          className="border-t border-gray-200 pt-6 text-center text-cloud-600"
        >
          <p>&copy; {new Date().getFullYear()} TRIVIO Travel. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 