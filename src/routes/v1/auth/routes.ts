import e, { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'backend : auth route is live.' })
})

router.post("/login")


export default router;