import { timeline } from '../data/dhoniData';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline section">
      <div className="container">
        <h2 className="section-title">Career Journey</h2>
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="year">{item.year}</div>
              {Array.isArray(item.events) ? (
                <ul className="events-list">
                  {item.events.map((event, eventIndex) => (
                    <li key={eventIndex}>{event}</li>
                  ))}
                </ul>
              ) : (
                <p className="event">{item.event}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;