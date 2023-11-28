
type AdminSelectProps = {
  label?: string;
  name: string;
  required?: boolean;
  value?: string;
  options: string[];
}

const AdminSelect = (props: AdminSelectProps) => {
  return (
    <label>
      <span className="block mb-2">{props.label}</span>
      <select 
        name={props.name} 
        value={props.value} 
        required={props.required||true} 
        className="w-full p-2 border-2 border-gray-300 rounded-md"
      >
        {props.options.map((option, index) => (
          <option key={index} value={option} className="block py-2 capitalize">{option}</option>
        ))}
      </select>
    </label>
  )
}

export default AdminSelect