import { Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <>
            <Spinner style={{ width: '150px', height: '150px'}} color='green.500' speed='.2s' thickness='20px' />
        </>
    )
}

export default Loader