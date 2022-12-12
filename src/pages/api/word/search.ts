import { NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const router = nextConnect()

router.get((req, res: NextApiResponse) => {
    return new Promise(() => {
        setTimeout(() => {
            res.send([{ label: Math.random(), value: Math.random() }])
        }, 5000)
    })
})

export default router
