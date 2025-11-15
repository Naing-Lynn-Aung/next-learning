import {
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaQuestionCircle,
  FaVuejs,
  FaReact,
} from "react-icons/fa";

function RightSideBar() {
  return (
    <div className="w-1/5 p-5">
      <div>
        <h1 className="font-bold text-xl">Popular Questions</h1>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, officia. Ex accusantium totam quod qui, amet praesentium
              laborum quisquam, ipsum maxime et ea laudantium debitis autem
              labore maiores sit cum.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, officia. Ex accusantium totam quod qui, amet praesentium
              laborum quisquam, ipsum maxime et ea laudantium debitis autem
              labore maiores sit cum.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, officia. Ex accusantium totam quod qui, amet praesentium
              laborum quisquam, ipsum maxime et ea laudantium debitis autem
              labore maiores sit cum.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, officia. Ex accusantium totam quod qui, amet praesentium
              laborum quisquam, ipsum maxime et ea laudantium debitis autem
              labore maiores sit cum.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, officia. Ex accusantium totam quod qui, amet praesentium
              laborum quisquam, ipsum maxime et ea laudantium debitis autem
              labore maiores sit cum.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Popular Tags</h1>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-[#61DAFB] text-xl">
              <FaReact />
            </span>
            <span className="line-clamp-2 text-[16px]">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4FC08D] text-xl">
              <FaVuejs />
            </span>
            <span className="line-clamp-2 text-[16px]">Vue</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#FF2D20] text-xl">
              <FaLaravel />
            </span>
            <span className="line-clamp-2 text-[16px]">Laravel</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#3776AB] text-xl">
              <FaPython />
            </span>
            <span className="line-clamp-2 text-[16px]">Python</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#339933] text-xl">
              <FaNodeJs />
            </span>
            <span className="line-clamp-2 text-[16px]">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
