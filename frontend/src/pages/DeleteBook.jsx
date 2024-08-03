import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        alert("Error deleting book");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col p-8 mx-auto items-center border-2 border-sky-400 rounded-xl w-[600px]">
          <h3 className="text-2xl text-center">Confirm Delete</h3>
          <button
            className="p-4 bg-red-600 m-7 w-full"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
