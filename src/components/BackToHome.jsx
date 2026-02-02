import React from 'react';
import { HomeIcon, } from "@heroicons/react/outline";
import { Link} from "react-router-dom";
const BackToHome = () => {
    return (
        <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            <Link key={'Home'} to={'/'} className="flex flex-col items-center group">
                <HomeIcon
                    className={`w-10 h-10 transition-all duration-300 `}
                />
            </Link>
        </div>
    );
};

export default BackToHome;
