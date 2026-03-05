import type { ResumeConfig } from '../../data/resume';

interface ResumeSectionProps {
  title: string;
  icon: string;
  iconGradient: string;
  config: ResumeConfig;
  children: React.ReactNode;
  headingStyle: React.CSSProperties;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon, iconGradient, children, headingStyle }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconGradient }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold resume-strong" style={{ ...headingStyle }}>{title}</h2>
      </div>
      <div className="backdrop-filter backdrop-blur-md rounded-xl p-6 md:p-8 resume-box">
        {children}
      </div>
    </section>
  );
};

export default ResumeSection;
