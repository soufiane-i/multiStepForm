import Plan from "./Plan";
import style from "./style.css";

function PlanSelection() {
  return (
    <div className="planSelection">
      <div className="">
        <Plan />
        <Plan />
        <Plan />
      </div>

      <div className="">
        <span className="">Monthly</span>
        <label className="">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className=""
          />
          <div className=""></div>
          <div className=""></div>
        </label>
        <span className="">Yearly</span>
      </div>
    </div>
  );
}

export default PlanSelection;
