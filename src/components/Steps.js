import "../App.css";
import Step from "./Step";

function Steps() {
  return (
    <div
      className="steps relative w-full h-48
      md:h-[360px]
      xl:w-[30%] xl:h-full
       "
    >
      <img
        src="/images/bg-sidebar-desktop.svg"
        className="absolute w-full h-full object-cover rounded-[0.9vw] max-xl:hidden"
        alt="steps background"
      />
      <img
        src="/images/bg-sidebar-mobile.svg"
        className="absolute w-full h-full object-cover rounded-[30px] max-xl:rounded-none xl:hidden "
        alt="steps background"
      />
      <div
        className="pointer-events-none flex justify-center 
        xl:flex-col xl:px-[12%] xl:py-[12%] 
      "
      >
        <Step num={1} description={"YOUR INFO"} />
        <Step num={2} description={"SELECT PLAN"} />
        <Step num={3} description={"ADD-ONS"} />
        <Step num={4} description={"SUMMARY"} />
      </div>
    </div>
  );
}

export default Steps;
