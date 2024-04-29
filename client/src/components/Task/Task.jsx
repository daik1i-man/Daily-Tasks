import { ListItem, Typography } from "@material-tailwind/react";

const Task = ({ taskData }) => {
  // taskData <== in this prop we will recieve task data e.g Task description task date
  return (
    <ListItem className="border-2 w-full">
      <Typography>This is desc</Typography>
    </ListItem>
  );
};

export default Task;
