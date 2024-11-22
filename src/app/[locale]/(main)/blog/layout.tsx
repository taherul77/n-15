import { ReactNode } from "react";


function layout({ children }: { children: ReactNode }) {


  return (
   
        <div className="max-w-screen min-h-screen  bg-white ">
        
          <div>
            <div className="py-28">
              <div className="">{children}</div>
            </div>
          </div>
       
        </div>
   
  );
}

export default layout;
