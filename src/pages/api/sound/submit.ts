import NextConnect from 'next-connect'
import {
    NextApiHandler,
    NextApiRequest,
    NextApiResponse,
    PageConfig,
} from 'next'
import multer, { Multer } from 'multer'
import path from 'path'
import { randomUUID } from 'crypto'

import mime from 'mime-types'

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'files'))
    },
    filename: (req, file, cb) => {
        console.log(mime.extension(file.mimetype))

        cb(
            null,
            `${randomUUID()}${file.filename}.${mime.extension(file.mimetype)}`
        )
    },
})

interface MulterFile {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    filename: string
    path: string
    size: number
}

const router = NextConnect()

const logic = async (
    req: NextApiRequest & { file: MulterFile },
    res: NextApiResponse
) => {
    const file = req!.file
    const filePath = `${file.filename}/${file.originalname}`

    res.json(filePath)
}
const handlers = multer({ storage: storage })

router.use(handlers.single('audio')).post(logic)

export default router

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
}
