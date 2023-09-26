import "../App.css";
import PersonalInfo from "./PersonalInfo";
import NextStep from "./NextStep";
import Steps from "./Steps";
import FormContainer from "./FormContainer";

function Window() {
  return (
    <div
      className="window relative flex p-0 w-full h-full p-[1vw] rounded-[1vw]
      xl:bg-white xl:w-[80%] xl:h-[80%] xl:p-[1%]
      "
    >
      <Steps />
      <FormContainer />
    </div>
  );
}

export default Window;
