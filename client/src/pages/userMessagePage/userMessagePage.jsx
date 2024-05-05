import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react'

export default function UserMessagePage() {
    return (
        <div className="">
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
            <div className='text-center justify-center py-24'>
                <img className='w-80 mx-auto' src="https://i.pinimg.com/564x/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.jpg" alt="" />
                <h1 className='text-4xl font-semibold'>We send link to your email.</h1>
                <p className='w-[350px] my-2 mx-auto'>You can log into your profile using the link we sent. Please check your email.</p>
            </div>
        </div>
    )
}
