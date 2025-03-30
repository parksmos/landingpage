import { useState, useEffect } from 'react';
import PortfolioCard, { ProjectProps } from './PortfolioCard';
import projectsData from '../data/projects.json';

/**
 * 포트폴리오 프로젝트 목록을 표시하는 섹션 컴포넌트
 */
const Portfolio = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  
  // 프로젝트 데이터 로드
  useEffect(() => {
    setProjects(projectsData as ProjectProps[]);
  }, []);

  // 프로젝트 필터링을 위한 상태
  const [filter, setFilter] = useState<string>('all');
  
  // 모든 태그 추출 (중복 제거)
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // 필터링된 프로젝트
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">포트폴리오</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">제가 진행한 프로젝트들을 소개합니다</p>
        
        {/* 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            전체
          </button>
          
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
        
        {/* 프로젝트가 없을 경우 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">선택한 기술로 진행한 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 