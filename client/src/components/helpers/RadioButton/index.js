import React, { Fragment, useState } from "react";
import { ISODateConverter } from "../ISODateConverter";

const RadioButton = ({ label, onChange, dataId }) => {
    const [value, setValue] = useState(false);

    const test = () => {
        setValue(!value);
    }

    return (
        <Fragment>
            <input type="radio" value={label} data-id={dataId} name="choice" onChange={onChange} />
            <label htmlFor="choice">{ ISODateConverter(label) }</label>
        </Fragment>
    )
};

export default RadioButton;