import React, { FC } from "react";
import { trimWhiteSpaces, getNameInitials } from "../utils";
import { sizeClassNames, shapeClassNames } from "./classnames";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";
type AvatarShape = "rounded" | "circle";
type AvatarType = "letters" | "photo" | "icon";

type AvatarProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    className?: string;
    type?: AvatarType;
    children: React.ReactNode;
    imageUrl?: string;
};

const Avatar: FC<AvatarProps> = (props) => {
    const { size, shape, className, type, children, imageUrl } = props;

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    let typeElement: React.ReactNode = children;

    if (type === "letters" && typeof children === "string") {
        const letters = getNameInitials(children);
        typeElement = <span>{letters}</span>;
    } else if (type === "photo" && imageUrl) {
        typeElement = <img src={imageUrl} alt="Avatar" />;
    }

    const finalClassNames = `avatar ${sizeClassName} ${shapeClassName} ${
        className || ""
    }`;

    return (
        <button className={trimWhiteSpaces(finalClassNames)}>
            {typeElement}
        </button>
    );
};

export { Avatar };
