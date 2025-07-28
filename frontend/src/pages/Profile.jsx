const Profile = () => {
  const user = {
    name: "Akhonzada",
    email: "akhon@shop.com",
    address: "Main Street, Gilgit",
    phone: "0312-0000000",
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="bg-white p-6 shadow rounded space-y-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
