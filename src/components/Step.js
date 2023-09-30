import "../App.css";

function Step(props) {
  return (
    <div
      className="relative flex px-[2.5vw] pt-[8vw]
     
      xl:mb-[10%] xl:pt-0 xl:px-[0px]"
    >
      <div
        className="flex justify-center items-center border-solid border-[0.125vw] border-violet-300 rounded-full w-[8.5vw] h-[8.5vw] 
         md:border-[1.5px]  
        xl:w-[13%] xl:h-[2.3vw]
"
      >
        <span
          className="flex items-center justify-center text-[3.5vw] font-bold text-white
          xl:text-[1vw]
           "
        >
          {props.num}
        </span>
      </div>
      <div
        className="hidden 
        xl:flex xl:flex-col xl:justify-center xl:text-left xl:ml-[8%]"
      >
        <p
          className="text-violet-400 font-bold
        xl:text-[0.8vw]"
        >
          STEP {props.num}
        </p>
        <p
          className="text-white font-bold
        xl:text-[0.9vw]"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Step;
