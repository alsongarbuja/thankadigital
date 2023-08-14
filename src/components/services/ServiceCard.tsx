
interface IServiceCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor?: "bg-inherit" | "bg-light_purple" | "bg-light_red" | "bg-light_green",
}

const ServiceCard = ({ icon, title, bgColor="bg-inherit" }: IServiceCardProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center p-4 w-full h-[250px] rounded-md ${bgColor}`}>
      {icon}
      <h4>{title}</h4>
    </div>
  )
}

export default ServiceCard