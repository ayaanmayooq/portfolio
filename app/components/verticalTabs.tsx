import React, { useEffect, useState } from 'react';
import { GeistSans } from 'geist/font/sans';


export function VerticalTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="container relative flex">
            <div className="tabs flex flex-col">
                <a
                    className={`tab px-10 flex-1 py-2 text-center border-l-2 cursor-pointer ${activeTab === 1 ? 'border-l-2 border-gray-500' : ''}`}
                    href="#"
                    data-tab="1"
                    onClick={() => handleTabClick(1)}
                >
                    Tab 1
                </a>
                <a
                    className={`tab px-10 flex-1 py-2 text-center border-l-2 cursor-pointer ${activeTab === 2 ? 'border-l-2 border-gray-500' : ''
                        }`}
                    href="#"
                    data-tab="2"
                    onClick={() => handleTabClick(2)}
                >
                    Tab 2
                </a>
                <a
                    className={`tab px-10 flex-1 py-2 text-center border-l-2 cursor-pointer ${activeTab === 3 ? 'border-l-2 border-gray-500' : ''
                        }`}
                    href="#"
                    data-tab="3"
                    onClick={() => handleTabClick(3)}
                >
                    Tab 3
                </a>
            </div>

            <div className="flex bg-red-200 ml-4">
                <div
                    className={`absolute opacity-0 transition-opacity ${activeTab === 1 ? 'opacity-100' : ''
                        }`}
                    data-tab="1"
                >
                    <p>tab 1 contenasdasdasdassdfgsdfg sg sdf gsdf gsdf gsdfsfgjsdfg snfk gbsdfjkgbsdjkhfbgkjsdhfb gkjsdhbskdbgfdh t</p>
                </div>

                <div
                    className={`absolute opacity-0 transition-opacity ${activeTab === 2 ? 'opacity-100' : ''
                        }`}
                    data-tab="2"
                >
                    <p className=''>tab 2 bs</p>
                </div>

                <div
                    className={`absolute opacity-0 transition-opacity ${activeTab === 3 ? 'opacity-100' : ''
                        }`}
                    data-tab="3"
                >
                    <p>pls work</p>
                </div>
            </div>
        </div>
    );
}