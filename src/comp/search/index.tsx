import {
    Box,
    Button,
    Center,
    Input,
    InputGroup,
    InputLeftAddon,
    Portal,
    Spinner,
    useBoolean,
    useDisclosure,
    useToast,
    
} from '@chakra-ui/react'
import { useRouter } from 'next/router'


import isArabic from '../../server/common/is_arabic'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor
} from '@chakra-ui/react';
import React from 'react'
import { useClickAway } from 'react-use';

export default function Search(props: any) {
    const Router = useRouter()
    const [list, setList] = React.useState([]);
    const con = useDisclosure()

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        if (con.isOpen) con.onClose()
    });

    return (
        <form
            method="GET"
            action="/search"
            style={{ width: '100%', margin: '10px 0' }}
        >
            <Popover isOpen={con.isOpen} >
                <PopoverTrigger>
                <Input type="text" name="q" />

                </PopoverTrigger>
                <PopoverContent width="full" ref={ref}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>إقتراحات</PopoverHeader>
                    <PopoverBody display="grid" gridAutoColumns="1fr" gridGap="10px">
                        {
                            Array.from({ length: 5 }).map(() => {
                                return <Button key={Math.random().toString()}>{Math.random().toString()}</Button>
                            })
                        }
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Button onClick={con.onOpen} display="block" m="15px auto" > {/* type="submit"> */}
                إبحث
            </Button>
        </form>
    )
}
