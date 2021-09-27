import React, { useState, useEffect } from "react";

import "./Packages.css";

const Packages = ({packageType, provider, packages, selectedPackage, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [packagess, setPackages] = useState([]);

  const packageOptions = packages;

  useEffect(() => {
    setPackages(packageOptions);
  }, []);

  const handleSubmit = (e) => {
    
    setState((state) => ({
      ...state,
      selectedPackage: packagess.find(
        (packg) => packg.id === e.target.value
      ),
    }));
    console.log(selectedPackage)
  };

  const handleConfirm = () => {
    actionProvider.getPackageInfo(selectedPackage.name, packageType, provider);
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!packagess) return null;

  const createPackageOptions = () => {
    return packagess.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <div className="packages-selector-container">
          <>
            {" "}
            <h2 className="packages-selector-heading">Select a Package</h2>
            <select
              className="packages-selector"
              value={selectedPackage.id}
              onChange={handleSubmit}
            >
              {createPackageOptions()}
            </select>
            <button className="packages-button-confirm" onClick={handleConfirm}>
              Find More Info
            </button>
          </>
    </div>
  );
};

export default Packages;
