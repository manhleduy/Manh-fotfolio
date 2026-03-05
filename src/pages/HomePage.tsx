import React, { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import { HomePageConfig as defaultConfig, HomePageConfig, presentedIcons } from '../data/home';
import DynamicBackground from '@/components/DynamicBg';
const HomePage: React.FC = () => {


  useEffect(() => {
    
    function onConfigChange(config: any) {
      const mainName = document.getElementById('main-name');
      const jobTitle = document.getElementById('job-title');
      const bioText = document.getElementById('bio-text');
      const projectsText = document.getElementById('projects-text');
      const resumeText = document.getElementById('resume-text');

      if (mainName) mainName.textContent = config.main_name || defaultConfig.main_name;
      if (jobTitle) jobTitle.textContent = config.job_title || defaultConfig.job_title;
      if (bioText) bioText.textContent = config.bio_text || defaultConfig.bio_text;
      if (projectsText) projectsText.textContent = config.projects_text || defaultConfig.projects_text;
      if (resumeText) resumeText.textContent = config.resume_text || defaultConfig.resume_text;

      // Apply text color
      const textColor = config.text_color || defaultConfig.text_color;
      if (mainName) (mainName as HTMLElement).style.color = textColor;

      // Apply font family
      const fontFamily = config.font_family || defaultConfig.font_family;
      if (mainName) (mainName as HTMLElement).style.fontFamily = `${fontFamily}, serif`;

      // Apply font size scaling
      const baseSize = config.font_size || defaultConfig.font_size;
      if (bioText) (bioText as HTMLElement).style.fontSize = `${baseSize}px`;
    }

    function mapToCapabilities(config: any) {
      return {
        recolorables: [
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value: string) => {
              config.text_color = value;
              (window as any).elementSdk.setConfig({ text_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value: string) => {
            config.font_family = value;
            (window as any).elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value: number) => {
            config.font_size = value;
            (window as any).elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    function mapToEditPanelValues(config: any) {
      return new Map([
        ["main_name", config.main_name || defaultConfig.main_name],
        ["job_title", config.job_title || defaultConfig.job_title],
        ["bio_text", config.bio_text || defaultConfig.bio_text],
        ["projects_text", config.projects_text || defaultConfig.projects_text],
        ["resume_text", config.resume_text || defaultConfig.resume_text]
      ]);
    }

    if ((window as any).elementSdk) {
      (window as any).elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
  }, []);
  const [isready, setIsReady]= useState(true);

  return (<>
   <Intro onComplete={() => setIsReady(true)} isready={isready} /> 
    <DynamicBackground 
      primaryColor="#3b82f6" // Custom Blue Theme
      particleCount={100}
      interactive={true}
    >
    <div className="hero-container page-enter min-h-screen flex items-center justify-center overflow-auto">
      <div className="laurel-container px-4 py-3 md:py-0">
        {/* Tech Stack Icons - Rendered from presentedIcons array */}
        {presentedIcons.map((item, index) => (
          <div
            key={index}
            className={`laurel-icon user-icon laurel-pos-${index}`}
          >
            <img
              src={item.icon}
              alt={item.alt}
              className={`laurel-img laurel-img-s${item.size}`}
            />
          </div>
        ))}
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10 px-8 md:px-16 py-8">
          {/* Main Name */}
          <h1 id="main-name" className="playfair text-6xl md:text-8xl lg:text-9xl font-black text-white name-glow content-fade-in stagger-1">
            {HomePageConfig.main_name}
          </h1>
          {/* Subtitle */}
          <h2 id="job-title" className="inter text-2xl md:text-3xl lg:text-4xl font-medium text-purple-200 mt-6 md:mt-8 tracking-wide content-fade-in stagger-2">
            {HomePageConfig.job_title}
          </h2>
          {/* Bio Text */}
          <p id="bio-text" className="inter text-lg md:text-xl text-gray-200 mt-8 md:mt-12 leading-relaxed font-light max-w-3xl mx-auto content-fade-in stagger-3">
            {HomePageConfig.bio_text}
          </p>
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 md:mt-14 content-fade-in stagger-4">
            <a id="projects-btn" href="project" className="btn-projects px-10 py-5 rounded-full text-white font-semibold inter text-lg md:text-xl shadow-lg inline-flex items-center justify-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span id="projects-text">Projects</span>
            </a>
            <a id="resume-btn" href="resume" className="btn-resume px-10 py-5 rounded-full text-white font-semibold inter text-lg md:text-xl shadow-lg inline-flex items-center justify-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              <span id="resume-text">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </DynamicBackground>
    </>
  );
};

export default HomePage;