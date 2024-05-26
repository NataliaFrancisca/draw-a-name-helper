import { useState } from "react";
import { getLocalStorage } from "../service/localStorageService";
import { getMathRandomValue } from "../utils/random-value";

export const useSortValue = () => {
    const storage = getLocalStorage();

    const [sortedValue, setSortedValue] = useState('');
    const [sortedValues, setSortedValues] = useState<Array<string>>([]);
    
    const [values, setValues] = useState<Array<string>>(storage);

    const sortValue = () => {

        console.log("SORT VALUE", values);

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

    return { values, sortedValue, sortedValues, sortValue }
};