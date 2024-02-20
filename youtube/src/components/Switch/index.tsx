import React from "react";
import { SwitchInput, SwitchLabel, SwitchButton } from "./styled";

interface SwitchProps {
  id: string;
  toggled: boolean;
  onChange: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};
