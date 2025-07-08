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
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog"; 

function BookActionMenu({ id }: { id: string }) {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      toast.success("Book is Deleted!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again later!");
    }
  };

  const handleBorrow = (id: string) => {
    navigate(`/borrow/${id}`);
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
        <DropdownMenuItem onClick={() => navigate(`/books/${id}`)}>
          View Book
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleEdit(id)}>
          Edit Book
        </DropdownMenuItem>

        {/* Delete with AlertDialog */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Delete Book</DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to delete this book?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Confirm Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <DropdownMenuItem onClick={() => handleBorrow(id)}>
          Borrow Book
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BookActionMenu;
