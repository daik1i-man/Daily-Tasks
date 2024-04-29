import React from "react";
import { Button, Card, CardBody, List } from "@material-tailwind/react";
import { Check, EllipsisVertical, Plus, Trash2, X } from "lucide-react";

const TaskList = ({ TaskListData, TaskName }) => {
  const [active, setActive] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const AddColumnHandler = (e) => {
    e.preventDefault();

    if (value !== '') {
      setActive(false);
    }
  }

  const CloseRef = () => {
    setValue('');
    setActive(false);
  }

  // TaskListData <== in this prop we'll recieve data for list and their tasks
  return (
    <Card className="break-inside-avoid xl:w-64 shadow-none border border-solid sm:w-[98%] relative">
      <div className="flex w-[95%] items-center h-10 justify-between">
        <div className="shadow-none text-base px-2" floated={false}>
          {TaskName}
        </div>
        <Button className="w-5 bg-white text-black shadow-none hover:shadow-none">
          <EllipsisVertical onClick={() => setIsOpen((prev) => !prev)} className="w-4 h-4 cursor-pointer opacity-50 hover:opacity-100" />
        </Button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-36 bg-white shadow-md rounded-sm right-7 top-6 absolute transition-all z-20`}>
        <div className="w-full flex space-x-3 hover:bg-blue-gray-50 p-2 cursor-pointer text-red-400">
          <Trash2 className="w-3 h-3" />
          <p className="text-xs">Delete</p>
        </div>
      </div>
      <CardBody className="-mt-4">
        {/* tasks in this place should be mappeed */}
        <List>{}</List>
        <List className="">
          <div className={`${active ? 'block' : 'hidden'} space-y-2 w-full`}>
            <textarea
              id="input"
              className="border rounded-md border-solid p-2 text-xs w-full resize-none"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="w-56 flex justify-end space-x-2">
              <Button className="py-1 px-2 rounded-[5px]">
                <Check className="w-3 h-3 cursor-pointer" onClick={AddColumnHandler} />
              </Button>
              <Button className="py-1 px-2 rounded-[5px] bg-red-300" onClick={CloseRef}>
                <X className="w-3 h-3 cursor-pointer" />
              </Button>
            </div>
          </div>
          <div
            className={`${active ? 'hidden' : 'block'} justify-start w-full`}
          >
            <Button
              onClick={() => setActive(true)}
              className="w-28 flex space-x-2 lowercase bg-white text-black shadow-none py-2 px-3 hover:shadow-none rounded-[8px]"
            >
              <Plus className="w-3 h-3" />
              <p className="text-xs font-light">add task</p>
            </Button>
          </div>
        </List>
      </CardBody>
    </Card>
  );
};

export default TaskList;
