// Repo.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userNameState } from "../State/username";

const Repo = () => {
  const [userRepo, setUserRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);

  const username = useRecoilValue(userNameState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setUserRepo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [username]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = userRepo.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-3 mx-3 gap-4">
          {currentRepos.map((repo) => (
            <div key={repo.id} className="border p-4 rounded">
              <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(userRepo.length / reposPerPage) },
            (_, i) => (
              <button
                key={i}
                className={`mx-1 px-4 py-2 rounded ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Repo;
