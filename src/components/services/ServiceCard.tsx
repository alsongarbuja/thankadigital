
interface IServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: IServiceCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center w-1/2">
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard