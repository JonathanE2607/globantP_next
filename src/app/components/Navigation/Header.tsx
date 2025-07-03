"use client";

import ButtonUI from "../Forms/Button";
import LinkUI from "../Forms/Link";
import { TYPE_LINKS } from "@/app/utils/typesLinks";
import { TYPES_BUTTON } from "@/app/utils/typesButton";

type NavbarTypes = {
    custom?: string,
}
export default function Header({ custom }: NavbarTypes) {

    return (
        <header className={`w-full p-primary text-white py-8 ${custom}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <LinkUI link="/" content={"project"} variant={TYPE_LINKS.TITTLE_LINK} custom="mr-6" />
                    <nav className="flex items-center space-x-8">
                        <LinkUI link="/" content={"Home"} variant={TYPE_LINKS.NAV_LINK} />
                        <LinkUI link="/dashboard/shop" content={"Shop"} variant={TYPE_LINKS.NAV_LINK} />          </nav>
                </div>

                <div className="flex items-center space-x-4">
                    <ButtonUI content={"logIn"} variant={TYPES_BUTTON.PRIMARY} />
                    <ButtonUI content="Change Language" variant={TYPES_BUTTON.lANGUAGE} />
                </div>
            </div>
        </header>
    )
}
