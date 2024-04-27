import React from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { ModalContext } from "../../Contexts/ActionsContext";
import { LogOut } from "lucide-react";

export default function LogoutModal() {
    const { openModal, setOpenModal } = React.useContext(ModalContext);

    const handleOpen = () => setOpenModal(false);

    return (
        <>
            <Dialog open={openModal} handler={handleOpen} className="h-48 absolute">
                <DialogBody className="mt-4">
                    <div className="flex gap-8">
                        <div className="w-12 h-12 p-3.5 bg-blue-gray-50 text-red-500 rounded-full">
                            <LogOut className="w-5 h-5" />
                        </div>
                        <p className="text-xl font-semibold">Are you sure logout?</p>
                    </div>
                </DialogBody>
                <DialogFooter className="flex gap-4 mt-4">
                    <Button
                        onClick={handleOpen}
                        className="bg-white border border-solid text-black py-3 px-8 rounded-md flex items-center justify-center gap-2"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        color="red"
                        className="py-3 px-8 rounded-md flex items-center justify-center gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Log out</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}