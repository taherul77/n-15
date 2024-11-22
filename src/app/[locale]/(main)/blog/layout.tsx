import { TracingBeam } from "@/components/ui/tracing-beam";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen min-h-screen  bg-white ">
      <div className="py-28">
        <TracingBeam>
          <div className="">{children}</div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default layout;
