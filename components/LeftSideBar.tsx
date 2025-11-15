import ROUTES from "@/routes";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function LeftSideBar() {
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-6">
        <li className="bg-main p-3 rounded-xl">
          <Link
            href={ROUTES.HOME}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="bg-primary p-3 rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Tags</span>
          </Link>
        </li>
        <li className="bg-primary p-3 rounded-xl">
          <Link
            href=""
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Popular Questions</span>
          </Link>
        </li>
        <li className="bg-primary p-3 rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Ask a new question</span>
          </Link>
        </li>
        <li className="bg-primary p-3 rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Newest</span>
          </Link>
        </li>
        <li className="bg-red-500 p-3 rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaHome />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
