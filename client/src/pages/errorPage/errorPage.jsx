import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

export default function ErrorPage() {
    return (
        <>
            <main className="grid min-h-full justify-center place-items-center items-center h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center mx-auto space-y-10">
                    <p className="text-xl font-semibold">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-8xl">Page not found</h1>
                    <p className="mt-6 text-base w-9/12 text-center mx-auto text-gray-600">Sorry, we couldn’t find the page you’re looking for.Don't worry, our team is already on it.Please try refreshing the page or come back later.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to='/'
                        >
                            <Button className='rounded-md py-3 px-8 normal-case font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
                                Go back home
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
