import { bioData } from '../data/dhoniData';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>Mahendra Singh Dhoni</h1>
          <p className="subtitle">The Legend of World Cricket</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Biography</h2>
          <div className="bio-content">
            <div className="bio-image">
              <img 
                src="https://imgs.search.brave.com/Q1t2k_iGwaRaR-LDDNxmSL1dm_DXUh2pw52F55YAP5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9iLzEv/YS8zMjc2MDktMzg0/MHgyMTYwLWRlc2t0/b3AtNGstbXMtZGhv/bmktdGhlLXVudG9s/ZC1zdG9yeS13YWxs/cGFwZXItaW1hZ2Uu/anBn" 
                alt="MS Dhoni"
              />
            </div>
            <div className="bio-details">
              <div className="bio-info">
                <p>Full Name:{bioData.name}</p>
                <p>Nickname:{bioData.nickname}</p>
                <p>Born:{bioData.born}</p>
                <p>Birth Place:{bioData.birthPlace}</p>
                <p>Role:{bioData.role}</p>
                <p>Batting Style: {bioData.battingStyle}</p>
              </div>
              <p className="bio-description">{bioData.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;