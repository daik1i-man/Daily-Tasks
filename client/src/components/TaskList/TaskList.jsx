import { Card, CardBody, CardHeader, List, ListItem } from "@material-tailwind/react";

const TaskList = ({ TaskListData }) => {
  // TaskListData <== in this prop we'll recieve data for list and their tasks
  return (
    <Card className="break-inside-avoid">
      <CardHeader className="w-[95%] p-3 text-xl" floated={false}>
        {/* List title */}
        Todo
      </CardHeader>
      <CardBody>
        {/* tasks in this place should be mappeed */}
        <List>
          {/* <ListItem></ListItem> */}
        </List>
      </CardBody>
    </Card>
  );  
};

export default TaskList;
