import type { PropsWithChildren } from "react"

interface IServiceSectionProps {}

const ServiceSection = ({ children }: PropsWithChildren<IServiceSectionProps>) => {
  return (
    <section className="my-10">
      <h3>Our Services</h3>
      <p>Services we provide to grow your business in all fields</p>
      {children}
    </section>
  )
}

export default ServiceSection