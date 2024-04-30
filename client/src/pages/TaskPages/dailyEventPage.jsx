import { Typography } from "@material-tailwind/react";
// we should use momentjs for working with time and date
import moment from "moment";
import TaskListsComponent from "../../components/TaskListsComponent/TaskListsComponent";

const DailyEventPage = () => {
  // todo : call data from api (only daily)
  return (
    <section className="DailtTasks">
      <div className="Banner mb-4 shadow-sm px-4 py-1 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
        <Typography
          variant="h6"
          color="white"
          className="text-md font-Kanit font-normal"
        >
          Today {moment().format("DD.MM.YYYY")}
        </Typography>
      </div>
      <div className="TaskLists xl:w-[850px] sm:w-full xl:columns-3 sm:columns-1 space-y-5 px-5">
        {/* // ? lists data should be mapped from server and rendered here */}
        <TaskListsComponent />
      </div>
    </section>
  );
};

export default DailyEventPage;
