import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DragHandle from "@mui/icons-material/DragHandle";
import Delete from "@mui/icons-material/Delete";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: number;
  title: string;
  deleteTask: (id: number) => void;
}

const TodoItem = ({ title, id, deleteTask }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      variant="outlined"
      sx={{ paddingX: 2 }}
      ref={setNodeRef}
      style={style}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="body1">{title}</Typography>
        <Stack direction="row" spacing={0}>
          <IconButton color="error" onClick={() => deleteTask(id)}>
            <Delete />
          </IconButton>
          <IconButton {...attributes} {...listeners}>
            <DragHandle />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default TodoItem;
