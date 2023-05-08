// import { useState } from "react";

const CustomInput = ({
  value,
  setValue,
  type,
  placeholder,
  name,
  className,
}) => {
  //   const [keyboard, setKeybord] = useState("");

  //   console.log(placeholder, type);
  const handleInputChange = (event) => {
    event.preventDefault();

    setValue(event.target.value);
  };
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      name={name}
    />
  );
};
export default CustomInput;
