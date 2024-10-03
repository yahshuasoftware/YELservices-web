
import {  FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
const UserNavbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
 

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token test"    + token)
    if (token) {
      try {
        // const decoded = jwtDecode(token);
        // setUser(decoded);
        
        // Fetch user profile data from the API
        const fetchUserData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/profile', {
              method: 'GET',
              headers: {
                'Authorization': token,
              },
            });

            console.log("ttttt" + response)
  
            // Check if the response is successful
            if (!response.ok) {
              const errorText = await response.text(); // Get the response as text (likely HTML)
              throw new Error(`Error ${response.status}: ${errorText}`);
            }
  
            // Parse the response as JSON
            const userData = await response.json();
            setUser(userData);
            console.log("user data " + userData)
          } catch (error) {
            console.error("Error fetching user profile:", error.message);
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
        <div className="justify-between"> 
          <ul className="pl-10 pr-10 grid md:grid-cols-8 grid-cols-4 lg:grid-cols-8 bg-gray-300">
            <li className=" hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs"><span className="m-1"><IoMdHome/></span>Home</li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs" ><span className="m-1"><FaPhoneAlt/></span>CONTACT US</li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-bold text-xs" ><span className="m-1"><FaUser/> </span>{user.name} </li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs" ><span className="m-1"><FaTachometerAlt/></span>DASHBOARD</li>
          </ul>
        </div>
      </div>
    );
  };

  export default UserNavbar;