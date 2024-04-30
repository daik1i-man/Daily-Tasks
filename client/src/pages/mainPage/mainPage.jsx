import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

export default function MainPage() {
    return (
        <div className='w-full items-center'>
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
            <div className="max-w-7xl items-center mx-auto mt-56">
                <div className="text-center">
                    <h1 className='text-8xl mx-auto'>
                        Daily Tasks
                    </h1>
                </div>
                <div className="w-[550px] my-4 text-center mx-auto">
                    <p>After a stroke, it can take time to figure out how to do the tasks that make up daily life. Here are some tips. Find useful services and connect with others living with heart disease or stroke.</p>
                    <Link to='/register'>
                        <Button className='my-4'>Get started</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
