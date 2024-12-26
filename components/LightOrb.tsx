import React from "react";

const LightOrb = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div
      className={`absolute blur-3xl opacity-10 rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
    />
  );
};

export default LightOrb;
