import React, { useEffect } from 'react';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const AppBox = (props) => {

    return (
        <div className={`border-solid border-white border-2 bg-white rounded-lg font-semibold text-gray-700 shadow-sm
        cursor-pointer h-48 transition duration-200 ease-in-out relative transform hover:border-yellow `}>
            <div className='absolute bottom-2 w-full'>
                <div className='relative flex justify-between items-center px-4'>
                    <div>
                        <h3 className=' text-3xl tracking-wide'>{props.title}</h3>
                    </div>
                    <div>
                        {props && props.email && <AlternateEmailOutlinedIcon className='text-xl'/>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AppBox;






