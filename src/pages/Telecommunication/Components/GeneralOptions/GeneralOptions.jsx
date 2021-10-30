import React, { useEffect, useState } from "react";
import Axios from "axios";
import Options from "../Options/Options";

const GeneralOptions = props => {
  const [provider, setProvider] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:5000/getUser", {
      userID : JSON.parse(localStorage.getItem("user"))["user_id"] 
  }).then((response) => {
    console.log(response.data.user)
    setProvider(response.data.user.sim_type);
    });
  }, []);

  const complaint = () => {
    props.actionProvider.handleComplaint(provider)
  }
  const options = [
    {
      name: "Data Packages",
      handler: props.actionProvider.handleDataPackage,
      id: 1
    },
    {
      name: "View Activated Packages",
      handler: props.actionProvider.viewActivatedPackages,
      id: 2
    },
    {
      name: "View Activated Packages By Date",
      handler: props.actionProvider.displayCalendarForPackages,
      id: 3
    },
    { name: "Complaints", handler: complaint, id: 4 },
    {
      name: "Current Balance",
      handler: props.actionProvider.getCurrentBalance,
      id: 5
    },
    {
      name: "View Crypto Price",
      handler: props.actionProvider.viewCryptoCurrencyPrice,
      id: 6
    },
    {
      name: "View Crypto Price IN LKR",
      handler: props.actionProvider.viewCryptoCurrencyPriceInLKR,
      id: 7
    },
    {
      name: "1 USDT = LKR?",
      handler: props.actionProvider.viewLKRValue,
      id: 8
    },
    {
      name: "View Currency Values",
      handler: props.actionProvider.viewCurrencyValues,
      id: 9
    }
  ];
  return <Options options={options} title="General Options" extra = "Click an option only once and wait for the answer. Some answers require some time to generate" {...props} />;
};

export default GeneralOptions;
