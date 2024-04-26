import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { BadgeCheck } from 'lucide-react'
import { ModalContext } from "../../Contexts/ActionsContext";
import { Link, useNavigate } from "react-router-dom";

export default function ModalComponent() {
    const { openModal, setOpenModal } = React.useContext(ModalContext);
    const [navigate, setNavigate] = useState(false);
    let Navigate = useNavigate();

    const closeHandler = () => {
        setOpenModal(false);
        setNavigate(true);
    }

    useEffect(() => {
        if (navigate) {
            Navigate("/user/message");
        }
    })
    return (
        <div className="relative" onClick={closeHandler}>
            <Dialog open={openModal} className="justify-center h-64 absolute">
                <div className="justify-center flex space-x-3 my-4 mx-auto">
                    <BadgeCheck className="text-green-500" />
                    <h1 className="text-3xl">Registration Succesfully!</h1>
                </div>
                <div className="mt-8 text-center">
                    <p>We send link to your email. Please check your email.</p>
                    <p>You can log into your profile using the link we sent. Please check your email.</p>
                </div>
                <div className="absolute bottom-5 left-1/3">
                    <Link to='/user/message'>
                        <Button
                            className="w-44"
                            onClick={() => setOpenModal(false)}
                        >
                            Ok, Got it
                        </Button>
                    </Link>
                </div>
            </Dialog>
        </div>
    );
}