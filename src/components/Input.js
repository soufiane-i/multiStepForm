function Input(props) {
  return (
    <div
      className="flex flex-col mb-4
      md:mb-8
    xl:mb-[1.5vw] 
    "
    >
      <label
        className="text-left capitalize text-blue-900 font-bold text-[14px] 
        md:text-2xl 
        xl:text-[1vw] 
        2xl:mb-[0.6vw]
         "
        htmlFor={props.name}
      >
        {props.name}
      </label>
      <input
        className="border-solid border-2 rounded-[10px] border-gray-300 placeholder:text-gray-300 font-bold text-blue-900 h-10 rounded text-sm px-[14px] py-0
        md:h-[60px] md:text-xl
        xl:text-[1vw] xl:h-[3.2vw] xl:px-[1vw] xl:rounded-[0.3vw]
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
