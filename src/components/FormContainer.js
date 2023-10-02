import NextStep from "./NextStep";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Title from "./Title";

function FormContainer() {
  return (
    <form
      action=""
      method="get"
      className="Form 
    relative w-full h-full pt-[14vh]
    lg:w-[68%] lg:pt-0 lg:px-[6.5vw] lg:flex lg:flex-col lg:justify-center
    "
    >
      <div
        className="FormContainer bg-white shadow-lg
        relative h-[56vh] w-[90%] mx-auto p-[6%] rounded-xl
      lg:w-full lg:h-[90%] lg:mx-0 lg:px-0"
        l
      >
        <Title />
        <div className="h-[60%]">
          <PersonalInfo />
          <PlanSelection />
        </div>
      </div>
      <NextStep />
    </form>
  );
}

export default FormContainer;
