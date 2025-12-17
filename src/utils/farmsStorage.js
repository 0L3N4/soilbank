import farmsData from "../data/farmsData";

const STORAGE_KEY = "soilbank_farms";

/**
 * Initialize farms in localStorage if they don't exist
 * Called on app load to ensure data is available
 */
export const initializeFarms = () => {
  const existingFarms = localStorage.getItem(STORAGE_KEY);

  // If no farms exist in storage, initialize with default farms
  if (!existingFarms) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(farmsData));
    return farmsData;
  }

  return JSON.parse(existingFarms);
};

/**
 * Get all farms from localStorage
 * @returns {Array} Array of farm objects
 */
export const getFarms = () => {
  try {
    const farms = localStorage.getItem(STORAGE_KEY);
    return farms ? JSON.parse(farms) : [];
  } catch (error) {
    console.error("Error retrieving farms from localStorage:", error);
    return [];
  }
};

/**
 * Save farms to localStorage
 * @param {Array} farmsArray - Array of farm objects to save
 */
export const saveFarms = (farmsArray) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(farmsArray));
    return true;
  } catch (error) {
    console.error("Error saving farms to localStorage:", error);
    return false;
  }
};

/**
 * Clear all farms from localStorage (utility function)
 */
export const clearFarms = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Error clearing farms from localStorage:", error);
    return false;
  }
};

/**
 * Reset farms to default data
 * @returns {Array} Default farms data
 */
export const resetFarmsToDefault = () => {
  saveFarms(farmsData);
  return farmsData;
};

const farmsStorageUtils = {
  initializeFarms,
  getFarms,
  saveFarms,
  clearFarms,
  resetFarmsToDefault,
};

export default farmsStorageUtils;
