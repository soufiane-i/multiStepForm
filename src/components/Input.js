function Input(props) {
  return (
    <div
      className=" 
    "
    >
      <label
        className="
         "
        htmlFor={props.name}
      >
        {props.name}
      </label>
      <input
        className="
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
