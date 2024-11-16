import { WrapperProps } from '@/types';
import React from 'react';


export default function ExpertiessWrapper({ children, className }: WrapperProps) {
    return (
       
        <div
            className={`max-w-6xl px-4 ${
                className || ""
            }`}
        >
            {children}  
        </div>
    );
}


