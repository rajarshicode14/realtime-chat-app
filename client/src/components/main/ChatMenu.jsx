import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

import { HeartIcon, PlusSmallIcon, EllipsisVerticalIcon, TrashIcon, ArchiveBoxIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

const ChatMenu = () => {
    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<Squares2X2Icon />}
                    size={'xs'}
                // variant='ghost'
                />
                <MenuList>
                    <MenuItem icon={<ArchiveBoxIcon />}>
                        Clear Messages
                    </MenuItem>
                    <MenuItem icon={<TrashIcon />}>
                        Delete Chat
                    </MenuItem>

                </MenuList>
            </Menu>
        </>
    )
}

export default ChatMenu