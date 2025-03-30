import { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';

/**
 * 기술 스택 항목 타입 정의
 */
interface SkillItem {
  name: string;
  level: number; // 1-5 (1: 기초, 5: 전문가)
  category: string;
}

/**
 * 기술 스택 섹션 컴포넌트
 * 개발자의 기술 스택을 시각적으로 표시
 */
const Skills = () => {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  
  // 기술 스택 데이터 로드
  useEffect(() => {
    setSkills(skillsData as SkillItem[]);
  }, []);

  // 카테고리별로 스킬 그룹화
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  // 레벨에 따른 스킬 바 색상
  const getSkillLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-blue-300 dark:bg-blue-800';
      case 2: return 'bg-blue-400 dark:bg-blue-700';
      case 3: return 'bg-blue-500 dark:bg-blue-600';
      case 4: return 'bg-blue-600 dark:bg-blue-500';
      case 5: return 'bg-blue-700 dark:bg-blue-400';
      default: return 'bg-blue-500 dark:bg-blue-600';
    }
  };

  // 레벨에 따른 텍스트 레이블
  const getSkillLevelLabel = (level: number) => {
    switch (level) {
      case 1: return '기초';
      case 2: return '초급';
      case 3: return '중급';
      case 4: return '상급';
      case 5: return '전문가';
      default: return '중급';
    }
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">기술 스택</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">제가 사용할 수 있는 기술들입니다</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 프론트엔드 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">프론트엔드</h3>
            <div className="space-y-4">
              {categories.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{getSkillLevelLabel(skill.level)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 백엔드 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">백엔드</h3>
            <div className="space-y-4">
              {categories.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{getSkillLevelLabel(skill.level)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 데이터베이스 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">데이터베이스</h3>
            <div className="space-y-4">
              {categories.database.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{getSkillLevelLabel(skill.level)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 기타 도구 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">개발 도구</h3>
            <div className="space-y-4">
              {categories.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{getSkillLevelLabel(skill.level)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 