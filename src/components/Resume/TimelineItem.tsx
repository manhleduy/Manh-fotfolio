import type { TimelineItem } from '../../data/resume';

interface TimelineItemComponentProps {
  item: TimelineItem;
  headingStyle: React.CSSProperties;
  itemIndex: number;
}

const TimelineItemComponent: React.FC<TimelineItemComponentProps> = ({ item, headingStyle }) => {
  if (item.type === 'coming-soon') {
    return (
      <div className="mb-8 md:mb-12 px-4 md:px-0">
        <div className="timeline-card transition-all duration-300 hover:scale-105" style={{ background: item.gradient.card }}>
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: item.gradient.icon }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold" style={{ color: '#ffffff', ...headingStyle }}>
              {item.duration}
            </h3>
            <p className="text-gray-300 mt-2 text-center">{item.description}</p>
          </div>
        </div>
      </div>
    );
  }

  const isWork = item.type === 'work';
  const title = isWork ? item.company_name : item.organization_name;
  const subtitle = isWork ? item.position : item.activity_role;
  const description = Array.isArray(item.description) ? item.description : [item.description];
  const badgeColor = isWork ? '#ec4899' : '#a855f7';
  const badgeColorLight = isWork ? '#fca5c3' : '#d8b4fe';

  return (
    <div className="mb-8 md:mb-12 px-4 md:px-0">
      <div className="flex items-start gap-4 md:gap-6">
        <div className="flex-shrink-0 pt-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: item.gradient.icon }}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
          </div>
        </div>
        
        <div className="flex-1 timeline-card" style={{ background: item.gradient.card }}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <h3 className="text-xl font-bold" style={{ color: '#ffffff', ...headingStyle }}>{title}</h3>
              <p className="font-semibold mt-1" style={{ color: badgeColor }}>{subtitle}</p>
            </div>
            <span className="text-sm px-3 py-1 rounded-lg font-medium inline-block sm:flex-shrink-0" style={{ background: item.gradient.badge, color: badgeColorLight }}>
              {item.duration}
            </span>
          </div>
          
          {Array.isArray(item.description) ? (
            <ul className="space-y-3 mt-4" style={{ color: '#d0d0d0' }}>
              {description.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span style={{ color: badgeColor, flexShrink: 0, marginTop: '0.25rem' }}>→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4" style={{ color: '#d0d0d0' }}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItemComponent;
