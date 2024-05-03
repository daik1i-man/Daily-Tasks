import { Typography } from "@material-tailwind/react";
import { ListDropComponent } from '../../components/listDropComponent/listDropComponent';
import moment from "moment";
// we should use momentjs for working with time and date

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
      <div className="TaskLists overflow-hidden">
        {/* // ? lists data should be mapped from server and rendered here */}
        <ListDropComponent />
      </div>
    </section>
  );
};

export default DailyEventPage;
