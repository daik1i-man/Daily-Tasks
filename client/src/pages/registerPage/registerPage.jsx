import { useContext, useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import ModalComponent from "../../components/modalComponent/modalComponent";
import { ModalContext } from "../../Contexts/ActionsContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [userEmailError, setUserEmailError] = useState('');
    const [checkDatas, setCheckDatas] = useState(false);
    const { setOpenModal } = useContext(ModalContext);
    const [loading, setLoading] = useState(false);

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
        if (userName !== '' && userName.length > 5) {
            setUserNameError('');
        }
        if (userEmail !== '' && userEmail.endsWith("@gmail.com")) {
            setUserEmailError('');
        }
        if (userName !== '' && userEmail !== '') {
            setCheckDatas(true);
        }
        else {
            setCheckDatas(false);
        }
    }, [userName, userEmail])

    const userData = {
        username: userName,
        email: userEmail,
    }

    const SetData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/user/signup", userData)
                .then(() => {
                    setOpenModal(true);
                    console.log(response);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="">
            <header className='w-full h-20'>
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between items-center h-20 px-4">
                        <Link to='/'>
                            <div>
                                <h1 className='text-3xl font-semibold'>🎯 Daily Tasks</h1>
                            </div>
                        </Link>
                        <div>
                            <Link to='/login'>
                                <Button className='w-36'>Sign-in</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div
                onClick={InputsHandler}
                className="mx-auto items-center max-w-[27rem] my-24 border border-solid rounded-md py-4"
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