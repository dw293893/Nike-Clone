import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">

        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold gap-2 ">
          We Provide You
          <span className="text-coral-red ml-2">
            Special
          </span>
          <span className="text-coral-red ml-2">
            Offer
          </span>
          <br />
        </h2>

        <p className="mt-4 lg:max-w-lg info-text ">Special offers & discounts for hiring a DW Web Dev Professional.</p>

        <p className="mt-6 lg:max-w-lg info-text">
          30% off.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer