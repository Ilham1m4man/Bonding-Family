import { useState } from 'react';

function useToggle(defaultValue = false) {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHandler = (event) => {
        setValue(event);
    };

    return [value, onValueChangeHandler];
}

export default useToggle;