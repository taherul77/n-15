import { WrapperProps } from '@/types';
import React from 'react';

// Define the ExpertiessWrapper component, which accepts children and an optional className as props
export default function ExpertiessWrapper({ children, className }: WrapperProps) {
    return (
        // Container div with default padding and margin, along with any additional className passed as a prop
        <div
            className={`max-w-6xl px-4 ${
                className || ""  // Add any additional classes if provided
            }`}
        >
            {children}  
        </div>
    );
}


