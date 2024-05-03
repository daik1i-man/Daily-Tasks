import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { openAddSpecialDayModalContext } from '../../Contexts/ActionsContext';

export default function AddSpecialDayModal() {
    const { openAddSpecialDayModal, setOpenAddSpecialDayModal } = useContext(openAddSpecialDayModalContext);
    const [date, setDate] = useState({});

    const DateHandler = (e) => {
        e.preventDefault();
        if (e.target.value) {
            setDate(e.target.value);
        }
        else {
            console.log("Error!");
        }
    }

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={openAddSpecialDayModal} as={Fragment} className='font-sans'>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenAddSpecialDayModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <h1 className='text-xl'>Add special day</h1>
                                    <p className='text-xs mt-1 mb-4'>Pick one day and write down your task</p>
                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <label className='text-xs' htmlFor="date">Choose a day</label>
                                            <input
                                                placeholder=''
                                                className='w-full mx-auto border p-1 px-2 rounded-md border-black'
                                                type="date"
                                                name='date'
                                                onChange={(e) => DateHandler(e)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <p className='text-xs'>Write your task</p>
                                            <textarea
                                                className='w-full resize-none h-28 border border-black rounded-md p-2 px-2 text-xs'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-gray-900 text-xs px-7 py-2.5 uppercase text-white shadow-sm hover:bg-gray-800 sm:ml-3 sm:w-auto"
                                    >
                                        Add task
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white py-2 px-7 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpenAddSpecialDayModal(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
