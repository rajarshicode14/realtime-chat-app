import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const Toasts = ({ user }) => {
    const toast = useToast();

    useEffect(() => {
        if (user) {
            toast({
                title: 'Logged in',
                description: `Welcome, ${user.name}!`,
                variant: 'top-accent',
                position: 'top',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }
    }, [user, toast]);

    return null; 
};

export default Toasts;
