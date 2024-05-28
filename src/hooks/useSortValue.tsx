import { useState } from "react";
import { getLocalStorage } from "../service/localStorageService";
import { getMathRandomValue } from "../utils/random-value";

export const useSortValue = () => {
    const storage = getLocalStorage() as Array<string>;

    const [sortedValue, setSortedValue] = useState<string | boolean>(false);
    const [sortedValues, setSortedValues] = useState<Array<string>>([]);
    
    const [values, setValues] = useState<Array<string>>(storage);

    const sortValue = () => {
        if(values.length == 0){
            return false;
        }

        const numberSorted = getMathRandomValue(values);
        const valueSorted = values[numberSorted];

        setSortedValue(valueSorted);
        setSortedValues((prev) => [...prev, valueSorted]);
        
        removeSortedValue(valueSorted);
    }

    const removeSortedValue = (sorted: string) => {
        const updatedArray = values.filter((value) => value != sorted);
        setValues(updatedArray);
    }

    const componentMessage = () => {
        if(storage.length === 0){
            return "You don't have any value saved"
        }

        if(values.length === 0){
            return "ALL VALUES WERE SORTED"
        }
    }

    return { values, sortedValue, sortedValues, sortValue, componentMessage}
};