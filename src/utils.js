import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import OpacityIcon from "@mui/icons-material/Opacity";
import CompressIcon from "@mui/icons-material/Compress";

export function getTemperatureColor(temp) {
  if (temp <= 10) return "#00B0F0"; // Blue for cold
  if (temp <= 20) return "#80C342"; // Green for mild
  return "#FF4500"; // Red for hot
}

export function getHumidityColor(humidity) {
  if (humidity < 30) return "#FF4500"; // Red for low
  if (humidity <= 60) return "#80C342"; // Green for moderate
  return "#00B0F0"; // Blue for high
}

export function getPressureColor(pressure) {
  if (pressure < 1000) return "#FF4500"; // Red for low
  if (pressure <= 1020) return "#80C342"; // Green for moderate
  return "#00B0F0"; // Blue for high
}

export function getCloudCoverageColor(cloudiness) {
  if (cloudiness < 20) return "#80C342"; // Green for clear
  if (cloudiness <= 50) return "#F9D423"; // Yellow for partly cloudy
  return "#00B0F0"; // Blue for cloudy
}

export function getIcon(label, iconColor) {
  const style = { color: iconColor, width: "20px", height: "20px", marginRight: "5px" };
  switch (label) {
    case "Humidity":
      return <OpacityIcon style={style} />;
    case "Pressure":
      return <CompressIcon style={style} />;
    case "Cloud Coverage":
      return <CloudIcon style={style} />;
    default:
      return <OpacityIcon style={style} />;
  }
}
