import { useState } from "react";

export const useHandleCrud = () => {
    const [userInputValue, setUserInputValue] = useState('');
    const [userValues, setUserInputValues] = useState<Array<string>>([]);

    const [error, setError] = useState<boolean | string>(false);

    const set = () => {
        const alreadyExistThisName = userValues.some((name) => name === userInputValue);

        if(alreadyExistThisName){
            setError("This name is already defined :)");
            return false;
        }

        setUserInputValues((prev) => [...prev, userInputValue]);
        setError(false);
        return true;
    }

    const remove = (value: string) => {
        const updatedValue = userValues.filter((name) => name !== value);
        setUserInputValues(updatedValue);
    }

    return { set, remove, setUserInputValue, error, userValues }

}