import React from 'react'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom';

function Header() {
    return (
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
    )
}

export default Header;
