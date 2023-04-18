import { memo } from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = memo((props: InputProps) => {
  const { label, ...inputProps } = props;

  return (
    <div className="InputDiv">
      {label && <span>{label}</span>}
      <input type="text" {...inputProps} />
    </div>
  );
})

export default Input;
