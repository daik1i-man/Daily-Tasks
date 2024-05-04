import React from "react";
import { Card, Typography, List, Avatar, Accordion, AccordionBody, PopoverContent, Popover, PopoverHandler, Input } from "@material-tailwind/react";
import { CalendarDays, ChevronLeftIcon, ChevronRightIcon, Clock, LogOut, Menu, PlusIcon, SquareGanttChart, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ModalContext, openAddSpecialDayModalContext } from '../../Contexts/ActionsContext';

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [openAccordion, setOpenAccordion] = React.useState(0);
  const [active, setActive] = React.useState(1);
  const { setOpenModal } = React.useContext(ModalContext);
  const { openAddSpecialDayModal, setOpenAddSpecialDayModal } = React.useContext(openAddSpecialDayModalContext);

  const activeHandler = (value) => setActive(active === value ? 0 : value);

  const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

  return (
    <div
      className={`${open ? 'transition-all max-w-[4.5rem]' : 'transition-all max-w-[15rem]'}`}
    >
      <div className="w-full justify-center">
        {open ? (
          <Menu
            className="cursor-pointer mx-auto transition-all"
            onClick={() => setOpen(!open)}
          />) : (
          <X
            className="cursor-pointer float-end mx-4 transition-all"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <Card className="h-[86.5vh] w-full xl:max-w-[15rem]">
        <div className="my-5">
          <Typography variant="h5" color="blue-gray" className={`${open ? 'block' : 'flex'} gap-x-3`}>
            <Avatar
              className={`${open ? 'w-12 h-12 mx-auto' : 'w-10 h-10 mx-auto'}`}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={`Info ${open ? 'hidden' : 'block'}`}>
              <h5>Jo'shqin</h5>
              <p className="text-xs font-light">olimboevjoshqin@gmail.com</p>
            </div>
          </Typography>
        </div>
        <List className="space-y-3">
          <Link
            to="/board/daily"
            className={`${open ? 'w-[4.5rem]' : 'w-[15rem]'}`}
          >
            <div
              onClick={() => activeHandler(1)}
              className={`flex gap-3 ${active === 1 ? 'bg-black p-2 text-white' : 'p-2'} ${open ? '' : 'px-6'}`}
            >
              <div className={`${open ? 'w-full justify-center mx-auto' : ''}`}>
                <Clock className={`h-5 w-6 mx-auto`} />
              </div>
              <p className={`${open ? 'hidden' : 'block'}`}>Today's challenges</p>
            </div>
          </Link>
          <Link to="/board/weekly" className={`${open ? 'w-[4.5rem]' : 'w-[15rem]'}`}>
            <div
              onClick={() => activeHandler(2)}
              className={`flex gap-3 ${active === 2 ? 'bg-black p-2 text-white' : 'p-2'} ${open ? '' : 'px-6'}`}
            >
              <div className={`${open ? 'w-26 justify-center mx-auto' : ''}`}>
                <SquareGanttChart className={`h-5 w-6 mx-auto`} />
              </div>
              <p className={`${open ? 'hidden' : 'block'}`}>Weekly tasks</p>
            </div>
          </Link>
          <Link to="/board/monthly" className={`${open ? 'w-[4.5rem]' : 'w-[15rem]'}`}>
            <div
              onClick={() => activeHandler(3)}
              className={`flex gap-3 ${active === 3 ? 'bg-black p-2 text-white' : 'p-2'} ${open ? '' : 'px-6'}`}
            >
              <div className={`${open ? 'w-full justify-center mx-auto' : ''}`}>
                <CalendarDays className={`h-5 w-6 mx-auto`} />
              </div>
              <p className={`${open ? 'hidden' : 'block'}`}>Monthly Tasks</p>
            </div>
          </Link>
          <div
            className="w-[12.2rem] justify-start cursor-pointer"
            open={openAccordion === 1}
          >
            <div
              onClick={() => setOpenAddSpecialDayModal(true)}
              className="flex gap-4"
            >
              <div className={`${open ? 'w-full justify-center mx-auto' : ''}`}>
                <PlusIcon className={`h-5 w-6 mx-auto`} />
              </div>
              <p className={`${open ? 'hidden' : 'block'}`}>add special day</p>
            </div>
          </div>
          <div className="flex gap-4 w-[11.8rem] justify-start cursor-pointer" onClick={() => setOpenModal(true)}>
            <div className={`${open ? 'w-full float-left' : ''}`}>
              <LogOut className={`h-5 w-6 mx-auto`} />
            </div>
            <p className={`${open ? 'hidden' : 'block'}`}>Log Out</p>
          </div>
        </List>
      </Card>
    </div >
  );
};
export default Sidebar;
