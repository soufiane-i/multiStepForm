function NextStep() {
  return (
    <div
      className="w-full h-[17vw] px-[5vw] py-[3.5vw] my-auto flex justify-between absolute bottom-0 bg-white 
      xl:relative xl:h-[8%] xl:w-[100%] xl:px-0 
       md:py-[0vw]
    "
    >
      <div
        className="flex h-full my-auto items-center justify-left h-full  max-sm:rounded rounded-lg cursor-pointer hover:bg-blue-900
        xl:w-[8.8vw] xl:rounded-[0.7vw] xl:h-full
      "
      >
        <input
          className="text-[3vw] text-gray-400 font-bold pointer-events-none
          md:w-full md:h-full md:text-[1.6vw]
       "
          type="submit"
          value="Go Back"
        />
      </div>
      <div
        className="flex w-[22vw] h-full my-auto items-center justify-center bg-blue-950 h-full  max-sm:rounded rounded-lg cursor-pointer hover:bg-blue-900
        md:w-[14vw] md:rounded-[0.7vw] md:h-full
      "
      >
        <input
          className="text-[3vw] text-white pointer-events-none
          md:w-full md:h-full md:text-[1.6vw]
       "
          type="submit"
          value="Next Step"
        />
      </div>
    </div>
  );
}

export default NextStep;
