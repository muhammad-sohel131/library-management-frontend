import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/table-data";
import { useGetBooksQuery } from "@/redux/features/books/books";
import type { Book } from "@/types/Book.types";
import { Link } from "react-router";

function Books() {
  const { data, error, isLoading } = useGetBooksQuery(undefined);
 

  const books: Book[] = data?.data;

  if (error) {
    return <h2>Something is Wrong</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-between items-center">
        <h2>All Books</h2>
        <Button>
          <Link to="/add-book">Add a Book</Link>
        </Button>
      </div>
      <div>
        <DataTable data={books}></DataTable>
      </div>
    </div>
  );
}

export default Books;
