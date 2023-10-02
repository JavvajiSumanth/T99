import React from "react";

const MainCard = ({
  Img,
  header,
  body,
  link,
  button,
  footer,
  placement = "center",
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div
        className=" bg-cover bg-center h-[300px] sm:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundPosition: `${placement}`,
        }}
      >
        {/* <img src={Img} alt="hGolfMobility" /> */}
      </div>
      <div className="bg-white p-10 flex flex-col items-center justify-center relative">
        <h1 className="uppercase tracking-wide text-4xl font-primary font-semibold font-bold  text-center mt-6">
          {header}
        </h1>
        <h1 className="tracking-wide text-md font-primary font-semibold text-center font-semibold  my-3 ">
          {body}
        </h1>

        {button && (
          <button className="bg-green-600 px-4 py-2 w-fit uppercase text-white font-bold rounded">
            {button || "Book Now"}
          </button>
        )}
        {footer && (
          <h1 className="absolute bottom-5 right-5 font-semibold">{footer}</h1>
        )}
      </div>
    </div>
  );
};

export default MainCard;
