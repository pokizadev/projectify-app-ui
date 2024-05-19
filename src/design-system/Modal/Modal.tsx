import React from "react";
import { positionClassNames } from "./classnames";
import "./Modal.css";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";

interface ModalProps {
    show: boolean;
    position: "center" | "right";
    children: React.ReactNode;
    className?: string;
    closeIcon?: string;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    show,
    position,
    className,
    closeIcon,
    onClose,
    children,
}) => {
    const positionClassName = positionClassNames[position];
    const finalOverlayClassNames = trimWhiteSpaces(
        `modal-overlay ${positionClassName} ${className || ""}`
    );

    return (
        <>
            {show ? (
                <div className={finalOverlayClassNames}>
                    <div className="modal">{closeIcon && (
                            <button onClick={onClose} className="close-btn">
                               <Icon iconName="x"/>
                            </button>
                        )}{children}</div>
                </div>
            ) : null}
        </>
    );
};

export { Modal };