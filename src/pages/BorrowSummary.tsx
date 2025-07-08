import Spinner from "@/components/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowQuery } from "@/redux/features/borrow/borrow";
import type { summary } from "@/types/summary.type";

function BorrowSummary() {
  const { data, isLoading } = useGetBorrowQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  const borrows = data?.data

  return (
    <div className="container mx-auto my-20 px-10">
      <Table>
        <TableCaption>List of books that have been borrowed</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrows.length > 0 ? (
            borrows.map((borrow: summary) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">{borrow.book.title}</TableCell>
                  <TableCell>{borrow.book.isbn}</TableCell>
                  <TableCell>{borrow.totalQuantity}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <h2>ok</h2>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default BorrowSummary;
