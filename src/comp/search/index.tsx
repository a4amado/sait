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
    PopoverAnchor,
} from '@chakra-ui/react'
import React from 'react'
import { useClickAway } from 'react-use'
import useAxios from '../../hooks/useAxios'

export default function Search(props: any) {
    const Router = useRouter()
    const [list, setList] = React.useState([])

    const con = useDisclosure()
    // const q = useAxios({ }) Config on production

    const ref = React.useRef(null)
    useClickAway(ref, () => {
        if (con.isOpen) con.onClose()
    })

    return (
        <form
            method="GET"
            action="/search"
            style={{ width: '100%', margin: '10px 0' }}
        >
            <Input
                type="text"
                name="q"
                placeholder="ورميتُ سهم الحبِّ أقصدُ قلبها ‏ فأصاب سهمي عينها فاعورَّتِ"
            />
            <Button onClick={con.onOpen} display="block" m="15px auto">
                {' '}
                {/* type="submit"> */}
                إبحث
            </Button>
        </form>
    )
}
