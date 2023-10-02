import "../App.css";
import Input from "./Input";
import Title from "./Title";

function PersonalInfo() {
  return (
    <div className="PersonalInfo h-full flex flex-col justify-between">
      <Input name="name" type="text" placeholder="Jean Dupont" />
      <Input name="email" type="email" placeholder="mail@mail.com" />
      <Input name="phone" type="text" placeholder="+33 X XX XX XX XX" />
    </div>
  );
}

export default PersonalInfo;
