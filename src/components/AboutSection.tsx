import { useState, useEffect, useRef } from 'react';

/**
 * 항공 여행 웹사이트의 About 섹션 컴포넌트
 */
const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // 섹션이 뷰포트에 들어왔는지 확인
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };
    
    // 초기 로드 시에도 체크
    handleScroll();
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // 컴포넌트 언마운트시 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white relative overflow-hidden"
    >
      <div 
        className="container mx-auto px-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : '30px'})`,
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cloud-900 mb-4 text-center">About TRIVIO Travel</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-cloud-600 text-center max-w-3xl">
            We provide exceptional travel experiences with personalized service, ensuring your journey
            is comfortable, safe, and memorable from takeoff to touchdown.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 카드 1: 왜 우리를 선택해야 하는가 */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : '40px'})`,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cloud-900 mb-3">Why Choose Us</h3>
            <p className="text-cloud-600">
              With over 10 years of experience, we offer unbeatable prices, personalized service, and 
              a 100% satisfaction guarantee on all our travel packages.
            </p>
          </div>

          {/* 카드 2: 우리의 미션 */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : '40px'})`,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '400ms'
            }}
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cloud-900 mb-3">Our Mission</h3>
            <p className="text-cloud-600">
              To make travel accessible to everyone by providing exceptional service and 
              unforgettable experiences that create lasting memories.
            </p>
          </div>

          {/* 카드 3: 고객 지원 */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : '40px'})`,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '600ms'
            }}
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6 2"></path>
                <polyline points="12 5 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cloud-900 mb-3">24/7 Support</h3>
            <p className="text-cloud-600">
              Our dedicated support team is available around the clock to assist you before, 
              during, and after your journey for complete peace of mind.
            </p>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '30px'})`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '800ms'
          }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">3500+</div>
            <p className="text-cloud-600">Happy Customers</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">550+</div>
            <p className="text-cloud-600">Destinations</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <p className="text-cloud-600">Hotels</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-cloud-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 