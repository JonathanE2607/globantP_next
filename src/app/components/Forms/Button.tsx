import React, { MouseEventHandler } from "react";
import { TYPES_BUTTON } from "@/app/utils/typesButton";

type buttonTypes = {
   content: string,
   variant: TYPES_BUTTON,
   custom?: string
   navLink?: string | void,
   onClick?: MouseEventHandler
}
const ButtonUI = ({ content, variant, custom, navLink, onClick }: buttonTypes) => {

   let buttonElemnt: React.ReactElement = <></>;
   

//    const { i18n } = useTranslation();
//    const changeLanguage = (lng: string) => {
//       i18n.changeLanguage(lng);
//    }

   switch (variant) {
      case TYPES_BUTTON.PRIMARY:
         buttonElemnt = (
            <button onClick={() => {  }} className={`font-Roboto px-4 py-2 rounded-full border border-white text-sm font-medium hover:bg-white/10 transition-colors ${custom}`}>{content}</button>
         )
         break;
      case TYPES_BUTTON.SECUNDARY:
         buttonElemnt = (
            <button onClick={() => { }} className={`font-Roboto px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors ${custom}`}>{content}</button>
         );
         break
      case TYPES_BUTTON.CUSTOM:
         buttonElemnt = (
            <button onClick={() => {  }} className={`font-Roboto ${custom}`}>{content}</button>
         );
         break
         case TYPES_BUTTON.CUSTOM_ON_CLICK:
         buttonElemnt = (
            <button onClick={onClick} className={`font-Roboto ${custom}`}>{content}</button>
         );
         break
      case TYPES_BUTTON.ABOUT:
         buttonElemnt = (
            <button onClick={() => {  }} className={`font-Roboto bg-gray-700 py-3 px-4 rounded-lg ${custom}`}>{content}</button>
         );
         break;
    //   case TYPES_BUTTON.lANGUAGE:
    //      buttonElemnt = (
    //         <div>
    //            {languages.map((lng) => {
    //               return <button key={lng.code} onClick={() => changeLanguage(lng.code)} className={`font-Roboto px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors ml-4 ${custom}`}>{lng.lang}</button>
    //            })}
    //         </div>
    //      );
    //      break;
   }
   return buttonElemnt;
}

export default ButtonUI;