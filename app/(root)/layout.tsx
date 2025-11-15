import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <div className="w-3/5">{children}</div>
        <RightSideBar />
      </div>
    </>
  );
}

export default layout;
