import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const UserListItem = ({ user, handleFunction }) => {
    return (
        <>


            <Flex
                onClick={handleFunction}
                cursor={"pointer"}
                _hover={{
                    background: "green",
                    color: "white",
                }}
                alignItems='center'
                px={3}
                py={2}
                mb={2}
                borderRadius={"lg"}

                className='bg-[#4CAF50] text-white'
            >
                <Avatar
                    mr={2}
                    size={"sm"}
                    cursor={"pointer"}
                    name={user.name}
                    src={user.pic}
                />
                <Box className='overflow-hidden line-clamp-2'>
                    <Text>{user.name}</Text>
                    <Text fontSize={'xs'} >
                        <b>@{user.userName}</b>
                    </Text>
                </Box>

            </Flex>

        </>
    )
}

export default UserListItem