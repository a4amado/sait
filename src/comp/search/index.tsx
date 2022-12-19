import {Button, Center, Spinner, useDisclosure} from '@chakra-ui/react';
import React from 'react'
import { useClickAway } from 'react-use'
import {AutoComplete, AutoCompleteInput, AutoCompleteList} from '@choc-ui/chakra-autocomplete';
import axios from 'axios'
import Router from 'next/router'

export default function Search() {
    const con = useDisclosure()
    const ref = React.useRef(null)
    const list = React.useState([])

    useClickAway(ref, () => {
        if (con.isOpen) con.onClose()
    })

    return (
        <form
            style={{ width: '100%', marginTop: '10px' }}
            className="relative"
            method="GET"
            action="/search"
        >
            <AutoComplete
                onSelectOption={(e) => {
                    Router.push({
                        pathname: `/sounds`,
                        query: {
                            q: e.item.value,
                        },
                    })
                }}
                inputMode="search"
                emptyState={
                    <Center className="w-full">
                        <Spinner />
                    </Center>
                }
            >
                <AutoCompleteInput
                    type="text"
                    placeholder="ورميتُ سهم الحبِّ أقصدُ قلبها * فأصاب سهمي عينها فاعورَّتِ"
                    autoComplete="off"
                    onChange={(e) => {
                        if (e.target.value === '') return

                        axios({
                            method: 'GET',
                            url: `/api/q/${e.target.value}`,
                        }).then((e) => {
                            list[1](e.data)
                        })
                    }}
                />
                <AutoCompleteList>
                    {/* {list[0].length > 0 &&
                        list[0].map((e) => {
                            return (
                                <AutoCompleteItem
                                    label={e.ar}
                                    key={e.id}
                                    value={e.id}
                                />
                            )
                        })} */}
                </AutoCompleteList>
            </AutoComplete>

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
