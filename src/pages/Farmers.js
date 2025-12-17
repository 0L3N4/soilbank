import React, { useState } from "react";
import "./Farmers.css";
import Footer from "../components/Footer";
import { getFarms, saveFarms } from "../utils/farmsStorage";

function Farmers() {
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Form state for Upload Soil Data tab
  const [farmName, setFarmName] = useState("");
  const [farmerName, setFarmerName] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [country, setCountry] = useState("France");
  const [farmSize, setFarmSize] = useState("");
  const [testFile, setTestFile] = useState(null);

  // Available soil practices for random assignment
  const soilPractices = [
    "Cover Crops",
    "Minimal Tillage",
    "Composting",
    "Reduced Tillage",
    "Mulching",
    "Crop Rotation",
    "Deep Mulching",
    "Biochar Amendment",
    "Soil Testing",
    "Vermicomposting",
    "No-Till Farming",
    "Soil Amendment",
    "Microbial Enhancement",
    "pH Balancing",
    "Soil Biota Restoration",
  ];

  // Function to generate random soil score (72-88)
  const generateRandomSoilScore = () => {
    return Math.floor(Math.random() * 17) + 72; // 72-88
  };

  // Function to randomly select 3 practices
  const generateRandomPractices = () => {
    const shuffled = [...soilPractices].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  // Handle Upload and Save Farm
  const handleUploadFarm = () => {
    if (
      !farmName ||
      !farmerName ||
      !investmentAmount ||
      !farmSize ||
      !testFile
    ) {
      alert(
        "Please fill in all fields: Farm Name, Farmer Name, Investment Amount, Farm Size, and upload a test file"
      );
      return;
    }

    // Get existing farms
    const existingFarms = getFarms();
    const newId =
      existingFarms.length > 0
        ? Math.max(...existingFarms.map((f) => f.id)) + 1
        : 1;

    // Generate random data
    const randomSoilScore = generateRandomSoilScore();
    const randomPractices = generateRandomPractices();

    // Create new farm object with farmer name and file info
    const newFarm = {
      id: newId,
      name: farmName,
      owner: farmerName,
      region: country,
      soilScore: randomSoilScore,
      acres: parseInt(farmSize),
      investment: `€${parseInt(investmentAmount).toLocaleString()}`,
      practices: randomPractices,
      image: "🌾",
      description: `Farmer-registered farm focused on soil regeneration`,
      yearEstablished: new Date().getFullYear(),
      certifications: ["Soil-Based"],
      farmType: "Soil-Based",
      testFile: testFile.name, // Store file name reference
      uploadedDate: new Date().toISOString(),
    };

    // Add new farm to existing farms
    const updatedFarms = [...existingFarms, newFarm];
    saveFarms(updatedFarms);

    // Show success message
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      // Reset form
      setFarmName("");
      setFarmerName("");
      setInvestmentAmount("");
      setCountry("France");
      setFarmSize("");
      setTestFile(null);
    }, 3000);
  };

  // Sample farmer data
  const farmerStats = [
    { label: "Total Farms", value: "287" },
    { label: "Avg Soil Score", value: "72/100" },
    { label: "Active Projects", value: "156" },
    { label: "Total Acres", value: "12,450" },
  ];

  const tabs = [
    {
      id: "upload",
      label: "Upload Soil Data",
      title: "Upload Soil Data",
      description:
        "Share your soil test results to calculate your farm's health score",
      content: (
        <div className="tab-content">
          <div className="content-section">
            <h3>Upload Your Soil Test Results</h3>
            <p>
              Help us assess your farm's soil health by uploading your latest
              soil test data. Our system will analyze key metrics including
              nutrients, organic matter, pH levels, and microbial activity to
              generate your personalized Soil Health Score.
            </p>
            {uploadSuccess && (
              <div className="success-message">
                ✅ Farm data saved successfully! Your farm has been added to the
                network.
              </div>
            )}
            <div className="upload-form">
              <div className="form-group">
                <label>Farm Name</label>
                <input
                  type="text"
                  placeholder="Enter your farm name"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Farm Size (acres)</label>
                  <input
                    type="number"
                    placeholder="e.g., 300"
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Farmer Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Required Investment (€)</label>
                  <input
                    type="number"
                    placeholder="e.g., 45000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Upload Test Results (PDF, Image, or Document)</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => setTestFile(e.target.files[0])}
                />
                {testFile && (
                  <p className="file-name-display">
                    ✓ File selected: {testFile.name}
                  </p>
                )}
              </div>
              <button className="form-submit-btn" onClick={handleUploadFarm}>
                Upload and Analyze
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "project",
      label: "Create a Project",
      title: "Create a Project",
      description:
        "Develop a regenerative agriculture plan and attract investors",
      content: (
        <div className="tab-content">
          <div className="content-section">
            <h3>Build Your Regenerative Agriculture Project</h3>
            <p>
              Create a comprehensive project proposal that outlines your
              regenerative agriculture goals, implementation timeline, and
              expected environmental and financial impact. This will help
              attract the right investors for your farm.
            </p>
            <div className="upload-form">
              <div className="form-group">
                <label>Project Title</label>
                <input
                  type="text"
                  placeholder="e.g., Soil Regeneration Initiative 2025"
                />
              </div>
              <div className="form-group">
                <label>Project Description</label>
                <textarea
                  rows="5"
                  placeholder="Describe your regenerative practices..."
                ></textarea>
              </div>
              <div className="form-group">
                <label>Funding Target ($)</label>
                <input type="number" placeholder="e.g., 50000" />
              </div>
              <div className="form-group">
                <label>Implementation Timeline (months)</label>
                <input type="number" placeholder="e.g., 12" />
              </div>
              <button className="form-submit-btn">Create Project</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "progress",
      label: "Track Progress",
      title: "Track Progress",
      description:
        "Monitor soil improvements and project performance over time",
      content: (
        <div className="tab-content">
          <div className="content-section">
            <h3>Monitor Your Farm's Progress</h3>
            <p>
              Track the success of your regenerative agriculture projects with
              real-time analytics. Monitor soil health improvements, compare
              your farm's performance against benchmarks, and share progress
              updates with your investors.
            </p>
            <div className="progress-metrics">
              <div className="metric-card">
                <div className="metric-label">Current Soil Score</div>
                <div className="metric-value">72/100</div>
                <div className="metric-change positive">
                  ↑ +5 points this quarter
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Project Completion</div>
                <div className="metric-value">65%</div>
                <div className="progress-bar-small">
                  <div className="progress-fill" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Carbon Sequestered</div>
                <div className="metric-value">2.5 tons</div>
                <div className="metric-change positive">
                  ↑ Increasing each month
                </div>
              </div>
            </div>
            <button className="form-submit-btn">View Detailed Analytics</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="farmers-container">
      {/* Hero Section */}
      <section className="farmers-hero">
        <div className="farmers-hero-content">
          <h1 className="farmers-hero-title">Farmers Dashboard</h1>
          <p className="farmers-hero-description">
            Manage your soil regeneration projects, track improvements, and
            connect with investors
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="farmers-stats-section">
        <h2 className="section-title">Farm Network Overview</h2>
        <div className="farmers-stats-container">
          {farmerStats.map((stat, index) => (
            <div key={index} className="farmers-stat-item">
              <div className="farmers-stat-number">{stat.value}</div>
              <div className="farmers-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Section - Tabbed Interface */}
      <section className="farmers-actions-section">
        <h2 className="section-title">Get Started</h2>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <div className="tabs-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tabs-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="farmers-benefits-section">
        <h2 className="section-title">Why Join SoilBank?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">📊</div>
            <h4 className="benefit-title">Real-Time Monitoring</h4>
            <p className="benefit-description">
              Track soil health metrics and farm performance with our advanced
              analytics
            </p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💰</div>
            <h4 className="benefit-title">Secure Funding</h4>
            <p className="benefit-description">
              Connect with impact-driven investors ready to fund your
              regenerative practices
            </p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🌱</div>
            <h4 className="benefit-title">Sustainability Support</h4>
            <p className="benefit-description">
              Access expert guidance and resources for implementing best
              practices
            </p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🔗</div>
            <h4 className="benefit-title">Community Network</h4>
            <p className="benefit-description">
              Join a network of progressive farmers sharing knowledge and
              experiences
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Farmers;
