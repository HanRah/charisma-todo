import { useState } from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

interface Props {
  addTask: (title: string) => void;
}

const TodoInput = ({ addTask }: Props) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ paddingTop: 2 }}>
        <Grid item xs={8}>
          <TextField
            label="Enter a new task"
            variant="outlined"
            sx={{ width: "100%" }}
            size="small"
            onChange={handleChange}
            value={title}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            sx={{ width: "calc(100% - 16px)", marginLeft: 2 }}
            type="submit"
            disabled={!title}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoInput;
