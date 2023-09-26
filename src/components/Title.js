function Title() {
  return (
    <div
      className="h-1/5 mb-8
md:mb-[60px]
xl:mb-0 xl:h-[25%] xl:flex xl:flex-col xl:justify-center "
    >
      <h1
        className=" font-bold text-left text-blue-900 text-2xl mb-1
    md:text-5xl md:mb-6 
    xl:mb-[1vw] xl:text-[2.5vw]
 "
      >
        Personal info
      </h1>
      <p
        className=" text-gray-400 text-left text-[14px]
    md:text-2xl md:w-[70%]
    xl:text-[1.2vw] xl:w-full
    "
      >
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
}

export default Title;
