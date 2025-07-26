import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center text-gray-800">
      <div className="flex h-1/2 w-1/2 bg-purple-200 flex-col items-center justify-center rounded-md">
        <p className="text-3xl mb-5">Sorry this page is not available</p>
        <button
          className="bg-purple-700 px-3 py-2 rounded-xl text-md hover:bg-purple-500 hover:text-stone-200"
          onClick={() => navigate(-1)}
        >
          Back{" "}
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
