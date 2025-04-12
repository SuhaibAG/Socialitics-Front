import { useState } from "react";
import { useUser } from "../../../userhandlers/UserProvider";
import Dashboard from "../Dashboard";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";

const Settings = () => {
    const { user } = useUser(false);
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState(user?.bio || "No bio available");

    const handleSave = () => {
        console.log("Updated Bio:", bio);
        // just need to update the bio in the database

        setIsEditing(false);
    };

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
                                    className="bg-blue-400 text-black px-4 py-2 rounded-md mr-2"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-red-400 text-black-700 px-4 py-2 rounded-md"
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
                        className="mt-4 bg-blue-400 text-black px-2 py-2 rounded-md"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Bio
                    </button>
                )}
            </div>
        </div>
    );
};

export default Settings;