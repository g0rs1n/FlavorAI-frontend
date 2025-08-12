
import {
    TUseFormRegister,
    TPath
} from "@/lib/types/types";
import {
    RegisterOptions,
    FieldValues,
} from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize'

export interface IFieldsProps<TForm extends FieldValues> {
    id: string;
    placeholder?: string;
    type: string;
    name: TPath<TForm>;
    register?: TUseFormRegister<TForm>;
    validationRules?: RegisterOptions<TForm,TPath<TForm>>;
    styles: string; 
}

export default function Fields <TForm extends FieldValues> (props: IFieldsProps<TForm>) {

    const {
        id,
        placeholder,
        type,
        name,
        register,
        validationRules,
        styles,
    } = props

    const commonProps = {
        id,
        placeholder,
        className: styles,
        autoComplete: "off",
        ...(register && register(name, validationRules))
    }

    if (type === "textarea") {
        return (
            <TextareaAutosize
                minRows={1}
                maxRows={3}
                {
                    ...commonProps
                }
                style={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                }}
            />
        )
    }

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={styles}
            autoComplete="off"
            {
                ...(register && register(name, validationRules))
            }
        />
    )
}