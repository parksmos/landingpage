import { useState } from 'react';

/**
 * 항공 여행 웹사이트의 헤더 컴포넌트
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 w-full fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L4,5v6.09c0,5.82,3.27,11.25,8,14.91c4.73-3.66,8-9.09,8-14.91V5L12,2z M12,19.97 c-3.3-2.86-5.89-6.94-5.98-11.22L12,5.97l5.98,2.78C17.89,13.03,15.3,17.11,12,19.97z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-xl font-display font-bold text-primary">TRIVIO</span>
          </a>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-cloud-700 hover:text-primary transition-colors font-medium">
            ABOUT
          </a>
          <a href="#tour" className="text-cloud-700 hover:text-primary transition-colors font-medium">
            TOUR
          </a>
          <a href="#package" className="text-cloud-700 hover:text-primary transition-colors font-medium">
            PACKAGE
          </a>
          <a href="#contact" className="text-cloud-700 hover:text-primary transition-colors font-medium">
            CONTACT
          </a>
        </nav>

        {/* 예약 버튼 */}
        <div className="hidden md:block">
          <a href="#booking" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-button transition-all">
            Book Trip
          </a>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-cloud-700 hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-4 py-4 px-6 space-y-4 shadow-md rounded-b-lg">
          <a href="#about" className="block text-cloud-700 hover:text-primary transition-colors font-medium">
            ABOUT
          </a>
          <a href="#tour" className="block text-cloud-700 hover:text-primary transition-colors font-medium">
            TOUR
          </a>
          <a href="#package" className="block text-cloud-700 hover:text-primary transition-colors font-medium">
            PACKAGE
          </a>
          <a href="#contact" className="block text-cloud-700 hover:text-primary transition-colors font-medium">
            CONTACT
          </a>
          <a 
            href="#booking" 
            className="block bg-primary text-white px-6 py-2 rounded-full text-center font-medium hover:shadow-button transition-all"
          >
            Book Trip
          </a>
        </div>
      )}
    </header>
  );
};

export default Header; 