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
    <section ref={heroRef} className="pt-16 pb-10 relative overflow-hidden">
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
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="text-sm uppercase tracking-wider text-cloud-700 mb-1">
              EXPERIENCE THE JOURNEY
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-cloud-900 mb-3 leading-tight">
              Discover The Magic<br />
              Of Flight
            </h1>

            <div className="flex flex-row space-x-3 mb-4">
              <a 
                href="#booking" 
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-button transition-all flex items-center justify-center"
              >
                Book Now
              </a>
              
              <button className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Play Video</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 7l-4 4 4 4" transform="rotate(180, 12, 12)" />
                </svg>
              </button>
            </div>

            {/* 단계 요약 */}
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary">
                  <span className="text-primary font-bold text-xs">1</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md ml-1">
                  <span className="text-cloud-700 font-bold text-xs">2</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md ml-1">
                  <span className="text-cloud-700 font-bold text-xs">3</span>
                </div>
              </div>
              <div className="text-cloud-600 text-sm">
                Choose · Book · Enjoy
              </div>
            </div>

            <p className="text-cloud-600 text-sm max-w-md">
              Select from 500+ destinations worldwide, book your flight with best deals, 
              and create unforgettable memories with our premium travel services.
            </p>

            <div className="mt-3 flex items-center cursor-pointer group">
              <div className="text-cloud-900 font-medium mr-2 text-sm group-hover:text-primary transition-colors">Learn More</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="animate-float w-full max-w-sm">
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