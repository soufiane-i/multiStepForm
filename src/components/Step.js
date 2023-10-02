import "../App.css";

function Step(props) {
  return (
    <div className="mx-[2vw]">
      <div
        className="h-[9vw] w-[9vw] max-w-[60px] max-h-[60px] text-[4vw] flex justify-center items-center text-white border-[2px] border-indigo-300 rounded-full
      md:text-[26px]
        "
      >
        <span
          className="
           "
        >
          {props.num}
        </span>
      </div>
      <div className="hidden">
        <p className="">STEP {props.num}</p>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
}

export default Step;
