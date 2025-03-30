import { useState, useEffect, useRef } from 'react';

/**
 * 항공 여행 웹사이트의 고객 후기 섹션 컴포넌트
 */
const TestimonialsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // 배경 패럴랙스 효과 계산
  const translateYValue = scrollY * 0.05;
  const translateYBg = Math.min(translateYValue, 100);

  // 후기 데이터
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Creative Solutions",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      rating: 5,
      text: "Our family trip to Paris was absolutely amazing thanks to TRIVIO! Every detail was taken care of, from the flights to the hotel and guided tours. The customer service was exceptional, and the whole experience was stress-free. Highly recommend!"
    },
    {
      id: 2,
      name: "David Chen",
      position: "Software Engineer",
      company: "Tech Innovations",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "As a frequent business traveler, I've tried many travel services, but TRIVIO stands out from the rest. Their attention to detail and personalized service made my business trip to Tokyo seamless. The app was intuitive, and their 24/7 support was incredibly helpful."
    },
    {
      id: 3,
      name: "Olivia Martinez",
      position: "Travel Blogger",
      company: "Wanderlust Chronicles",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "I've traveled to over 30 countries, and my experience with TRIVIO was one of the best. Their curated packages truly captured the essence of Bali, with authentic experiences you can't find elsewhere. The accommodations were luxurious, and the local guides were knowledgeable and friendly."
    }
  ];

  // 별점 렌더링 함수
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-white to-cloud-50 relative overflow-hidden"
    >
      {/* 배경 패럴랙스 효과 */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23358DF1' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${translateYBg}px)`
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
          <h2 className="text-3xl md:text-4xl font-bold text-cloud-900 mb-4 text-center">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-cloud-600 text-center max-w-3xl">
            Hear from travelers around the world who have experienced the TRIVIO difference.
            Here are some of their stories and experiences.
          </p>
        </div>

        {/* 후기 슬라이더 */}
        <div 
          className="max-w-5xl mx-auto relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '30px'})`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '200ms'
          }}
        >
          <div className="overflow-hidden relative rounded-2xl shadow-xl bg-white">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out p-8 md:p-12 flex flex-col md:flex-row items-center ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-cloud-900">{testimonial.name}</h3>
                  <p className="text-cloud-600">{testimonial.position}</p>
                  <p className="text-cloud-500 text-sm">{testimonial.company}</p>
                  <div className="flex mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8 md:border-l border-cloud-200">
                  <svg className="w-12 h-12 text-cloud-200 mb-4 transform -translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl text-cloud-800 italic">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 슬라이더 컨트롤 */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-primary w-10' 
                    : 'bg-cloud-300 hover:bg-cloud-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA 섹션 */}
        <div 
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '30px'})`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '400ms'
          }}
        >
          <a 
            href="#" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-button transition-all inline-block"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 