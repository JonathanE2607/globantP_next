import React from "react";
import { TYPE_LINKS } from "@/app/utils/typesLinks";
import Link from "next/link";

type LinkTypes = {
   content: string | React.ReactElement,
   link: string,
   variant: TYPE_LINKS,
   custom?: string
}
const LinkUI = ({ content, link, variant, custom }: LinkTypes) => {

   let linkElement: React.ReactElement = <></>

   switch (variant) {
      case TYPE_LINKS.NAV_LINK:
         linkElement = (
            <Link href={link} className={`font-Roboto border-b-2 border-transparent pb-1 hover:border-white/70 transition-colors font-medium ${custom}`}>{content}</Link>
         );
         break;
      case TYPE_LINKS.TITTLE_LINK:
         linkElement = (
            <Link href={link} className={`font-Roboto text-2xl font-bold mr-10 ${custom}`}>{content}</Link>
         );
         break
      case TYPE_LINKS.CUSTOM_LINK:
         linkElement = (
            <Link href={link} className={`font-Roboto font-bold ${custom}`}>{content}</Link>
         );
         break
   }

   return linkElement
}

export default LinkUI;