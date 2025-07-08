import Spinner from "@/components/Spinner";
import { useGetBookByIdQuery } from "@/redux/features/books/books";
import { useParams } from "react-router";

interface BookDetailsProps {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id);
  if (isLoading) {
    return <Spinner />
  }

  const book: BookDetailsProps = data?.data;
  console.log(book);
  return (
    <div className="container mx-auto px-10">
      <div className="bg-white shadow-md rounded-md p-6 mt-10">
        <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Author:</span> {book.author}
        </p>
        <p>
          <span className="font-medium">Genre:</span> {book.genre}
        </p>
        <p>
          <span className="font-medium">ISBN:</span> {book.isbn}
        </p>
        <p>
          <span className="font-medium">Description:</span> {book.description}
        </p>
        <p>
          <span className="font-medium">Copies:</span> {book.copies}
        </p>
        <p>
          <span className="font-medium">Available:</span>{" "}
          {book.available ? (
            <span className="text-green-600 font-semibold">Yes</span>
          ) : (
            <span className="text-red-600 font-semibold">No</span>
          )}
        </p>
      </div>
      </div>
    </div>
  );
};

export default BookDetails;
