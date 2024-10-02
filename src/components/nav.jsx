import { IoIosArrowDropdown } from 'react-icons/io';

const Nav = () => {
  return (
    <>
      <div className="mx-[80px] py-5 justify-between flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-[20px] h-[20px] rounded-full bg-yellow" />
          <h1 className="font-semibold text-xl">enactus thapar</h1>
        </div>
        <div className="flex gap-4 items-center text-sm font-medium">
          <p>About</p>
          <div className="flex items-center gap-1">
            <p>Team</p>
            <IoIosArrowDropdown height={3} />
          </div>
          <div className="flex items-center gap-1">
            <p>Projects</p>
            <IoIosArrowDropdown height={3} />
          </div>
          <p>Partners</p>
          <p>Blog</p>
        </div>
        <button className='rounded-full py-2 px-4 bg-yellow text-white text-sm font-bold'>
            Get Started
        </button>
      </div>
    </>
  );
}

export default Nav