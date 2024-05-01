import express from "express";
import { createuser, getUser } from "../Controllers/Controller.mjs";
const router = express.Router();

router.get('/',getUser);

router.post('/createuser',createuser)

export default router;
