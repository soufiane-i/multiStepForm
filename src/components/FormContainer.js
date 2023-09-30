import NextStep from "./NextStep";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Title from "./Title";

function FormContainer() {
  return (
    <div
      className="formContainer form absolute w-full h-screen flex flex-col justify-between rounded-[1vw]
    md:relative md:w-[70%] md:h-full md:px-[8vw] md:pb-0 "
    >
      <form
        action=""
        method="get"
        className=" md:flex flex-col justify-center
md:h-screen"
      >
        <div
          className="form w-[90%] mx-auto mt-[23.5vw] bg-white rounded-xl px-[4vw] pt-[4vw] pb-[2vw] shadow-lg
          md:relative md:m-0 md:w-full md:pt-[0] xl:shadow-none md:p-0 xl:m-0"
        >
          <Title />
          <div className="h-full xl:h-[75%]">
            <PersonalInfo />
            <PlanSelection />
          </div>
        </div>
        <NextStep />
      </form>
    </div>
  );
}

export default FormContainer;
