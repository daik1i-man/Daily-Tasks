import React from 'react'
import { Button } from '@material-tailwind/react';
import { Plus, Check, X } from 'lucide-react';
import TaskList from '../TaskList/TaskList';

const TasksName = [
    "Todo",
    "In process",
    "Done",
]

function TaskListsComponent() {
    const [active, setActive] = React.useState(false);
    const [value, setValue] = React.useState('');

    const AddColumnHandler = () => {
        if (value === '') {
            setActive(false);
        }
    }
    return (
        <div className="flex items-start">
            <div className="TaskLists xl:w-[850px] sm:w-full xl:columns-3 sm:columns-1 space-y-5 px-5">
                {TasksName.map((task, index) => (<TaskList key={index} TaskName={task} />))}
            </div>
            <div className="space-y-3">
                <div className={`${active ? 'block' : 'hidden'} space-y-2`}>
                    <textarea
                        id="input"
                        className="border rounded-md border-solid p-2 text-xs resize-none"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div className="flex justify-end space-x-2">
                        <Button className="py-1 px-2 rounded-[5px] bg-blue-gray-200">
                            <Check className="w-3 h-3 cursor-pointer" onClick={AddColumnHandler} />
                        </Button>
                        <Button className="py-1 px-2 rounded-[5px] bg-red-400" onClick={() => setActive(false)}>
                            <X className="w-3 h-3 cursor-pointer" />
                        </Button>
                    </div>
                </div>
                <div
                    className={`${active ? 'hidden' : 'block'}`}
                >
                    <Button
                        onClick={() => setActive(true)}
                        className="bg-white text-black border border-solid space-x-2 lowercase py-2 px-3 hover:shadow-none shadow-none rounded-[8px]"
                    >
                        <Plus className="w-3 h-3" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TaskListsComponent;
