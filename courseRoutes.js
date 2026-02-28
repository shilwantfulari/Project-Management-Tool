
import express from "express";
import {createCourse,getCourses,getCourseById} from "../controllers/courseController.js";
import {protect} from "../middleware/auth.js";
const router=express.Router();
router.post("/",protect,createCourse);
router.get("/",getCourses);
router.get("/:id",getCourseById);
export default router;
