import { IoIosArrowDropdown } from 'react-icons/io';

const Nav = () => {
  return (
    <>
      <div className="mx-[80px] py-5 justify-center flex items-center relative">
        <div className="absolute left-0 flex items-center gap-3">
          <div className="w-[20px] h-[20px] rounded-full bg-yellow" />
          <h1 className="font-semibold text-xl tracking-tight">enactus thapar</h1>
        </div>
        <div className="flex gap-4 items-center text-sm font-medium">
          <p>About</p>
          <div className="flex items-center gap-1">
            <p>Team</p>
            <button>
              <IoIosArrowDropdown height={3} />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <p>Projects</p>
            <button>
              <IoIosArrowDropdown height={3} />
            </button>
          </div>
          <p>Partners</p>
          <p>Blog</p>
        </div>
        <button className=" absolute right-0 rounded-full py-2 px-4 bg-yellow text-white text-sm font-bold">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Nav