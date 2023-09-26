function NextStep() {
  return (
    <div
      className="w-full h-[80px] px-[25px] flex justify-end absolute bottom-0 bg-white 
      md:h-[110px] md:px-[45px]
      xl:relative xl:h-[8%] xl:w-[100%] xl:px-0 
    "
    >
      <div
        className="flex h-[60%] my-auto items-center justify-center bg-blue-950 h-full w-28 max-sm:rounded rounded-lg cursor-pointer hover:bg-blue-900
        md:w-[180px]
        xl:w-[8.8vw] xl:rounded-[0.7vw] xl:h-full
      "
      >
        <input
          className="text-lg text-white pointer-events-none
          md:text-2xl
          xl:w-full xl:h-full xl:text-[1.1vw]
       "
          type="submit"
          value="Next Step"
        />
      </div>
    </div>
  );
}

export default NextStep;
