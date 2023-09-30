function Title() {
  return (
    <div
      className="h-1/5 mb-[5vw]
md:mb-0 md:h-[25%] md:flex md:flex-col md:justify-center "
    >
      <h1
        className=" font-bold text-left text-blue-900 text-[5.5vw] mb-[0.5vw]
  
    md:mb-[1vw] md:text-[2.5vw]
 "
      >
        Personal info
      </h1>
      <p
        className=" text-gray-400 text-left text-[14px]
    md:text-[1.5vw] md:w-full
    "
      >
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
}

export default Title;
