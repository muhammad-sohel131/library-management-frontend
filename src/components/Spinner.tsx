import { ClipLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
        <ClipLoader
        color=''
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner