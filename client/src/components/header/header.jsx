import React, { useContext } from 'react'
import { Avatar, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom';
import { UserAuthContext } from '../../Contexts/UserAuthContext';

function Header() {
    const { user, setUser } = useContext(UserAuthContext);
    return (
        <header className='w-full h-20'>
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center h-20 px-4">
                    <Link to={`${user ? '/board/daily' : '/'}`}>
                        <div>
                            <h1 className='text-3xl font-semibold'>🎯 Daily Tasks</h1>
                        </div>
                    </Link>
                    {user ? (<div>
                        <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>) : <div>
                        <Link to='/login'>
                            <Button className='w-36'>Sign-in</Button>
                        </Link>
                    </div>}
                </div>
            </div>
        </header>
    )
}

export default Header;
