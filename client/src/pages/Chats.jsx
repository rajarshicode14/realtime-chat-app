import React, { useEffect, useState } from 'react'

import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

import { Button, Grid, GridItem, Spinner, Toast, WrapItem, useToast } from '@chakra-ui/react'

import axios from 'axios'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Toasts from '../components/toast/Toasts'
import Loader from '../components/loaders/Loader'
import ComplexNavbar from '../components/navbars/Navbar'



const Chats = ({ user }) => {

    return (
        <>

            <Toasts user={user} />
            {
                user ?
                    <>
                        <div className='text-center'>
                            <ComplexNavbar />
                            <Grid templateColumns={{ base: '1fr', lg: '.3fr 1fr' }} gap={6}>
                                <GridItem
                                    w="100%"
                                    h="10"
                                    bg="gray.500"
                                    display={{ base: 'none', lg: 'block' }} 
                                />
                                <GridItem w="100%" h="10" bg="blue.500" />
                            </Grid>

                        </div>
                    </> :
                    <div className='flex justify-center place-items-center h-[100vh]'>
                        <Loader />
                    </div>
            }
        </>
    )
}

export default Chats