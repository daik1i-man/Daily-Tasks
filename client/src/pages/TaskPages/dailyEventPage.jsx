import { Typography } from "@material-tailwind/react";
import TaskList from "../../components/TaskList/TaskList";
// we should use momentjs for working with time and date
import moment from "moment";

const DailyEventPage = () => {
  // todo : call data from api (only daily)
  return (
    <section className="DailtTasks">
      <div className="Banner mb-4 shadow-sm px-4 py-2 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
        <Typography
          variant="h6"
          color="white"
          className="text-md font-Kanit font-normal"
        >
          Today {moment().format("DD.MM.YYYY")}
        </Typography>
      </div>
      <div className="TaskLists columns-3 px-5 pt-3">
        {/* // ? lists data should be mapped from server and rendered here */}
        {/* <TaskList></TaskList> */}
      </div>
    </section>
  );
};

export default DailyEventPage;