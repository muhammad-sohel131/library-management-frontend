import { useGetBooksQuery } from "@/redux/features/books/books";

function Books() {
  const { data, error, isLoading } = useGetBooksQuery(undefined);
  console.log(data);
  return (
    <>
      <div>Books</div>
      <div></div>
    </>
  );
}

export default Books;
