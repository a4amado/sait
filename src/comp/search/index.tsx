import { Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useClickAway } from 'react-use'

export default function Search() {
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
            <Button
                onClick={con.onOpen}
                className="block my-3 mx-auto"
                type="submit"
            >
                إبحث
            </Button>
        </form>
    )
}
