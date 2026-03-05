import type { ResumeConfig } from '../../data/resume';
import { icons } from '../../data/const';

interface ResumeHeaderProps {
  config: ResumeConfig;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ config }) => {
  
  const headingStyle = {
    fontFamily: `${config.font_family}, Georgia, serif`
  };

  const contactItems = [
    { label: "Ngày sinh", val: config.date_of_birth, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { label: "Giới tính", val: config.gender, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: "Địa chỉ", val: config.address, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
    { label: "Email", val: config.email, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center text-5xl font-bold shadow-2xl resume-avatar resume-box" style={{ ...headingStyle }}>
          <img className='' src={icons.avatar}/>
        </div>
        <div className="text-center md:text-left">
          <h1 
            className="font-bold mb-2 resume-strong" 
            style={{ ...headingStyle, fontSize: `${config.font_size * 2}px` }}
          >
            {config.full_name}
          </h1>
          <p className="text-lg uppercase tracking-widest font-medium resume-accent">
            {config.job_title}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
        {contactItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3 backdrop-filter backdrop-blur-md rounded-xl p-4 resume-box">
            <svg className="w-6 h-6 mt-0.5 flex-shrink-0 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider mb-1 resume-muted">{item.label}</p>
              <p className="text-sm font-medium resume-strong">{item.val}</p>
            </div>
          </div>
        ))}
        
        <div className="flex items-start gap-3 backdrop-filter backdrop-blur-md rounded-xl p-4 sm:col-span-2 resume-box">
          <svg className="w-6 h-6 mt-0.5 flex-shrink-0 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <p className="text-xs uppercase tracking-wider mb-1 resume-muted">Phone</p>
            <p className="text-sm font-medium resume-strong">{config.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
