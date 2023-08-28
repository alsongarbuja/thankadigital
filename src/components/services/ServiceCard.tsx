
interface IServiceCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor?: "bg-inherit" | "bg-purple-50" | "bg-red-50" | "bg-green-50" | "bg-blue-50",
}

const ServiceCard = ({ icon, title, bgColor="bg-inherit" }: IServiceCardProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center p-4 w-full min-h-[300px] rounded-md ${bgColor}`}>
      {icon}
      <h3>{title}</h3>
    </div>
  )
}

export default ServiceCard