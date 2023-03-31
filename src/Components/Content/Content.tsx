import React, { FC, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import "./Content.scss";

export interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <main className="Content">
        <p className="ContentP"> {content} </p>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={value}
            label="Username:"
            className="ContentInputs"
          />

          <Input type="ref" name="ref" label="Ref:" className="ContentInputs" />
          <Input
            type="password"
            name="password"
            label="Password:"
            className="ContentInputs"
          />

          <Button type="primary"> Login </Button>
		  
        </form>
      </main>
    </>
  );
};
export default Content;
