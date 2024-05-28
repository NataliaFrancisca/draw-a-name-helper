import { FormEvent, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../service/localStorageService";

export const useHandleCrud = () => {
    const storage = getLocalStorage();

    const [userInputValue, setUserInputValue] = useState('');
    const [userValues, setUserInputValues] = useState<Array<string>>([...storage]);

    const [error, setError] = useState<boolean | string>(false);

    const set = () => {
        const alreadyExistThisName = userValues.some((name) => name === userInputValue);

        if(alreadyExistThisName){
            setError("This name is already defined :)");
            return false;
        }

        setUserInputValues((prev) => [...prev, userInputValue]);
        setLocalStorage([...userValues, userInputValue]);
        setError(false);
        return true;
    }

    const remove = (value: string) => {
        const updatedValue = userValues.filter((name) => name !== value);
        setLocalStorage(updatedValue);
        setUserInputValues(updatedValue);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        const response = set();

        if(response){
            e.currentTarget.reset();
        }
    }

    return { storage, remove, setUserInputValue, onSubmit, error, userValues }

}