import "../App.css";
import Step from "./Step";

function Steps() {
  return (
    <div
      className="Steps
      absolute z-0  top-0 left-0 w-full h-[25%]
      lg:relative lg:h-full lg:w-[32%] 
       "
    >
      <img
        src="/images/bg-sidebar-desktop.svg"
        className="BgPc
        hidden
        lg:block lg:object-cover lg:w-full lg:h-full lg:rounded-[1vw]"
        alt="steps background"
      />
      <img
        src="/images/bg-sidebar-mobile.svg"
        className="BgMobile
        w-full h-full object-cover block
        lg:hidden"
        alt="steps background"
      />
      <div
        className="absolute top-0 left-0 w-full h-[14vh] flex items-center justify-center
        lg:h-full lg:flex lg:flex-col lg:items-start lg:justify-start lg:mt-[6%]
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
