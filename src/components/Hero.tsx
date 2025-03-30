import { useState, useEffect, useRef } from 'react';

/**
 * 항공 여행 웹사이트의 히어로 섹션 컴포넌트
 */
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
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

  // 스크롤 위치에 따른 계산 (회전만 유지)
  const rotateValue = scrollY * 0.02;
  
  return (
    <section ref={heroRef} className="pt-24 pb-16 relative overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/cloud-bg.svg" 
          alt="구름 배경" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* 왼쪽 콘텐츠 */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* 숫자 표시 및 스텝 인디케이터 - 1단계 */}
            <div className="flex items-start mb-4 scroll-fade-in">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary">
                <span className="text-primary font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-cloud-900">Choose Your Destination</h3>
                <p className="text-sm text-cloud-600">Select from over 500+ destinations worldwide</p>
              </div>
            </div>
            
            <div className="h-6 border-l border-gray-300 ml-5 mb-2"></div>
            
            <div className="text-sm uppercase tracking-wider text-cloud-700 mb-2">
              ELEVATE YOUR TRAVEL JOURNEY
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-cloud-900 mb-4 leading-tight">
              Experience<br />
              The Magic Of<br />
              Flight!
            </h1>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <a 
                href="#booking" 
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-button transition-all flex items-center justify-center"
              >
                Book A Trip Now
              </a>
              
              <button className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Play Video</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 7l-4 4 4 4" transform="rotate(180, 12, 12)" />
                </svg>
              </button>
            </div>

            {/* 숫자 표시 및 스텝 인디케이터 - 2단계 */}
            <div className="flex items-start mb-4 scroll-fade-in" style={{ transitionDelay: '100ms' }}>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="text-cloud-700 font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-cloud-700">Book Your Flight</h3>
                <p className="text-sm text-cloud-600">Secure the best deals on flights and accommodations</p>
              </div>
            </div>
            
            <div className="h-6 border-l border-gray-300 ml-5 mb-2"></div>

            {/* 숫자 표시 및 스텝 인디케이터 - 3단계 */}
            <div className="flex items-start mb-6 scroll-fade-in" style={{ transitionDelay: '200ms' }}>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="text-cloud-700 font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-cloud-700">Enjoy Your Trip</h3>
                <p className="text-sm text-cloud-600">Experience unforgettable memories with our travel services</p>
              </div>
            </div>

            <div className="mt-6 flex items-center cursor-pointer group">
              <div className="text-cloud-900 font-bold mr-4 group-hover:text-primary transition-colors">Know More</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* 오른쪽 비행기 이미지 */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center"
            style={{ 
              transform: `rotate(${rotateValue}deg)`,
            }}
          >
            <div className="animate-float w-full max-w-md">
              <img 
                src="/img/airplane.svg" 
                alt="비행기 이미지" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 