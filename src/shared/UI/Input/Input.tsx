import { memo } from "react";
import cls from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const { label, ...inputProps } = props;

  return (
    <div className={cls.InputDiv}>
      {label && <span>{label}</span>}
      <input type="text" {...inputProps} />
    </div>
  );
})

