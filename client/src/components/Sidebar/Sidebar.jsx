import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import {
  CalendarDays,
  Clock,
  LogOut,
  PlusIcon,
  SquareGanttChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 ">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="flex gap-3">
          <Avatar src="" />
          <div className="Info">
            <h5>Name</h5>
            <p className="font-light">Email</p>
          </div>
        </Typography>
      </div>
      <List>
        <Link to="/board/daily" className="w-full">
          <ListItem>
            <ListItemPrefix>
              <Clock className="h-5 w-5" />
            </ListItemPrefix>
            Todays challenges
          </ListItem>
        </Link>
        <Link to="/board/weekly" className="w-full">
          <ListItem>
            <ListItemPrefix>
              <SquareGanttChart className="h-5 w-5" />
            </ListItemPrefix>
            Weekly tasks
          </ListItem>
        </Link>
        <Link to="/board/monthly" className="w-full">
          <ListItem>
            <ListItemPrefix>
              <CalendarDays className="h-5 w-5" />
            </ListItemPrefix>
            Monthly tasks
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <PlusIcon className="h-5 w-5 " />
          </ListItemPrefix>
          Add special day
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <LogOut className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};
export default Sidebar;
