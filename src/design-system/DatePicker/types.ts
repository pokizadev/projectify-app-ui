import { ReactDatePickerProps } from "react-datepicker";
import { InputSize } from "../Input";

interface BaseDatePickerProps {
    selected: ReactDatePickerProps["selected"];
    onSelect?: (value: Date) => void;
    onChange: (value: Date) => void;
    placeholder: string;
    disabled?: boolean;
    inputSize?: InputSize;
    shape?: "rounded" | "circle"
}

export type DatePickerProps = BaseDatePickerProps 

export type DatePickerOnChangeDateType =
    | Date
    | null
    | [Date | null, Date | null];