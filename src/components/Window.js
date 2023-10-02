import "../App.css";
import Steps from "./Steps";
import FormContainer from "./FormContainer";

function Window() {
  return (
    <div
      className="Window relative 
      h-full w-full
      lg:w-[66vw] lg:h-[74%] lg:bg-white lg:flex lg:p-[1.2vw] lg:pr-0 lg:rounded-[1vw]

      "
    >
      <Steps />
      <FormContainer />
    </div>
  );
}

export default Window;
