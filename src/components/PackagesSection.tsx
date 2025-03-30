import { useState, useEffect, useRef } from 'react';

/**
 * 항공 여행 웹사이트의 여행 패키지 섹션 컴포넌트
 */
const PackagesSection = () => {
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

  // 패키지 목록 데이터
  const packages = [
    {
      id: 1,
      title: "Paris Getaway",
      description: "Experience the romance of Paris with this 5-day luxury package including Eiffel Tower visit.",
      price: 1299,
      duration: "5 Days",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      rating: 4.9,
      reviews: 128
    },
    {
      id: 2,
      title: "Tropical Bali",
      description: "Relax on pristine beaches and explore the cultural heritage of Bali with this all-inclusive package.",
      price: 1599,
      duration: "7 Days",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&q=80",
      rating: 4.8,
      reviews: 95
    },
    {
      id: 3,
      title: "Tokyo Adventure",
      description: "Discover the blend of traditional and ultramodern in Tokyo with guided tours and authentic experiences.",
      price: 1899,
      duration: "6 Days",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80",
      rating: 4.7,
      reviews: 87
    }
  ];

  // 배경 패럴랙스 효과 계산
  const translateYValue = scrollY * 0.05;
  const translateYBg = Math.min(translateYValue, 100);

  return (
    <section 
      ref={sectionRef}
      id="packages" 
      className="py-20 bg-cloud-50 relative overflow-hidden"
    >
      {/* 배경 패럴랙스 효과 */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-cloud-100 to-transparent"
        style={{ 
          transform: `translateY(${-translateYBg}px)` 
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="flex flex-col items-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '30px'})`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cloud-900 mb-4 text-center">Popular Tour Packages</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-cloud-600 text-center max-w-3xl">
            Discover our most popular destinations and curated travel experiences, 
            designed to provide unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : '40px'})`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: `${200 + index * 200}ms`
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-cloud-900">{pkg.rating}</span>
                  </div>
                  <span className="text-cloud-500 text-sm ml-2">({pkg.reviews} reviews)</span>
                </div>
                
                <h3 className="text-xl font-bold text-cloud-900 mb-2">{pkg.title}</h3>
                <p className="text-cloud-600 mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-cloud-500">Starting from</span>
                    <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                  </div>
                  <a 
                    href="#" 
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:shadow-button transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="flex justify-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '20px'})`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '800ms'
          }}
        >
          <a 
            href="#" 
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all flex items-center space-x-2"
          >
            <span>View All Packages</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection; 