import { Box, Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useClickAway } from 'react-use'
import type { Node } from 'doublie'
import { Circular } from 'doublie'
import axios from 'axios'

interface ResultItem {
    ar: string
    en: string
    id: string
}

export default function Search() {
    const con = useDisclosure()
    const list = React.useState<Circular<ResultItem> | undefined>()
    const activeItem = React.useState<Node | undefined>()
    const ref = React.useRef(null)

    useClickAway(ref, () => {
        if (con.isOpen) con.onClose()
    })

    async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            list[1](undefined)
            const { data } = await axios({
                method: 'GET',
                url: `/api/q/${e.target.value}`,
            })
            ListToCircular(data)
        } catch {}
    }

    function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return true
        e.preventDefault() // Preserve cursore posistion
        if (e.key === 'ArrowDown') return nextItem()
        if (e.key === 'ArrowUp') return previousITem()
    }

    function nextItem(): void {
        if (!activeItem || !activeItem[0]?.next) return
        activeItem[1](activeItem[0]?.next)
    }

    function previousITem(): void {
        if (!activeItem || !activeItem[0]?.prev) return
        activeItem[1](activeItem[0]?.prev)
    }

    function ListToCircular(e: ResultItem[]) {
        const CircularList = new Circular()
        for (const value of e) {
            CircularList.append(value)
        }
        if (!CircularList.head) return
        activeItem[1](CircularList.head)
        list[1](CircularList)
    }

    return (
        <form
            method="GET"
            action="/search"
            style={{ width: '100%', marginTop: '10px' }}
            className="relative overflow-hidden	"
        >
            <div className="relative w-full flex flex-row">
                <Input
                    type="text"
                    name="q"
                    placeholder="ورميتُ سهم الحبِّ أقصدُ قلبها * فأصاب سهمي عينها فاعورَّتِ"
                    onChange={onChange}
                    onKeyDown={onKeyDownHandler}
                    autoComplete="off"
                />

                <Button
                    onClick={con.onOpen}
                    className="block mx-auto"
                    type="submit"
                >
                    إبحث
                </Button>

                <Box className="w-full top-full absolute flex flex-col gap-1 p-1">
                    {!list[0]?.isEmpty() &&
                        activeItem &&
                        list[0]
                            ?.toArray()
                            .map((e: ResultItem) => (
                                <ListItem
                                    item={e}
                                    activeItem={activeItem[0]}
                                    key={e.id}
                                />
                            ))}
                </Box>
            </div>
        </form>
    )
}

function ListItem({
    item,
    activeItem,
}: {
    item: ResultItem
    activeItem: Node<ResultItem> | undefined
}) {
    const isActive = item.id === activeItem?.value.id

    if (isActive)
        return (
            <Box ss="s" bgColor="Highlight" as={Button}>
                {item.ar} - {item.en}
            </Box>
        )

    return (
        <Box as={Button}>
            {item.ar} - {item.en}
        </Box>
    )
}
