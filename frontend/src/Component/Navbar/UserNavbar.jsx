import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SummaryApi from "../../common/Apis";

const UserNavbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("token");

    // Show success toast
    toast.success("Logged out successfully!", {
      position: "top-right",
    });
    console.log("redirecting to the page");
    // Redirect to login or home page
    navigate("/login"); // Adjust the route as needed
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const fetchUserData = async () => {
          try {
            const response = await fetch(SummaryApi.profile.url, {
              method: SummaryApi.profile.method,
              headers: {
                Authorization: token,
              },
            });

            if (!response.ok) {
              const errorText = await response.text(); // Get the response as text (likely HTML)
              throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const userData = await response.json();
            setUser(userData);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };

        fetchUserData();
      } catch (error) {
        console.error("Invalid token", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="justify-between bg-gray-300 flex">
        <div className="flex items-center">
          <img
            src="/images/YEL_LOGO_Nav.png"
            alt="YEL Seva Logo"
            className="w-16 h-auto object-contain ml-4" // Adjusted the image size
          />

          <p className="m-5 font-bold">YEL-SEVA</p>

          <ul className="pl-10 pr-10 grid md:grid-cols-3 ml-5 grid-cols-4 lg:grid-cols-3">
            <li className="hover:bg-blue-400 m-2 hover:text-black flex items-center justify-center p-4 font-normal rounded-md text-xs h-14">
              <span className="m-1">
                <IoMdHome />
              </span>
              Home
            </li>

            <li className="hover:bg-blue-400 m-2 hover:text-black flex items-center justify-center p-4 font-normal rounded-md text-xs h-14">
              <span className="m-1">
                <FaUser />
              </span>
              {user.name}
            </li>

            {user.role === "normal" ? (
              <Link to="/userdashboard">
                <li className="hover:bg-blue-400 m-2 hover:text-black flex items-center justify-center p-4 font-normal rounded-md text-xs h-14">
                  <span className="m-1">
                    <FaTachometerAlt />
                  </span>
                  DASHBOARD
                </li>
              </Link>
            ) : user.role === "admin" ? (
              <Link to="/admindashboard">
                <li className="hover:bg-blue-400 m-2 hover:text-black flex items-center justify-center p-4 font-normal rounded-md text-xs h-14">
                  <span className="m-1">
                    <FaTachometerAlt />
                  </span>{" "}
                  Admin DASHBOARD
                </li>
              </Link>
            ) : user.role === "superadmin" ? (
              <Link to="/superadmin">
                <li className="hover:bg-blue-400 m-2 hover:text-black flex items-center justify-center p-4 font-normal rounded-md text-xs h-14">
                  <span className="m-1">
                    <FaTachometerAlt />
                  </span>{" "}
                  SuperAdmin
                </li>
              </Link>
            ) : null}
          </ul>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-gray-500 mr-10 h-10 mt-4 text-white py-2 px-4 rounded hover:bg-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
