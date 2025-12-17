import React, { useState, useMemo } from "react";
import "./Investors.css";
import Footer from "../components/Footer";
import { getFarms } from "../utils/farmsStorage";

function Investors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSoilScore, setSelectedSoilScore] = useState("all");

  // Load farms from localStorage
  const farms = useMemo(() => getFarms(), []);

  // Get unique regions for filter
  const regions = ["all", ...new Set(farms.map((farm) => farm.region))];

  // Filter farms based on search and filters
  const filteredFarms = useMemo(() => {
    return farms.filter((farm) => {
      const matchesSearch =
        farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.region.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        selectedRegion === "all" || farm.region === selectedRegion;

      const matchesSoilScore =
        selectedSoilScore === "all" ||
        (selectedSoilScore === "high" && farm.soilScore >= 80) ||
        (selectedSoilScore === "medium" &&
          farm.soilScore >= 70 &&
          farm.soilScore < 80) ||
        (selectedSoilScore === "low" && farm.soilScore < 70);

      return matchesSearch && matchesRegion && matchesSoilScore;
    });
  }, [searchTerm, selectedRegion, selectedSoilScore, farms]);

  const getSoilScoreColor = (score) => {
    if (score >= 80) return "#145a32";
    if (score >= 70) return "#9caf88";
    return "#f4a460";
  };

  return (
    <div className="investors-container">
      {/* Hero Section */}
      <section className="investors-hero">
        <div className="investors-hero-content">
          <h1 className="investors-hero-title">Investment Opportunities</h1>
          <p className="investors-hero-description">
            Discover verified regenerative farms and invest in sustainable
            agriculture with measurable impact
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="investors-search-section">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search farms by name, owner, or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filters-container">
            <div className="filter-group">
              <label>Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Regions</option>
                {regions.slice(1).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Soil Score</label>
              <select
                value={selectedSoilScore}
                onChange={(e) => setSelectedSoilScore(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Scores</option>
                <option value="high">High (80+)</option>
                <option value="medium">Medium (70-79)</option>
                <option value="low">Low (Below 70)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="results-info">
          <p>
            Showing {filteredFarms.length} of {farms.length} farms
          </p>
        </div>
      </section>

      {/* Farms List Section */}
      <section className="investors-farms-section">
        {filteredFarms.length > 0 ? (
          <div className="farms-grid">
            {filteredFarms.map((farm) => (
              <div key={farm.id} className="farm-card">
                <div className="farm-header">
                  <div className="farm-image">{farm.image}</div>
                  <div className="farm-info">
                    <h3 className="farm-name">{farm.name}</h3>
                    <p className="farm-owner">{farm.owner}</p>
                    <p className="farm-region">📍 {farm.region}</p>
                  </div>
                </div>

                <div className="farm-metrics">
                  <div className="metric">
                    <span className="metric-label">Soil Score</span>
                    <div className="soil-score-bar">
                      <div
                        className="soil-score-fill"
                        style={{
                          width: `${farm.soilScore}%`,
                          backgroundColor: getSoilScoreColor(farm.soilScore),
                        }}
                      ></div>
                    </div>
                    <span className="metric-value">{farm.soilScore}/100</span>
                  </div>

                  <div className="metric">
                    <span className="metric-label">Size</span>
                    <span className="metric-value">{farm.acres} acres</span>
                  </div>

                  <div className="metric">
                    <span className="metric-label">Investment</span>
                    <span className="metric-value">{farm.investment}</span>
                  </div>
                </div>

                <div className="farm-practices">
                  <span className="practices-label">Practices:</span>
                  <div className="practices-tags">
                    {farm.practices.map((practice, index) => (
                      <span key={index} className="practice-tag">
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="farm-buttons">
                  <button className="farm-action-btn">View Farm Details</button>
                  <button className="farm-invest-btn">Invest Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>
              No farms match your search criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Investors;
