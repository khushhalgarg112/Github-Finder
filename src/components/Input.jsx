import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userNameState } from "../State/username";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Inputs = () => {
  const setUsername = useSetRecoilState(userNameState);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="w-1/2 bg-white border-2 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Github Username
        </h1>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="mb-4"
        />
        <Button
          type="submit"
          onClick={() => {
            navigate("/repos");
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Info
        </Button>
      </div>
    </div>
  );
};

export default Inputs;
