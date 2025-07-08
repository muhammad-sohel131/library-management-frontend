import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/Books";
import AddBook from "../pages/AddBook";
import BorrowSummary from "../pages/BorrowSummary";
import BorrowBook from "../pages/BorrowBook";
import BookDetails from "@/pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Books,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: 'books/:id',
        Component: BookDetails
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: 'edit-book/:id',
        Component: AddBook
      },
      {
        path: 'borrow/:bookId',
        Component: BorrowBook
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
