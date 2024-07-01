import { PropsWithChildren } from "react"

type CustomTableProps = {
  cols: string[];
  hasActions?: boolean;
}

const CustomTable = ({ children, cols, hasActions=true }: PropsWithChildren<CustomTableProps>) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="uppercase border-b-2 border-gray-700">
          {cols.map((col, index) => (
            <th key={index} className="h-12 text-left">{col}</th>
          ))}
          {hasActions && <th>ACTIONS</th>}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default CustomTable