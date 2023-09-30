import Plan from "./Plan";
import style from "./style.css";

function PlanSelection() {
  return (
    <div
      className="planSelection flex flex-col
      w-full
    h-[13vw]"
    >
      <div
        className="flex flex-col 
      md:flex-row md:justify-between"
      >
        <Plan />
        <Plan />
        <Plan />
      </div>

      <div
        className="w-full h-[10vw] bg-indigo-50 flex justify-center items-center rounded-[10px] mt-[4vw] mb-[3vw]
      md:h-[10vw] md:py-[1.3vw] md:rounded-2xl"
      >
        <span
          className="font-bold text-[3vw] 
        md:text-[1.3vw]"
        >
          Monthly
        </span>
        <label
          className="relative cursor-pointer mx-[5vw]
        md:mx-[3vw] "
        >
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
          />
          <div
            className="block border-[1px] dark:border-white bg-gray-800 border-gray-900 w-[7vw] h-[4vw] rounded-full
          md:h-[2.6vw] md:w-[4.4vw]"
          ></div>
          <div
            className="dot absolute left-[0.8vw]  top-[0.8vw] bg-white  w-[2.5vw] h-[2.5vw] rounded-full transition
          md:left-[0.5vw] top-[0.5vw] md:w-[1.7vw] md:h-[1.7vw]"
          ></div>
        </label>
        <span
          className="font-bold text-[3vw]  text-gray-400
        md:text-[1.3vw]"
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default PlanSelection;
