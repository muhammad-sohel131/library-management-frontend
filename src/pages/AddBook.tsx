import { AddBookForm } from "@/components/AddBookForm"
import { useGetBookByIdQuery } from "@/redux/features/books/books"
import { useParams } from "react-router"

function AddBook() {
  const {id} = useParams()
  const {data, isLoading} = useGetBookByIdQuery(id)

  if(isLoading){
    return <h2>Loading....</h2>
  } 

  return (
    <div className="container mx-auto">
      <div>AddBook</div>
      <AddBookForm book={data?.data}></AddBookForm>
    </div>
  )
}

export default AddBook