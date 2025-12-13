import React, { useState, useMemo } from "react";
import "./Investors.css";
import Footer from "../components/Footer";

function Investors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSoilScore, setSelectedSoilScore] = useState("all");

  // Sample farms data with 12 registered farms in Europe
  const farms = useMemo(
    () => [
      {
        id: 1,
        name: "Green Valley Farm",
        owner: "Jean Dupont",
        region: "France",
        soilScore: 78,
        acres: 450,
        investment: "€45,000",
        practices: ["Cover Crops", "Minimal Tillage", "Composting"],
        image: "🌾",
      },
      {
        id: 2,
        name: "Heritage Fields",
        owner: "Sarah Johnson",
        region: "United Kingdom",
        soilScore: 85,
        acres: 320,
        investment: "£62,500",
        practices: ["Crop Rotation", "Organic", "Agroforestry"],
        image: "🌱",
      },
      {
        id: 3,
        name: "Sustainable Acres",
        owner: "Klaus Müller",
        region: "Germany",
        soilScore: 72,
        acres: 280,
        investment: "€38,000",
        practices: ["Reduced Tillage", "Mulching", "Crop Rotation"],
        image: "🌿",
      },
      {
        id: 4,
        name: "Nature's Pasture",
        owner: "Elena Rossi",
        region: "Italy",
        soilScore: 68,
        acres: 550,
        investment: "€55,000",
        practices: ["Rotational Grazing", "Cover Crops", "Composting"],
        image: "🐄",
      },
      {
        id: 5,
        name: "Prairie Regeneration",
        owner: "Aamir Patel",
        region: "Spain",
        soilScore: 82,
        acres: 400,
        investment: "€48,000",
        practices: ["Native Plantings", "Wetland Restoration", "Agroforestry"],
        image: "🌻",
      },
      {
        id: 6,
        name: "Organic Oasis",
        owner: "Maria Van der Berg",
        region: "Netherlands",
        soilScore: 88,
        acres: 180,
        investment: "€35,000",
        practices: ["100% Organic", "Biodynamic", "Composting"],
        image: "🥬",
      },
      {
        id: 7,
        name: "Soil Revival Project",
        owner: "Stanisław Kowalski",
        region: "Poland",
        soilScore: 75,
        acres: 320,
        investment: "€42,000",
        practices: ["Deep Mulching", "Biochar", "Crop Rotation"],
        image: "🌾",
      },
      {
        id: 8,
        name: "Eco-Farm Alliance",
        owner: "Ingrid Andersen",
        region: "Denmark",
        soilScore: 81,
        acres: 290,
        investment: "€51,000",
        practices: ["Regenerative Grazing", "Cover Crops", "Agroforestry"],
        image: "🐑",
      },
      {
        id: 9,
        name: "Carbon Sequestration Farm",
        owner: "Philippe Leclerc",
        region: "Belgium",
        soilScore: 79,
        acres: 410,
        investment: "€46,500",
        practices: ["Perennial Crops", "Biochar", "Mulching"],
        image: "🌳",
      },
      {
        id: 10,
        name: "Biodiversity Haven",
        owner: "Anna Kowalska",
        region: "Poland",
        soilScore: 83,
        acres: 520,
        investment: "€58,000",
        practices: ["Native Plants", "Pollinator Support", "Wetlands"],
        image: "🦋",
      },
      {
        id: 11,
        name: "Future Farms Cooperative",
        owner: "Hans Bergström",
        region: "Sweden",
        soilScore: 76,
        acres: 350,
        investment: "€44,000",
        practices: ["Crop Rotation", "Composting", "Minimal Tillage"],
        image: "🌾",
      },
      {
        id: 12,
        name: "Valley Restoration",
        owner: "Petra Hoffmann",
        region: "Austria",
        soilScore: 80,
        acres: 260,
        investment: "€39,500",
        practices: ["Forest Integration", "Cover Crops", "Agroforestry"],
        image: "🌲",
      },
    ],
    []
  );

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
