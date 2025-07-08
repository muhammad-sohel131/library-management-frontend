import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useDeleteBookMutation } from "@/redux/features/books/books";
import { toast } from "sonner";
import { useNavigate } from "react-router";

function BookActionMenu({ id }: { id: string }) {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate()

  const handleEdit = (id: string) => {
    navigate(`/edit-book/${id}`)
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      toast.success("Book is Deleted!");
    } catch (err) {
      console.log(err);
      toast.error("Something Wrong. Please Try Again Later!");
    }
  };

  const handleBorrow = (id: string) => {
    navigate(`/borrow/${id}`)
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleEdit(id)}>
          Edit Book
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(id)}>
          Delete Book
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleBorrow(id)}>
          Borrow Book
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BookActionMenu;
