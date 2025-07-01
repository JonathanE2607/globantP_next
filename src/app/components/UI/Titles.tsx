import React from "react";
import { TYPES_TITTLE } from "@/app/utils/typesTitles";

type TittleTypes = {
    content?: string,
    variant: TYPES_TITTLE,
    custom?: string,
    children?: React.ReactElement | React.ReactElement[]
}
const TittleUI = ({ content, variant, custom, children }: TittleTypes) => {

    let tittleElement: React.ReactElement = <></>;
    const childrenElement = content ? content : children;

    switch (variant) {
        case TYPES_TITTLE.PRINCIPAL:
            tittleElement = (
                <h2 className={`font-Roboto text-7xl text-white font-semibold ${custom}`}>
                    {childrenElement}
                </h2>
            )
            break;

        case TYPES_TITTLE.SECONDARY:
            tittleElement = (
                <h2 className={`font-Roboto text-4xl text-white font-semibold ${custom}`}>
                    {childrenElement}
                </h2>
            )
            break;

        case TYPES_TITTLE.ABOUT:
            tittleElement = (
                <h2 className={custom}>
                    {childrenElement}
                </h2>
            )
            break;
    }

    return tittleElement;
}

export default TittleUI;