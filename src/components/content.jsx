import { MdArrowOutward } from "react-icons/md";
import heroImage from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import prod1 from "../assets/prod1.svg";
import prod2 from "../assets/prod2.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <div className="flex justify-center relative">
        <div className="lg:max-w-[560px] max-w-[600px] w-full">
          <h1 className="font-semibold text-2xl tracking-tighter lg:absolute left-0">
            Enactus Projects
          </h1>
          <img src={heroImage} alt="heroImage" className="w-full" />
          <h2 className="font-semibold text-4xl tracking-tighter my-6">
            Project Atrangi
          </h2>
          <div className="flex flex-col px-9 py-6 bg-yellow rounded-2xl">
            <h3 className="text-2xl font-semibold tracking-tighter">
              Mission Statement
            </h3>
            <p className="my-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <button className="flex gap-2 w-fit items-center text-white font-medium bg-black rounded-full px-6 py-3">
              <p className="tracking-wider text-xs">LEARN MORE ABOUT ATRANGI</p>
              <MdArrowOutward />
            </button>
          </div>
          <div className="flex flex-col my-8">
            <h3 className="text-2xl font-semibold tracking-tighter">
              1. Project Overview
            </h3>
            <p className="my-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col my-8">
            <h3 className="text-2xl font-semibold tracking-tighter">
              2. Project Gallery
            </h3>
            <img
              src={image2}
              alt="People"
              className="my-4 border rounded-3xl"
            />
          </div>
          <div className="flex flex-col my-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold tracking-tighter">
                3. Atrangi Products
              </h3>
              <p className="text-yellow text-sm font-semibold">View Shop</p>
            </div>
            <div className="flex gap-2 my-4">
              <div className="flex flex-col flex-1">
                <img src={prod1} alt="People" className="mb-2 rounded-2xl" />
                <div className="flex flex-col text-center">
                  <p className="text-sm font-semibold tracking-wide">
                    ATRANGI PRODUCT 1
                  </p>
                  <p className="text-gray text-xs">
                    Description of the Product
                  </p>
                  <p className="font-medium tracking-wide mt-2">RS 200</p>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <img src={prod2} alt="People" className="mb-2 rounded-2xl" />
                <div className="flex flex-col text-center">
                  <p className="text-sm font-semibold tracking-wide">
                    ATRANGI PRODUCT 1
                  </p>
                  <p className="text-gray text-xs">
                    Description of the Product
                  </p>
                  <p className="font-medium tracking-wide mt-2">RS 200</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex py-2 items-center gap-6 relative">
            <p className="font-semibold">Share</p>
            <FaFacebook size={18} />
            <FaLinkedin size={18} />
            <FaTwitter size={18} />
            <button className="text-yellow font-semibold absolute right-0">
              Copy link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
