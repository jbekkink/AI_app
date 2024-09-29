import React, { useEffect } from 'react';
import IExecButton from './IExecButton';
import Link from 'next/link';
import AppBox from './AppBox';
import { getAccount } from '@wagmi/core';
import { IExecDataProtector } from '@iexec/dataprotector';
import { useState } from 'react';
import { useAccount } from "wagmi";

const app_adresses = [
    {   address: "0x89a03a0fc8a4c371a575503ef13f93a2d8816357", 
        name: "Image Caption Matcher",
    },
    {   address: "", 
        name: "Private Image Generation",
    },
]

function Shorten(text) {
    return text.substring(0,6) + '..' + text.substring((text.length - 3), text.length);
}

const Apps = (props) => {
    const [apps, setApps] = useState([]);

    const getNameOfApps = async () => {

    }

    useEffect(() => {
        getNameOfApps();

        
    }, []);

    return (
        <div className="flex flex-col gap-6 p-6 w-full transition duration-200 ease-in bg-gray-200">
            <div className='flex justify-between items-center'>
                <div><h2 className="font-bold text-3xl">AI Apps</h2></div>
            </div>

            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {app_adresses && 
                app_adresses.map((data, index) => (
                    <Link href={{pathname: `/ai/${data.address}`}}>
                        <AppBox key={index} title={data.name} />
                    </Link>
                ))}
            </div>
            
        </div>

    );
}

export default Apps;