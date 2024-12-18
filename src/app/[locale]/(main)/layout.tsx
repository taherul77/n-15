"use client";

import Footer from "@/components/share/Footer/Footer";
import { NavbarTop } from "@/components/share/NavbarTop";
// import Navbar from "@/components/ui/Navbar/Navbar";
import { store } from "@/redux/Store/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen  bg-white ">
          <NavbarTop />
          <div>
            <div className="">{children}</div>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default layout;
