import ResumeHeader from '../components/Resume/ResumeHeader';
import ResumeSection from '../components/Resume/ResumeSection';
import Timeline from '../components/Resume/Timeline';
import { defaultResumeConfig, timelineItems } from '../data/resume';
import type { ResumeConfig } from '../data/resume';

interface ResumeProps {
  config?: Partial<ResumeConfig>;
}

const Resume: React.FC<ResumeProps> = ({ config = {} }) => {
  const c: ResumeConfig = { ...defaultResumeConfig, ...config };

  const headingStyle = {
    fontFamily: `${c.font_family}, Georgia, serif`
  };

  return (
    <>
      <div 
        id="cv-wrapper" 
        className="h-full mt-20 w-full overflow-auto font-body page-enter bg-hero"
      >
        <div className="min-h-full w-full px-4 py-8 md:px-8">
          <div className="max-w-6xl mx-auto mb-16">
            
            {/* Header / Profile */}
            <ResumeHeader config={c} />

            {/* Career Objective */}
            <ResumeSection 
              title="Mục tiêu nghề nghiệp"
              icon="M13 10V3L4 14h7v7l9-11h-7z"
              iconGradient="linear-gradient(135deg, #ec4899, #a855f7)"
              config={c}
              headingStyle={headingStyle}
            >
              <p className="leading-relaxed resume-text" style={{ fontSize: `${c.font_size * 1.125}px` }}>
                {c.career_objective}
              </p>
            </ResumeSection>

            {/* Education */}
            <ResumeSection 
              title="Học vấn"
              icon="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              iconGradient="linear-gradient(135deg, #a855f7, #ec4899)"
              config={c}
              headingStyle={headingStyle}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold resume-strong" style={{ ...headingStyle }}>{c.school_name}</h3>
                  <p className="font-medium text-lg mt-2 resume-tag">{c.major}</p>
                </div>
                <span className="text-sm px-4 py-2 rounded-full font-medium resume-tag">{c.study_period}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-sm resume-muted">GPA:</span>
                <span className="font-bold text-lg resume-strong">{c.gpa}</span>
                <div className="flex gap-1">
                  {[1,2,3,4].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </ResumeSection>

            {/* Timeline Section */}
            <Timeline items={timelineItems} headingStyle={headingStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;