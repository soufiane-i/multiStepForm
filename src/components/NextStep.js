function NextStep() {
  return (
    <div
      className="NextStep
      absolute bottom-0 w-full h-[120px] bg-white text-[100%] flex justify-between items-center px-[5%] font-normal
      lg:relative lg:h-[13%] lg:text-[0.8vw] lg:px-0 
      "
    >
      <input
        className="text-gray-400
       "
        type="submit"
        value="Go Back"
      />

      <input
        className="h-[60%] bg-blue-950 text-white px-[5%] rounded-md
        lg:rounded-[0.4vw]
       "
        type="submit"
        value="Next Step"
      />
    </div>
  );
}

export default NextStep;
