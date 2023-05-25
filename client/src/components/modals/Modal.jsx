import { Avatar, Button, Chip, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

const Modal = ({ openModal, setOpenModal, user }) => {

    const [width, setWidth] = useState(window.innerWidth)


    const handleOpen = () => setOpenModal(!openModal);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    return (
        <>  {
            width <= 768 ?
                <div className=''>
                    <Dialog
                        open={openModal}
                        size="xl"
                        handler={handleOpen}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}

                        className='rounded-xl p-4 bg-gray-200'
                    >
                        <DialogHeader>
                            <Avatar src={user.pic} alt="avatar" size="xxl" variant="rounded" className=" mx-auto bg-gradient-to-t from-red-400 via-orange-800 to-pink-900 p-1" />
                        </DialogHeader>
                        <DialogBody>
                            <div className='mx-auto -mt-5 mb-5 bg-[#00ED64] text-[#001E2B] font-semibold w-fit  px-1.5 rounded-xl'>
                                @{user.userName}
                            </div>
                            <div className='text-center rounded-md bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900  text-white'>
                                {user.name}
                            </div>
                            <div className='text-center mt-4 text-[#001E2B]'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus harum laudantium aperiam eaque, pariatur corporis ad incidunt hic saepe doloremque.
                            </div>
                        </DialogBody>
                    </Dialog>
                </div>
                :
                <div className=''>
                    <Dialog
                        open={openModal}
                        size="md"
                        handler={handleOpen}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}

                        className='rounded-xl p-4 bg-gray-200'
                    >
                        <DialogHeader>
                            <Avatar src={user.pic} alt="avatar" size="xxl" variant="rounded" className=" mx-auto bg-gradient-to-t from-red-400 via-orange-800 to-pink-900 p-1" />
                        </DialogHeader>
                        <DialogBody>
                            <div className='mx-auto -mt-5 mb-5 bg-[#00ED64] text-[#001E2B] font-semibold w-fit  px-1.5 rounded-xl'>
                                @{user.userName}
                            </div>
                            <div className='text-center rounded-md bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900  text-white'>
                                {user.name}
                            </div>
                            <div className='text-center mt-4 text-[#001E2B]'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus harum laudantium aperiam eaque, pariatur corporis ad incidunt hic saepe doloremque.
                            </div>
                        </DialogBody>
                    </Dialog>
                </div>
        }

        </>
    )
}

export default Modal