
interface IServiceCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor?: "bg-inherit" | "bg-purple-50" | "bg-red-50" | "bg-green-50" | "bg-blue-50",
}

const ServiceCard = ({ icon, title, bgColor="bg-inherit" }: IServiceCardProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center p-4 w-full min-h-[200px] md:min-h-[350px] rounded-md ${bgColor}`}>
      {icon}
      <h3 className={`${bgColor === "bg-inherit" && "text-primary_blue"}`}>{title}</h3>
    </div>
  )
}

export default ServiceCard