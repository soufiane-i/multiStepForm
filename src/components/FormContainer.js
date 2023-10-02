import NextStep from "./NextStep";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Title from "./Title";

function FormContainer() {
  return (
    <form
      action=""
      method="get"
      className="FormContainer
    relative w-full h-full pt-[14vh]
    lg:w-[67%] lg:pt-0 lg:px-[7vw] lg:flex lg:flex-col lg:justify-center
    "
    >
      <div
        className="Form bg-gray-400
      relative h-[60vh] w-[90%] mx-auto rounded-xl
      lg:w-full lg:h-[90%] lg:mx-0"
      >
        {/*         <div>
          <Title />
          <div className="">
            <PersonalInfo />
            <PlanSelection />
          </div>
        </div> */}
      </div>
      <NextStep />
    </form>
  );
}

export default FormContainer;
