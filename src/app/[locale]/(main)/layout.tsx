"use client";


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
      <Navbar />
        {children}
     
      </QueryClientProvider>
    </Provider>
  );
}

export default layout;
