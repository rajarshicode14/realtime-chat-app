import React from 'react'
import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react'

const ChatList = ({ user, handleFunction }) => {
    return (
        <>


            <Flex
                onClick={handleFunction}
                cursor={"pointer"}
                _hover={{
                    background: "#F0F2F5",
                    color: "black",
                }}
                alignItems='center'
                px={3}
                py={2}
                // mb={2}
                gap={0}
                borderRadius={"lg"}

                className='white text-[#111B21]'
            >
                <Avatar
                    mr={2}
                    size={{base: "sm", lg: 'md'}}
                    cursor={"pointer"}
                    name='Rajarshi Manna'
                    borderWidth="1px"
                    borderColor="gray.500"
                    src='https://lh3.googleusercontent.com/a/AGNmyxYEKAUn3PSqrOk4efwIA2CGlBpZRffSIynuknIQTA=s96-c'
                />
                <Box className='overflow-hidden text-left'>
                    <Text fontWeight={'semibold'} className='line-clamp-1'>Rajarshi Manna</Text>
                    <Text fontSize={'sm'} color={'gray.500'} className='line-clamp-1' >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore consequatur, modi nostrum corporis quos.</p>
                    </Text>
                </Box>

            </Flex>

            <Divider orientation='horizontal' borderWidth="1px" />

        </>
    )
}

export default ChatList