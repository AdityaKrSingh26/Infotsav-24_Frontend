import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function UserProfile() {
    const [showDialog, setShowDialog] = useState(false);
    // const navigate = useNavigate();

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        console.log("lpgegd out")
        window.location.reload();
    };

    const referralId = localStorage.getItem('referralId');


    return (
        <div className="relative">
            <div
                onClick={toggleDialog}
                className="cursor-pointer h-[50px] w-[50px] rounded-full flex justify-center items-center bg-gray-200"
            >
                <FaUserCircle size={40} />
            </div>
            {showDialog && (
                <div className="absolute right-0 top-full mt-2 w-[250px] p-4 bg-white border rounded-lg shadow-lg z-10">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Referral ID:
                        </label>
                        <div>
                            {referralId || 'Not available'}
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 w-full py-2 text-white rounded-md"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
