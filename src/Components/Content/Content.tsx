import React, { FC, useState } from "react";
import {Input} from "shared/UI/Input/Input";
import cls from "./Content.module.scss";
import Button from '@mui/material/Button';

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
      <main className={cls.Content}>
        <p className={cls.ContentP}> {content} </p>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={value}
            label="Username:"
            className={cls.ContentInputs}
          />
          {/* <Input type="ref" name="ref" label="Ref:" className={cls.ContentInputs} /> */}
          <Input
            type="password"
            name="password"
            label="Password:"
            className={cls.ContentInputs}
          />

          <Button variant="contained"> Login </Button>

        </form>
      </main>
    </>
  );
};
export default Content;
