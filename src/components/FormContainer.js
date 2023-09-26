import NextStep from "./NextStep";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Title from "./Title";

function FormContainer() {
  return (
    <div
      className="formContainer form absolute w-full h-screen flex flex-col justify-between rounded-[1vw]
    xl:relative xl:w-[70%] xl:h-full  xl:px-[10%]  xl:pb-0 "
    >
      <form
        action=""
        method="get"
        className="xl:h-full xl:flex flex-col justify-center
"
      >
        <div
          className="form w-[90%] mx-auto mt-[120px] bg-white rounded-xl p-[30px] pb-[10px] shadow-lg
          md:pb-[40px] md:mt-[205px] md:pt-[70px]
          xl:relative xl:h-[92%] xl:m-0 xl:w-full xl:pt-[0] xl:shadow-none xl:p-0 xl:m-0"
        >
          <Title />
          <div className="xl:h-[75%]">
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
