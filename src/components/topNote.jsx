import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const TopNote = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  
  return (
    <div
      className={`flex z-50 bg-yellow py-2 text-xs justify-center items-center sticky top-0 ${!show && `hidden`}`}
    >
      <p>Where Entrepreneurship Meets Sustainablity</p>
      <RxCross1 className="right-[2vh] absolute hover:cursor-pointer" onClick={handleClose}/>
    </div>
  );
}

export default TopNote