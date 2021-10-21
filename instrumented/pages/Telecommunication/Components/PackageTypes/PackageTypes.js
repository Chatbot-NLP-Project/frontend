import React, { useState, useEffect } from "react";

import "./PackageTypes.css";

const PackageTypes = ({ packageTypes, selectedPackageType, provider, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [packagess, setPackages] = useState([]);

  const packageOptions = packageTypes;

  useEffect(() => {
    setPackages(packageOptions);
    setState((state) => ({
      ...state,
      selectedPackageType: packageOptions[0],
    }))
  }, []);

  const handleSubmit = (e) => {
    // console.log(packagess)
    setState((state) => ({
      ...state,
      selectedPackageType: packagess.find(
        (packg) => packg.id === e.target.value
      ),
    }));
    
  };

  const handleConfirm = () => {
    // console.log(selectedPackageType.package_type)
    actionProvider.selectPackageType(selectedPackageType.package_type, provider);
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!packagess) return null;

  const createPackageOptions = () => {
    return packagess.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.package_type}
        </option>
      );
    });
  };

  return (
    <div className="packages-selector-container">
          <>
            {" "}
            <h2 className="packages-selector-heading">Select Package Type you want to view</h2>
            <select
              className="packages-selector"
              value={selectedPackageType.id}
              onChange={handleSubmit}
            >
              {createPackageOptions()}
            </select>
            <button className="packages-button-confirm" onClick={handleConfirm}>
              View Packages
            </button>
          </>
    </div>
  );
};

export default PackageTypes;
