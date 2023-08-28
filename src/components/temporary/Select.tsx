import { dynamicObject } from '../../app/web-dev-course-registration/page';

interface SelectProps {
  label: string;
  isRequired?: boolean;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  error: dynamicObject;
}

const Select = (props: SelectProps) => {
  const { label, name, options, isRequired=true, value, handleChange, error } = props;

  return (
    <div className="w-full">
      <label className="capitalize">{label} <span className="text-red-500">*</span></label>
      <select 
        name={name} 
        value={value}
        required={isRequired} 
        onChange={handleChange} 
        className="w-full p-2 my-4 border-b border-gray-300 outline-transparent focus:border-b-2 focus:border-primary_blue"
      >
        {
          options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))
        }
      </select>
      {error.hasOwnProperty(name) && <p className="text-red-500">{error[name]}</p>}
    </div>
  )
}

export default Select