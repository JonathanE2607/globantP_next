import { TYPES_CARD } from "@/app/utils/typesCard";
import { TYPE_LINKS } from "@/app/utils/typesLinks";
import LinkUI from "../Forms/Link";
import IconUI from "../UI/Icon";
import Link from "next/link";

type CardProps = {
    content: string,
    textCustom?: string,
    variant: TYPES_CARD,
    background?: string,
    borderCustom?: string,
    custom?: string,
    styleIcon?: string,
    colorIcon?: string,
    linkCard?: string,
    progress?: string,
    teacherName?: string,
    imageURL?: string,
    numSucces?: number,
    numFinish?: number,
    linkTo?: string,
    contentAll?: string
}
const Card = ({
  content,
  variant,
  borderCustom,
  custom,
  styleIcon,
  colorIcon,
  background,
  textCustom,
  linkCard,
  teacherName,
  imageURL,
  numSucces,
  numFinish,
  linkTo,
  contentAll,
}: CardProps) => {
  let cardElement: React.ReactElement = <></>;
  const hasLinkCard = linkCard ? linkCard : "";
  const hasContent = contentAll ? contentAll : "";
  const hasLinkTo = linkTo ? linkTo : "/";
  const hasNumSucces = numSucces ? numSucces : 0;
  const hasNumFinish = numFinish ? numFinish : 0;

  switch (variant) {
    case TYPES_CARD.BLUE:
      cardElement = (
        <div
          className={`min-w-[20%] max-w-[25%] h-96 border-2 border-custom-blue shadow-lg shadow-custom-blue bg-custom-blue/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center`}
        >
          <div className="bg-custom-blue p-1 rounded-xl">
            <IconUI customIcon="custom-blue-icon" colorIcon="custom-blue/95" />
          </div>
          <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
          <p className="text-white text-sm mb-4 mt-2">{hasContent}</p>
          <LinkUI
            content={hasLinkCard}
            link="/"
            variant={TYPE_LINKS.CUSTOM_LINK}
            custom={`text-custom-blue text-lg font-bold mb-2`}
          />
        </div>
      );
      break;

    case TYPES_CARD.PURPPLE:
      cardElement = (
        <div className="min-w-[20%] max-w-[25%] min-h-[45%] max-h-[50%] border-2 border-custom-purpple shadow-lg shadow-custom-purpple bg-custom-purpple/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center">
          <div className="bg-custom-purpple p-1 rounded-xl">
            <IconUI
              customIcon="custom-purpple-icon"
              colorIcon="custom-purpple/15"
            />
          </div>
          <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
          <p className="text-white text-sm mb-4 mt-2">{hasContent}</p>
          <LinkUI
            content={hasLinkCard}
            link="/"
            variant={TYPE_LINKS.CUSTOM_LINK}
            custom="text-custom-purpple text-lg font-bold mb-2"
          />
        </div>
      );
      break;

    case TYPES_CARD.ORANGE:
      cardElement = (
        <div className="min-w-[20%] max-w-[25%] min-h-[45%] max-h-[50%] border-2 border-custom-orange shadow-lg shadow-custom-orange bg-custom-orange/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center">
          <div className="bg-custom-orange p-1 rounded-xl">
            <IconUI customIcon="custom-orange" colorIcon="custom-orange/15" />
          </div>
          <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
          <p className="text-white text-sm mb-4 mt-2">{hasContent}</p>
          <LinkUI
            content={hasLinkCard}
            link="/"
            variant={TYPE_LINKS.CUSTOM_LINK}
            custom="text-custom-orange text-lg font-bold mb-2"
          />
        </div>
      );
      break;

    case TYPES_CARD.CUSTOM:
      cardElement = (
        <div
          className={`w-64 h-full border-2 ${borderCustom} shadow-lg shadow-${custom} ${background} rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center`}
        >
          <div className={`${custom} p-1 rounded-xl`}>
            <IconUI customIcon={styleIcon} colorIcon={colorIcon} />
          </div>
          <h3 className="text-white font-semibold text-lg mt-4">{content}</h3>
          <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor.</p>
          <LinkUI
            content="Learn More →"
            link="/"
            variant={TYPE_LINKS.CUSTOM_LINK}
            custom={`${textCustom} font-semibold mt-2`}
          />
        </div>
      );
      break;

    case TYPES_CARD.OFFER:
      cardElement = (
        <div className="w-full h-full px-8">
          <div className="overflow-hidden rounded-lg bg-slate-700 shadow-lg hover:scale-105">
            <img
              src={imageURL}
              alt="Video conference on laptop"
              className="w-[90%] h-64 rounded-lg mt-4 mx-auto"
            />
            <Link href={hasLinkTo}>
              <div className="p-5 text-white">
                <h2 className="text-2xl font-bold mb-6">{content}</h2>
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-teal-400">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Instructor avatar"
                      width={10}
                      height={10}
                      className="object-cover"
                    />
                  </div>
                  <span className="ml-3 text-lg font-medium">
                    {teacherName}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{
                        width: `${(hasNumSucces / hasNumFinish) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="mt-2 text-right text-gray-400">
                    Lesson {hasNumSucces} of {hasNumFinish}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
      break;
  }
  return cardElement;
};

export default Card;