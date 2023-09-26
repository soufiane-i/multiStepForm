function Plan(props) {
  return (
    <div
      className="border-2 flex items-center rounded-[10px] mb-[10px]
    w-full h-[75px] px-[18px] "
    >
      <img src="/images/icon-arcade.svg" className="w-[20%]" />
      <h1 className="flex flex-col w-[80%] items-start px-[20px] text-base font-bold">
        Arcade
        <span className="font-bold text-gray-300">${props.price}</span>
      </h1>
    </div>
  );
}

export default Plan;
