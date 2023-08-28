import { dynamicObject } from "../../app/web-dev-course-registration/page";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
  value: string;
  name: string;
  error: dynamicObject;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { label, name, type, placeholder, isRequired=true, value, handleChange, error } = props;

  return (
    <div className="w-full my-8">
      <label className="capitalize">{label} {isRequired && <span className="text-red-500">*</span>}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        required={isRequired} 
        value={value} 
        onChange={handleChange}
        className={`w-full p-2 ${error.hasOwnProperty(name) ? 'border-red-500 border-2' : 'border-gray-300 border-b'} outline-transparent focus:border-b-2 focus:border-primary_blue`}
      />
      {error.hasOwnProperty(name) && <p className="text-red-500">{error[name]}</p>}
    </div>
  )
}

export default Input