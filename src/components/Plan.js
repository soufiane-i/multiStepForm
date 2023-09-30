function Plan(props) {
  return (
    <div
      className="border-2 flex items-center rounded-[10px] mb-[2vw]
    w-full h-[21vw] px-[4vw] h-[10vw]
    md:h-[15vw] md:w-[30%] md:h-[13vw] md:items-between md:px-0 md:flex-col md:mb-0 md:justify-between md:items-start"
    >
      <img
        src="/images/icon-arcade.svg"
        className="w-[12vw] 
        md:w-[2.8vw] md:m-[1.5vw]
      "
      />
      <h1
        className="flex flex-col w-[80%] items-start px-[4vw] text-[4vw] font-bold text-blue-900
      md:text-[1.5vw] md:px-[1.5vw] md:pb-[1vw] "
      >
        Arcade
        <span className="font-normal text-gray-400">${props.price}/mo</span>
      </h1>
    </div>
  );
}

export default Plan;
