import Link from "next/link";
import Image from "next/image";
import profile from "../public/profile.png";
import { AiFillLike } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import TagCard from "./TagCard";

function ThreadCard() {
  return (
    <div className="bg-card px-10 py-4 rounded-xl space-y-7">
      <h1 className="text-xl font-bold">What is vue js? How does it work?</h1>
      <div className="space-x-3">
        <TagCard href={"/?filter=" + "vue"}>Vue</TagCard>
        <TagCard href={"/?filter=" + "react"}>React</TagCard>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
          <Image
            src={profile}
            alt="profile"
            width={30}
            height={30}
            className="rounded-full object-cover aspect-square"
          />
          <span>Naing Lynn Aung . asked 3 minutes ago</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-gray-300 text-[14px]">
            <span>
              <AiFillLike />
            </span>
            <span>1.2k Likes</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-[14px]">
            <span>
              <MdQuestionAnswer />
            </span>
            <span>1.2k Answers</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-[14px]">
            <span>
              <IoEye />
            </span>
            <span>1.2k Views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
