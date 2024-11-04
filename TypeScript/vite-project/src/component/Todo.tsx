import { Button } from "@mui/material";

const Todo = ({ name }: { name: string }) => {
  return (
    <>
      <Button variant="text">{name}</Button>
    </>
  );
};

export default Todo;
