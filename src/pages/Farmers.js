import React, { useState } from "react";
import "./Farmers.css";
import Footer from "../components/Footer";
import { getFarms, saveFarms } from "../utils/farmsStorage";

function Farmers() {
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

      {/* Quick Actions Section - Main Registration Form */}
      <section className="farmers-actions-section">
        <h2 className="section-title">Register Your Farm</h2>

        {/* Registration Form */}
        <div className="registration-form-container">
          {uploadSuccess && (
            <div className="success-message">
              ✅ Farm data saved successfully! Your farm has been added to the
              network.
            </div>
          )}

          <div className="content-section">
            <h3>Upload Your Soil Test Results</h3>
            <p>
              Help us assess your farm's soil health by uploading your latest
              soil test data. Our system will analyze key metrics including
              nutrients, organic matter, pH levels, and microbial activity to
              generate your personalized Soil Health Score.
            </p>
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
                Register Farm
              </button>
            </div>
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
