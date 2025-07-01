import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LinkUI from "../Forms/Link";
import { TYPE_LINKS } from "@/app/utils/typesLinks";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="mb-8 flex space-x-20">
                    <LinkUI content="Terms of Service" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline text-gray-300" />
                    <LinkUI content="Privacy Policy" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline text-gray-300" />
                    <LinkUI content="Manage Cookies" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline text-gray-300" />
                </div>

                <div className="flex">
                    <LinkUI content={<FaYoutube />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-12" />
                    <LinkUI content={<FaFacebookF />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-12" />
                    <LinkUI content={<FaTwitter />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-12" />
                    <LinkUI content={<FaInstagram />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 " />
                </div>
            </div>
        </footer>
    )
}
