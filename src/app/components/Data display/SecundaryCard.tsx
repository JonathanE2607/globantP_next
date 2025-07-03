import { TYPES_BUTTON } from "../../utils/typesButton"
import { TYPES_SECUNDARY_CARD } from "@/app/utils/typesSecundaryCards"
import ButtonUI from "../Forms/Button"
import Image from "next/image"

interface SecondaryCardProps {
  title: string
  description: string
  imageSrc?: string
  buttonText?: string
  variant: TYPES_SECUNDARY_CARD
  source: string
  linkSecundaryCard: string
}

export default function SecondaryCard({
  title,
  description,
  variant,
  source,
  linkSecundaryCard
}: SecondaryCardProps) {
  let secundaryCardElement: React.ReactElement = <></>;

  switch (variant) {
    
    case TYPES_SECUNDARY_CARD.LEFT:
      secundaryCardElement = (
        <div className="flex overflow-hidden rounded-xl border-gray-400 border-2 text-white shadow-md shadow-gray-400 xl:max-w-6xl min-h-64 2xl:max-w-10/12">
          <div className=" p-4 w-3/6">
             <Image
              src={source}
              alt="Image About this"
              width={900}
              height={900}
              className=""
              
               /> 
          </div>
          <div className="flex w-3/5 flex-col justify-between p-6">
            <div>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="mt-4">
              <ButtonUI content={linkSecundaryCard} variant={TYPES_BUTTON.ABOUT} />
            </div>
          </div>
        </div>
      )
      break;
    case TYPES_SECUNDARY_CARD.RIGHT:
      secundaryCardElement = (
        <div className="flex overflow-hidden rounded-xl border-2 shadow-md shadow-gray-400 border-gray-400 text-white max-w-6xl min-h-64 2xl:max-w-10/12">
          <div className="flex w-3/5 flex-col justify-between p-6">
            <div>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="mt-4">
              <ButtonUI content="More info" variant={TYPES_BUTTON.ABOUT} />
            </div>
          </div>
          <div className="w-3/6 p-4 justify-center">
             <Image
              src={source}
              width={1000}
              height={900}
              alt="Image About this"
              sizes=""
              className="" /> 
          </div>
        </div>
      )
      break;
  }
  return secundaryCardElement
}
