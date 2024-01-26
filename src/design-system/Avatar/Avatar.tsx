import React, { FC } from "react";
import { trimWhiteSpaces, getNameInitials } from "../utils";
import { sizeClassNames, shapeClassNames } from "./classnames";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";
type AvatarShape = "rounded" | "circle";


type AvatarProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    className?: string;
    firstName: string;
    lastName: string;
    imageUrl?: string;
    onClick?: () => void;
};

const Avatar: FC<AvatarProps> = (props) => {
    const { size, shape, className,firstName, lastName, imageUrl, onClick } = props;

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    const finalClassNames = `avatar ${sizeClassName} ${shapeClassName} ${
        className || ""
    }`;

    return (
        <button className={trimWhiteSpaces(finalClassNames)} onClick={onClick}>
            { imageUrl ? (<img src={imageUrl} alt={`${firstName} ${lastName}`}/>) : getNameInitials(`${firstName} ${lastName}`)}
        </button>
    );
};

export { Avatar };
