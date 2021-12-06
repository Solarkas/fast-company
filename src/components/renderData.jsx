import React from "react";
import { handleQualitiesChange } from "./handleQualitiesChange";

const renderData = (e, setUsers) => {
  const b = e.qualities.map((e, i) => {
    const name = e.name;
    const clas = (e.className = `btn btn-${e.color} btn-sm m-2 btn-user`);
    return (
      <div key={i} className={clas}>
        <p
          type="button"
          className="p_name"
          onClick={() => handleQualitiesChange(e, setUsers)}
        >
          {name}
        </p>
      </div>
    );
  });

  return b;
};

export default renderData;
