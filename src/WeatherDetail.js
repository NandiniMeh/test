import React from "react";
import { Typography } from "@mui/material";
import { getIcon } from "./utils";

function WeatherDetail({ label, value, iconColor }) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginBottom: "10px",
        marginLeft: "20%",
      }}
    >
      <Typography
        variant="body1"
        style={{ flex: 1, justifyContent: "flex-start", display: "flex" }}
      >
        {label}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        {getIcon(label, iconColor)}
        <Typography variant="body1" style={{ marginRight: "5px" }}>
          {value}
        </Typography>
      </div>
    </div>
  );
}

export default WeatherDetail;
