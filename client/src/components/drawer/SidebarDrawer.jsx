import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import SmallLoader from "../loaders/SmallLoader"
import UserListItem from "../userList/UserListItem"

import axios from "axios"

const SidebarDrawer = ({ isOpen, onOpen, onClose }) => {

    const user = JSON.parse(localStorage.getItem("userInfo"));


    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState(false)
    const [searchResult, setSearchResult] = useState(null)

    const handleSearch = async () => {
        if (search.length > 0) {
            try {
                setLoading(true)

                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    }
                }

                const { data } = await axios.get(`http://localhost:8000/allUsers?search=${search}`, config)
                setLoading(false)
                setSearchResult(data)

            } catch (error) {
                console.error(error)
            }
        }
    }

    const handleCloseDrawer = () => {
        onClose()
        setSearchResult(null)
        setSearch("")
    }


    const accessChat = async (userId) => {
        try {
            setLoadingChat(true)

            const config = {

                headers: {
                    Authorization: `Bearer ${user.token}`,
                }
            }

            const {data} = await axios.post('http://localhost:8000/chat', {userId}, config)
            console.log(data)
            setLoadingChat(false)
            onClose()

        } catch (error) {
            console.error(error)
        }

    }

    const firstField = useRef()

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={handleCloseDrawer}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton className="mt-2" />
                    <DrawerHeader borderBottomWidth='1px'>
                        Create a new conversation
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Search for user</FormLabel>
                                <Input
                                    ref={firstField}
                                    id='username'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Enter name or username'
                                />
                            </Box>
                            <Flex flexDirection={'column'} width={"100%"}>
                                {
                                    loading ? (<SmallLoader />) : (
                                        searchResult?.map(user => (
                                            <UserListItem
                                                key={user._id}
                                                user={user}
                                                handleFunction={() => accessChat(user._id)}
                                            />
                                        ))
                                    )
                                }
                            </Flex>

                        </Stack>
                    </DrawerBody>

                    <DrawerFooter >
                        <Button colorScheme='green' onClick={handleSearch} isDisabled={search.length > 0 ? false : true} className="disabled:bg-green-300">
                            <MagnifyingGlassIcon className="w-5 h-5" />
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SidebarDrawer;