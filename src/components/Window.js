import "../App.css";
import Steps from "./Steps";
import FormContainer from "./FormContainer";

function Window() {
  return (
    <div
      className="window relative flex p-0 w-full h-full rounded-[1vw]
      md:bg-white md:w-[80%] md:h-[80%] md:p-[2vw] md:pr-[0]
      "
    >
      <Steps />
      <FormContainer />
    </div>
  );
}

export default Window;
