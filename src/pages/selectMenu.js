import React from "react";

const SelecMenu = (props) => {
  const options = props.lista.map((option) => {
    return (
    <option value={option.value}>{option.label}</option>
    );
  });

  return <select {...props}>{options}</select>;
};

export default SelecMenu;
