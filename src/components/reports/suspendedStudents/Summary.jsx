import React from "react";

const Summary = ({ total }) => {
  return (
    <div className="row d-flex align-items-center bg-light px-4 py-2 rounded-pill shadow-sm " >

      <div
        className="col-lg-6   text-white rounded-circle d-flex align-items-center justify-content-center me-2"
        style={{ width: "35px", height: "35px" }}
      >
        👤
      </div>
<div className="col-lg-6" style={{ width: "140px", height: "35px" }}>
        <small className="text-muted d-block">TOTAL DE ALUNOS </small>
        <strong className="text-primary">{total}</strong>
</div>
    </div>

  );
};

export default Summary;