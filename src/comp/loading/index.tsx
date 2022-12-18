import type { AnimationControls, Variants } from 'framer-motion'
import { motion, useAnimationControls } from 'framer-motion'
import Router from 'next/router'
import React, { memo } from 'react'
import { useFirstMountState } from 'react-use'

import * as Chakra from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const variants: Variants = {
    active: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: 500000,
        backgroundColor: 'white',
        display: 'block',
        opacity: 1,
    },
    hide: {
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },

        opacity: 0,
    },
    out: {
        display: 'none',
    },
}

const Loading = () => {
    const isFirstMount = useFirstMountState()
    const controle: AnimationControls = useAnimationControls()

    const H = () => controle.start('hide').then(() => controle.start('out'))

    React.useEffect(() => {
        if (isFirstMount && Router.isReady) H()
    }, [])

    Router.events.on('routeChangeStart', () => controle.start('active'))
    Router.events.on('routeChangeComplete', H)

    return (
        <>
            <Chakra.Box
                as={motion.div}
                variants={variants}
                animate={controle}
                initial="active"
            >
                <Chakra.Box className="flex flex-col w-screen h-screen align-center justify-center">
                    <Flex textAlign="center" fontSize="35px">
                        sait.3adl.dev
                    </Flex>
                    <Chakra.Spinner size="lg" className="m-2" />
                </Chakra.Box>
                <Chakra.Spinner />
            </Chakra.Box>
        </>
    )
}

export default memo(Loading)
