import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Main/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Main/firebaseconfig";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = user?.photoURL;

    if (newPhoto) {
      try {
        const formData = new FormData();
        formData.append("image", newPhoto);
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=32d886aa9e324d1a97049283e3514259",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imageUrl = response.data.data.display_url;
      } catch (error) {
        setLoading(false);
        Toast.fire({ icon: "error", title: "Image upload failed." });
        return;
      }
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: newName || user?.displayName,
        photoURL: imageUrl,
      });

      Toast.fire({
        icon: "success",
        title: "Profile updated successfully!",
      });
    } catch (error) {
      Toast.fire({ icon: "error", title: "Update failed!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto justify-center items-center flex dark:bg-gray-900 pt-28 pb-28">
      <div className="max-w-md mx-auto items-center justify-center p-8 space-y-6 bg-gray-50 dark:bg-gray-950 dark:text-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center">Update Profile</h1>

        {/* Current Profile Info */}
        <div className="text-center mb-4">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="mx-auto w-32 h-32 rounded-full"
            />
          )}
          <p className="mt-2 text-xl">{user?.displayName}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-gray-600">New Name</label>
            <input
              type="text"
              placeholder="Enter new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-gray-300 border-2 bg-gray-50 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-600">New Photo</label>
            <input
              type="file"
              onChange={(e) => setNewPhoto(e.target.files[0])}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600 duration-200"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
