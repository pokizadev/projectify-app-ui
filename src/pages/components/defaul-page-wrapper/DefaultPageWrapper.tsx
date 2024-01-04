import { FC } from "react";
import { Typography, Button } from "../../../design-system";

import "./DefaultPageWrapper.css"


type DefaulPageWrapperProps = {
    imagePath: string;
    pageTitle: string;
    btnText: string;
}
const DefaultPageWrapper: FC<DefaulPageWrapperProps> = ({ imagePath, pageTitle, btnText}) => {
    return (
        <div className="default-page-wrapper">
        <div className="default-page__content">
            <img src={imagePath} alt={pageTitle} />
            <Typography variant="paragraphLG" className="page-title">
                {pageTitle}
            </Typography>
            <Button
                shape="rounded"
                color="primary"
                size="lg"
                className="btn"
            >
                {btnText}
            </Button>
        </div>
    </div>
    )
}

export { DefaultPageWrapper };