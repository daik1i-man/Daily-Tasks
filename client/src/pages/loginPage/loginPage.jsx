import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [userEmail, setUserEmail] = useState('');
    const [userEmailError, setUserEmailError] = useState('');
    const [checkDatas, setCheckDatas] = useState(false);

    const userEmailHandler = () => {
        if (userEmail === '') {
            setUserEmailError("Field input!")
        } else {
            setUserEmailError('');
        }
    }

    const InputsHandler = () => {
        if (userEmail !== '') {
            setUserEmailError('');
        }
    }

    useEffect(() => {
        if (userEmail !== '' && userEmail.endsWith("@gmail.com")) {
            setUserEmailError('');
        }
        if (userEmail !== '' && userEmail.endsWith("@gmail.com")) {
            setCheckDatas(true);
        }
        else {
            setCheckDatas(false);
        }
    })

    const SetData = () => {
        setUserEmail('');
        setOpenModal(true);
    }

    return (
        <section className="">
            <div
                onClick={InputsHandler}
                className="mx-auto items-center max-w-[26rem] my-36 border border-solid rounded-md py-4"
            >
                <div className="p-1 px-3">
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Sign in
                    </Typography>
                    <Typography className="mb-16 text-gray-600 font-normal text-[14px]">
                        Nice to meet you! Enter your details to login.
                    </Typography>
                </div>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-14">
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
                    {!checkDatas ? (
                        <Button disabled color="gray" size="lg" className="mt-6" fullWidth>sign in</Button>
                    ) : (
                        <Button color="gray" size="lg" className="mt-6" fullWidth onClick={SetData}>sign in</Button>
                    )}
                    <Typography
                        variant="small"
                        color="gray"
                        className="mt-4 text-center font-normal"
                    >

                        Not registered ?{" "}
                        <Link to='/register'>
                            Create an Account
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}