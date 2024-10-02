import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex bg-black mt-20 relative min-h-20 py-12 px-8 justify-between">
        <div className="flex flex-col">
          <div className="absolute left-8 flex items-center gap-3">
            <div className="w-[20px] h-[20px] rounded-full bg-yellow" />
            <h1 className="font-semibold text-xl tracking-tight text-white">
              enactus thapar
            </h1>
          </div>
          <div className="flex flex-col mt-14 text-white">
            <p>
              <span className="font-bold text-yellow">Entrepreneurial :</span>{" "}
              igniting business innovation with integrity and passion.
            </p>
            <p>
              <span className="font-bold text-yellow">Action :</span> the
              experience of social impact that sparks social enterprise.
            </p>
            <p>
              <span className="font-bold text-yellow">Us :</span> student,
              academic and business leaders collaborating to create a better
              world
            </p>
          </div>
        </div>
        <div className="flex flex-col mr-20">
          <p className="text-2xl text-white">
            <span className="text-yellow font-bold">#</span>WeAllWin
          </p>
          <div className="flex gap-x-4 mt-10">
            <FaFacebook size={28} fill="white" />
            <FaInstagramSquare
              size={28}
              fill="white"
              className="rounded-md"
            />
            <FaLinkedin size={28} fill="white" className="rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
