import TimelineItemComponent from './TimelineItem';
import type { TimelineItem as TimelineItemType } from '../../data/resume';

interface TimelineProps {
  items: TimelineItemType[];
  headingStyle: React.CSSProperties;
}

const Timeline: React.FC<TimelineProps> = ({ items, headingStyle }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 timeline-icon">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold resume-strong" style={{ ...headingStyle }}>Kinh nghiệm làm việc</h2>
      </div>

      <div className="space-y-2 md:space-y-0">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={item.id}
            item={item}
            headingStyle={headingStyle}
            itemIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
