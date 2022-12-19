import { Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useClickAway } from 'react-use'


export default function Search() {
    const con = useDisclosure()
    const ref = React.useRef(null)

    useClickAway(ref, () => {
        if (con.isOpen) con.onClose()
    })


    return (
        <form
            style={{ width: '100%', marginTop: '10px' }}
            className="relative"
            method='GET'
            action='/search'
        >
            
                <Input
                    type="text"
                    name="q"
                    placeholder="ورميتُ سهم الحبِّ أقصدُ قلبها * فأصاب سهمي عينها فاعورَّتِ"
                    autoComplete="off"
                />

                <Button
                    onClick={con.onOpen}
                    className="block mx-auto"
                    type="submit"
                >
                    إبحث
                </Button>

                
        </form>
    )
}
