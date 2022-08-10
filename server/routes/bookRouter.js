import express from "express";
import {
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
  createBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.route("/").post(createBook).get(getAllBooks);
router.route("/:id").get(getOneBook).patch(updateBook).delete(deleteBook);

export default router;
