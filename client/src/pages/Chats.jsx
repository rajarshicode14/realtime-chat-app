import React, { useEffect, useState } from 'react'

import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

import { Button, Grid, GridItem, Input, InputGroup, InputLeftElement, Spinner, Toast, WrapItem, useToast } from '@chakra-ui/react'

import axios from 'axios'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Toasts from '../components/toast/Toasts'
import Loader from '../components/loaders/Loader'
import ComplexNavbar from '../components/navbars/Navbar'
import ChatList from '../components/main/ChatList'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { SearchOutlined } from '@ant-design/icons'
import ChatSection from '../components/main/ChatSection'





const Chats = ({ user }) => {

    return (
        <>

            <Toasts user={user} />
            {
                user ?
                    <>
                        <div className='text-center'>
                            <ComplexNavbar />
                            <Grid templateColumns={{ base: '1fr', lg: '.4fr 1fr' }}>
                                <GridItem
                                    w="100%"
                                    h={'88vh'}
                                    mt='4px'
                                    bg="white"
                                    px={'12px'}
                                    my={'10px'}
                                    display={{ base: 'none', lg: 'flex' }}
                                    flexDirection="column"
                                    gap={'2'}
                                    overflowY="scroll"
                                    overflowX={'hidden'}
                                    // mb={'-20px'}
                                // css={{
                                //     '&::-webkit-scrollbar': {
                                //         width: '0.5em',
                                //     },
                                //     '&::-webkit-scrollbar-track': {
                                //         boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
                                //         borderRadius: '10px',
                                //     },
                                //     '&::-webkit-scrollbar-thumb': {
                                //         backgroundColor: 'rgba(0,0,0,0.4)',
                                //         borderRadius: '10px',
                                //     },
                                // }}
                                >
                                    <InputGroup mb={'10px'}>
                                        <InputLeftElement pointerEvents='none'
                                        >

                                            <SearchOutlined />
                                        </InputLeftElement>
                                        <Input type='text' placeholder='Search your chat' variant='filled' _placeholder={{ opacity: 1, color: 'black' }} />
                                    </InputGroup>

                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    <ChatList />
                                    
                                </GridItem>
                                <GridItem w="100%" h="88vh"  position={'relative'} >
                                    <ChatSection />
                                </GridItem>
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