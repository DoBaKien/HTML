import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  newTodo: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const Create = ({ handleChange, handleClick, newTodo }: Props) => {
  return (
    <div>
      <TextField size="small" value={newTodo} onChange={handleChange} />
      <Button variant="contained" onClick={handleClick}>
        Contained
      </Button>
    </div>
  );
};

export default Create;
