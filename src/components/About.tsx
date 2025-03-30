import { useEffect, useState } from 'react';

interface AboutData {
  name: string;
  role: string;
  introduction: string;
  skills: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  certifications: string[];
  languages: string[];
}

// 정적 데이터 정의 (JSON 로딩 실패 시 폴백으로 사용)
const fallbackData: AboutData = {
  "name": "홍길동",
  "role": "프론트엔드 개발자",
  "introduction": "안녕하세요, 홍길동입니다. 사용자 경험을 중시하는 프론트엔드 개발자로, React, TypeScript, Tailwind CSS를 활용한 웹 애플리케이션 개발에 전문성을 가지고 있습니다. 접근성과 성능 최적화에 대한 깊은 이해를 바탕으로 사용자 중심의 웹 서비스를 구현합니다.",
  "skills": [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Redux",
    "REST API",
    "GraphQL",
    "Jest & Testing Library",
    "Git & GitHub",
    "Responsive Web Design",
    "Web Accessibility"
  ],
  "education": [
    {
      "degree": "컴퓨터공학 학사",
      "institution": "서울대학교",
      "year": "2019"
    }
  ],
  "experience": [
    {
      "position": "시니어 프론트엔드 개발자",
      "company": "테크 스타트업",
      "period": "2022 - 현재",
      "description": "주요 웹 애플리케이션의 프론트엔드 아키텍처 설계 및 구현, 성능 최적화, 접근성 개선을 담당하였습니다."
    },
    {
      "position": "프론트엔드 개발자",
      "company": "웹 에이전시",
      "period": "2019 - 2022",
      "description": "다양한 클라이언트 프로젝트에서 반응형 웹사이트 및 웹 애플리케이션 개발을 담당하였습니다."
    }
  ],
  "certifications": [
    "AWS Certified Developer",
    "Google UX Design Certificate"
  ],
  "languages": [
    "한국어 (원어민)",
    "영어 (비즈니스 레벨)"
  ]
};

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 데이터 로드 시도
    setLoading(true);
    
    // public 디렉토리의 JSON 파일 로드 (Vite 환경에서 public 디렉토리는 루트로 접근)
    fetch('/about.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAboutData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading about data:', error);
        // 폴백 데이터 사용 (이미 state 초기값으로 설정됨)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-md bg-blue-100 text-blue-700">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            데이터를 불러오는 중...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          About Me
        </h2>
        
        <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutData.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-blue-500 mr-2">✓</span>Skills
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {aboutData.skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 py-1">
                  <span className="mr-2 text-blue-500">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-blue-500 mr-2">✓</span>Education
            </h3>
            {aboutData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}, {edu.year}</p>
              </div>
            ))}

            <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-blue-500 mr-2">✓</span>Certifications
            </h3>
            <ul className="space-y-1">
              {aboutData.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300 py-1">
                  <span className="mr-2 text-blue-500">•</span> {cert}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-blue-500 mr-2">✓</span>Languages
            </h3>
            <ul className="space-y-1">
              {aboutData.languages.map((lang, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300 py-1">
                  <span className="mr-2 text-blue-500">•</span> {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
            <span className="text-blue-500 mr-2">✓</span>Experience
          </h3>
          <div className="space-y-6">
            {aboutData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors rounded">
                <h4 className="font-medium text-gray-800 dark:text-white">
                  {exp.position} | {exp.company}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 