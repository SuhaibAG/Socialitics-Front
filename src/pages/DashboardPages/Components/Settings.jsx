import { useState } from "react";
import { UserProvider, useUser } from "../../../userhandlers/UserProvider";
import Dashboard from "../Dashboard";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { user, logout } = useUser(false);
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState(user?.bio || "No bio available");

    const handleSave = () => {
        console.log("Updated Bio:", bio);
        // just need to update the bio in the database

        setIsEditing(false);
    };

    const navigate =  useNavigate()
    const handleLogout = () =>{
        logout()
        navigate("/login")        
    }
 
    return (
        <div className="flex flex-col items-center py-10  ">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">User Information</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Name: <span className="font-normal">{user?.name || "No name available"}</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Email: <span className="font-normal">{user?.email || "No email available"}</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Bio:
                    {isEditing ? (
                        <div className="mt-2">
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                            <div className="flex justify-end mt-2">
                                <button
                                    className="bg-blue-400 text-black px-4  rounded-md mr-2 border-2 border-solid"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-red-400 text-black px-4 rounded-md border-2 border-solid"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <span className="font-normal ml-2">{bio}</span>
                    )}
                </h3>
                {!isEditing && (
                    <button
                        className=" flex mt-4 bg-inherit text-black px-2 py-1 rounded-lg border-black border-2 border-solid justify-center items-center"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Bio
                    </button>
                )}
                <div className="flex w-full justify-end">
                <button
                        className="flex mt-4 bg-inherit text-black px-2 py-1 rounded-lg border-black border-2 border-solid justify-center items-center bg-red-400"
                        onClick={() => handleLogout()}
                    >
                        Sign out
                </button>

                </div>
                
            </div>
            
        </div>
    );
};

export default Settings;