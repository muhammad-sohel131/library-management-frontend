import { AddBookForm } from "@/components/AddBookForm"
import Spinner from "@/components/Spinner"
import { useGetBookByIdQuery } from "@/redux/features/books/books"
import { useParams } from "react-router"

function AddBook() {
  const {id} = useParams()
  const {data, isLoading} = useGetBookByIdQuery(id)

  if(isLoading){
    return <Spinner />
  } 

  return (
    <div className="container mx-auto px-10">
      <h2 className="my-10 font-bold text-5xl">{data?.data ? 'Update Book' : 'Add Book'}</h2>
      <AddBookForm book={data?.data}></AddBookForm>
    </div>
  )
}

export default AddBook