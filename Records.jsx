import { records } from '../data/dhoniData';
import './Records.css';

function Records() {
  return (
    <div className="records section">
      <div className="container">
        <h2 className="section-title">Notable Records</h2>
        <div className="records-grid">
          {records.map(record => (
            <div key={record.id} className="record-card">
              <h3>{record.title}</h3>
              <p>{record.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Records;