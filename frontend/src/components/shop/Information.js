import React from "react";

const Information = ({label, value}) => {
  return (
    <div>
      <div>{label}</div>
      <div>{value ? value : "/"}</div>
    </div>
  );
};

export default Information;
