import React, { useContext, useEffect, useState } from "react";
import { Typography, Button, Alert } from "@material-tailwind/react";
import ModalComponent from "../../components/modalComponent/modalComponent";
import { ModalContext } from "../../provider/provider";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [userEmailError, setUserEmailError] = useState('');
    const [checkDatas, setCheckDatas] = useState(false);
    const { setOpenModal } = useContext(ModalContext);

    const userNameHandler = () => {
        if (userName === '') {
            setUserNameError("Field input!");
        } else {
            setUserNameError('');
        }
    }
    const userEmailHandler = () => {
        if (userEmail === '') {
            setUserEmailError("Field input!")
        } else {
            setUserEmailError('');
        }
    }

    const InputsHandler = () => {
        if (userName !== '') {
            setUserNameError('');
        }
        if (userEmail !== '') {
            setUserEmailError('');
        }
    }

    useEffect(() => {
        if (userName !== '') {
            setUserNameError('');
        }
        if (userEmail !== '' && userEmail.endsWith("@gmail.com")) {
            setUserEmailError('');
        }
        if (userName !== '' && userEmail !== '' && userEmail.endsWith("@gmail.com")) {
            setCheckDatas(true);
        }
        else {
            setCheckDatas(false);
        }
    }, [userName, userEmail])

    const SetData = () => {
        setUserName('');
        setUserEmail('');
        setOpenModal(true);
    }

    return (
        <section className="">
            <div
                onClick={InputsHandler}
                className="mx-auto items-center max-w-[27rem] my-16 border border-solid rounded-md py-4"
            >
                <div className="p-1 px-3">
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Sign up
                    </Typography>
                    <Typography className="mb-16 text-gray-600 font-normal text-[14px]">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                </div>
                <form className="mx-auto max-w-[24rem] text-left" onSubmit={SetData}>
                    <div className="mb-10">
                        <label>
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Name
                            </Typography>
                        </label>
                        <input
                            type="text"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 border border-blue-gray-100 border-solid rounded-md h-[42px] px-3"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onClick={userNameHandler}
                        />
                        <p className="text-red-500 p-2">{userNameError}</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <input
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            onClick={userEmailHandler}
                            type="email"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 border border-blue-gray-100 border-solid rounded-md h-[42px] px-3"
                        />
                        <p className="text-red-500 p-2">{userEmailError}</p>
                    </div>
                    <ModalComponent />
                    {!checkDatas ? (
                        <Button disabled color="gray" size="lg" className="mt-6" fullWidth>sign up</Button>
                    ) : (
                        <Button color="gray" size="lg" className="mt-6" fullWidth onClick={SetData}>sign up</Button>
                    )}
                    <Typography
                        variant="small"
                        color="gray"
                        className="mt-4 text-center font-normal"
                    >

                        Already have an account ?{" "}
                        <Link to='/login'>
                            Sign in
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}