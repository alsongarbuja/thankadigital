import type { PropsWithChildren } from "react"

interface IServiceSectionProps {}

const ServiceSection = ({ children }: PropsWithChildren<IServiceSectionProps>) => {
  return (
    <section className="my-10">
      <h2>Our Services</h2>
      <p>Services we provide to grow your business in all fields</p>
      {children}
    </section>
  )
}

export default ServiceSection