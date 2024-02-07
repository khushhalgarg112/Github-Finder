// Info.jsx
const Info = ({ userData }) => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="w-3/5 bg-white border-2 p-8 rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-1/6">
            <img
              src={userData.avatar_url}
              alt="profile"
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3 px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              {userData.name}
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              <b>Bio:- </b>
              {userData.bio}
            </p>
            <div className="flex justify-between">
              <p className="text-gray-700">Followers: {userData.followers}</p>
              <p className="text-gray-700">Following: {userData.following}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
