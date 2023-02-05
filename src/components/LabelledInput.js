const LabelledInput = ({
  labelName,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  const labelStyle = "flex flex-col mx-4 my-8 font-semibold";

  const inputStyle =
    "border-slate-400 border-2 p-1 mt-1 font-normal rounded-md";
  return (
    <>
      <label htmlFor={name} className={labelStyle}>
        {labelName}
        <input
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </>
  );
};

export default LabelledInput;
