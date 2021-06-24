import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import Select from "react-select";
import "./SendMessage.css";

function SendMessage() {
  const [searchList, setSearchList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    if (searchList.length === 0) {
      setSearchList(options);
    }
  });

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <>
      <div className="user-actions">
        <div className="search-field">
          <Select
            value={selectedOption}
            options={searchList}
            onChange={handleChange}
            placeholder="search"
            openMenuOnClick
          />
        </div>
        <div className="text-field">
          <TextareaAutosize
            id="message-text"
            aria-label="minimum height"
            rowsMin={8}
            rowsMax={8}
            placeholder="Minimum 3 rows"
          />
        </div>
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </div>
    </>
  );
}

export default SendMessage;
