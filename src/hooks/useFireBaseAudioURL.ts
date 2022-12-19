import { storage } from './../firebase/init'
import { getDownloadURL, ref } from 'firebase/storage'
import React from 'react'

import { useDisclosure } from '@chakra-ui/react'

export default function useFireBaseAudioURL(ctx: { path: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isError, setError] = React.useState(false)
    const [url, setURL] = React.useState('false')
    async function getURL(ctx: { path: string }) {
        try {
            const url = await getDownloadURL(ref(storage, ctx.path))

            setURL(url)
            onClose()
        } catch {
            setError(true)
        }
    }

    React.useEffect(() => {
        onOpen()
        async function getURL() {
            await getURL()
        }
        getURL()
    }, [])

    return {
        isLoading: isOpen,
        isError,
        url,
    }
}
