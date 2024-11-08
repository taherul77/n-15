"use client";


import { NavbarTop } from "@/components/share/NavbarTop";
import Navbar from "@/components/ui/Navbar/Navbar";
import {store} from "@/redux/Store/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <div className="max-w-screen min-h-screen  bg-gray-300 ">
      <NavbarTop />
      <div>
        <div className="max-w-6xl mx-auto min-h-screen">
        
            <div className="">{children}</div>
        
        </div>
      </div>
     
    </div>
     
      </QueryClientProvider>
    </Provider>
  );
}

export default layout;
