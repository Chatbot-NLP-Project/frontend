import { Button } from "@chakra-ui/button";
import { MdBuild , MdCall } from "react-icons/md"
import React from "react";

import "./Options.css";

const Options = props => {
  return (
    <div className="options">
      <h1 className="options-header">{props.title}</h1>
      <h1 className="options-headers">{props.extra}</h1>
      <div className="options-container">
        {props.options.map(option => {
          return (
            
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              <div className="option-name">
              {option.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
