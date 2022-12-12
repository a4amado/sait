import NextConnect from "next-connect";
import { NextApiHandler } from "next";

const router = NextConnect();


const logic: NextApiHandler = async (req, res) => {
    res.json({
        sounds: [0,1,2,3,4,5,6,7,8,9].map((e) => e.toString())
    })
}

router.get(logic)
export default router;