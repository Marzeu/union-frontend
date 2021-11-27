import React from "react";

const SelecMenu = (props) => {
  const options = props.lista.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    );
  });

  return <select {...props}>{options}</select>;
};

export default SelecMenu;
