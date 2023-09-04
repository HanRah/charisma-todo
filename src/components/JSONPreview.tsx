import Box from "@mui/material/Box";

import { Task } from "./TodoList";

interface Props {
  data: Task[];
}

const JSONPreview = ({ data }: Props) => {
  return (
    <Box sx={{ p: 2, border: "1px dashed grey", borderRadius: 1 }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};

export default JSONPreview;
