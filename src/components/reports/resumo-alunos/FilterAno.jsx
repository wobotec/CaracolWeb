import React from "react";

const FilterAno = () => {
  return (
    <div
      style={{
        background: "#f1f3f5",
        padding: "15px",
        borderRadius: "8px",
        minWidth: "200px",
      }}
    >
      <div style={{ fontSize: "13px", marginBottom: "5px" }}>
        Ano lectivo:
      </div>

      <select
        style={{
          width: "100%",
          padding: "6px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option>2024/2025</option>
        <option>2023/2024</option>
      </select>
    </div>
  );
};

export default FilterAno;