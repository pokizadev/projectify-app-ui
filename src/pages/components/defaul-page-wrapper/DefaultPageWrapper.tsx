import { FC, ReactNode } from "react";
import { Typography, Button } from "../../../design-system";

import "./DefaulPageWrapper.css"


type DefaulPageWrapperProps = {
    imagePath: string;
    pageTitle: string;
    btnText: string;
}
const DefaulPageWrapper: FC<DefaulPageWrapperProps> = ({ imagePath, pageTitle, btnText}) => {
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