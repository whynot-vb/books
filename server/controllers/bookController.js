import Book from "../models/bookModel.js";
import { BadRequestError, NotFoundError } from "../errors.js";

export const createBook = async (req, res) => {
  let { title, publishDate, issn, category } = req.body;

  if (!title || !publishDate || !issn || !category) {
    throw new BadRequestError("Please provide all the required fields");
  }

  const book = await Book.create(req.body);

  res.status(201).json({ book });
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, publishDate, issn, category } = req.body;

  if (!title || !publishDate || !issn || !category) {
    throw new BadRequestError("Please provide all the required values");
  }

  const book = await Book.findOne({ _id: id });

  if (!book) {
    throw new NotFoundError(`No book with ID: ${id} was found`);
  }

  const updatedBook = await Book.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updatedBook });
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const bookToDelete = await Book.findOne({ _id: id });

  if (!bookToDelete) {
    throw new NotFoundError(`Book with ID: ${id} not found`);
  }

  await bookToDelete.remove();
  res.status(200).json({ msg: "Book deleted successfully" });
};

export const getOneBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne({ _id: id });
  if (!book) {
    throw new NotFoundError(`Book with ID: ${id} not found`);
  }

  res.status(200).json({ book });
};

export const getAllBooks = async (req, res) => {
  let results = Book.find();

  const books = await results;
  const totalBooks = await Book.countDocuments();

  res.status(200).json({ books, totalBooks });
};
