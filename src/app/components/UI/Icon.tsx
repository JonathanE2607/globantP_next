import { ReactNode } from "react";
import { MdOutlineDashboard } from "react-icons/md";

const IconUI = ({ customIcon, colorIcon }: { customIcon: ReactNode, colorIcon: ReactNode }) => {
    return (
        <div className={`w-24 h-24 bg-${customIcon} rounded-xl flex justify-center `}>
            <MdOutlineDashboard className={`w-16 h-16 text-${colorIcon} mt-4`} />
        </div>
    )
}

export default IconUI;