function Input(props) {
  return (
    <div
      className="Input flex flex-col 
    "
    >
      <label
        className="capitalize text-[3.5vw] text-indigo-900 font-medium
        md:text-[2.8vw]
        lg:text-[0.9vw]
         "
        htmlFor={props.name}
      >
        {props.name}
      </label>
      <input
        className="border-[1.5px] border-gray-200 rounded-sm h-[5.8vh] p-[4%] text-[2.2vh] text-slate-700
        lg:rounded-[0.4vw] lg:border-[0.15vw] lg:p-[3%] lg:text-[0.9vw]
        "
        type={props.type}
        name={props.name}
        id={props.name}
        required
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
