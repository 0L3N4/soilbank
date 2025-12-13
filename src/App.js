import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="hero-background">
          <div className="hero-title-container">
            <h1 className="hero-title">Restore the soil.</h1>
            <h1 className="hero-title">Secure the future.</h1>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">12,450</div>
              <div className="stat-caption">Acres Restored</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$8.2M</div>
              <div className="stat-caption">Invested</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">287</div>
              <div className="stat-caption">Partner Farms</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+34%</div>
              <div className="stat-caption">Avg Score Improvement</div>
            </div>
          </div>
        </section>

        {/* How SoilBank Works Section */}
        <section className="how-it-works">
          <h2 className="section-title">How SoilBank Works</h2>
          <p className="section-description">
            Invest in regenerative agriculture effortlessly and track measurable
            impact on the environment.
          </p>
          <div className="cards-container">
            <div className="card">
              <h3 className="card-title">Score Your Soil</h3>
              <p className="card-description">
                Measure soil health with key metrics like nutrients, organic
                matter, and microbial activity.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Invest with Confidence</h3>
              <p className="card-description">
                See both environmental and financial impact through clear,
                transparent reports.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Verified Farms Only</h3>
              <p className="card-description">
                All farms are carefully checked to ensure genuine regenerative
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <h2 className="section-title">A Simple Process with Real Impact</h2>
          <p className="section-description">
            Farmers and investors can begin in just a few steps.
          </p>
          <div className="process-columns">
            {/* For Farmers */}
            <div className="process-column">
              <h3 className="process-column-title">For Farmers</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4 className="step-title">Share Your Soil Data</h4>
                  <p className="step-description">
                    Upload soil tests, photos, and basic farm information.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4 className="step-title">Receive Your Soil Score</h4>
                  <p className="step-description">
                    Get a clear Soil Health Score based on key indicators.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4 className="step-title">Build Your Proposal</h4>
                  <p className="step-description">
                    Create an investment-ready plan for your farm.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4 className="step-title">Secure Funding</h4>
                  <p className="step-description">
                    Connect with investors and begin restoring your soil.
                  </p>
                </div>
              </div>
            </div>

            {/* For Investors */}
            <div className="process-column">
              <h3 className="process-column-title">For Investors</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4 className="step-title">Discover Farms</h4>
                  <p className="step-description">
                    Browse verified regenerative farms by region, type, and
                    score.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4 className="step-title">Evaluate Opportunities</h4>
                  <p className="step-description">
                    Review projects with clear impact and return metrics.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4 className="step-title">Invest with Purpose</h4>
                  <p className="step-description">
                    Fund soil regeneration projects aligned with your goals.
                  </p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4 className="step-title">Track Results</h4>
                  <p className="step-description">
                    Follow soil improvements and environmental performance over
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">Ready to create real impact?</h2>
          <p className="cta-description">
            Whether you're a farmer rebuilding your land or an investor pursuing
            purpose-driven returns, SoilBank supports regenerative agriculture
            every step of the way.
          </p>
          <div className="cta-buttons">
            <button className="cta-button cta-button-farmers">
              For Farmers
            </button>
            <button className="cta-button cta-button-investors">
              For Investors
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
