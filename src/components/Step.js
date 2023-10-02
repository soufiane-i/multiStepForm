import "../App.css";

function Step(props) {
  return (
    <div
      className="mx-[2vw]
    lg:w-full lg:flex lg:mx-0 lg:ml-[12%] lg:my-[4%] lg:flex lg:items-center
    "
    >
      <div
        className="h-[9vw] w-[9vw] min-lg:max-w-[60px] min-lg:max-h-[60px] text-[4vw] flex justify-center items-center text-white border-[2px] border-indigo-300 rounded-full
      md:text-[26px]
      lg:h-[2vw] lg:w-[2vw] lg:text-[1vw] lg:border-[0.15vw]
        "
      >
        <span
          className="
           "
        >
          {props.num}
        </span>
      </div>
      <div
        className="hidden
      lg:flex lg:flex-col lg:items-start lg:pl-[5%] lg:text-[0.85vw]
      "
      >
        <p className="lg:h-1/2 lg:text-indigo-300">STEP {props.num}</p>
        <p className="lg:h-1/2  text-white font-bold tracking-widest">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Step;
