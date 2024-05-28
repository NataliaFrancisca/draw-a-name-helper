import { useState } from "react";
import { getLocalStorage } from "../service/localStorageService";
import { getMathRandomValue } from "../utils/random-value";

export const useDrawName = () => {
    const storage = getLocalStorage() as Array<string>;

    const [drawnName, setDrawnName] = useState<string | boolean>(false);
    const [drawnNames, setDrawnNames] = useState<Array<string>>([]);
    
    const [values, setValues] = useState<Array<string>>(storage);

    const onDrawName = () => {
        if(values.length == 0){
            return false;
        }

        const randomNumber = getMathRandomValue(values);
        const drawnName = values[randomNumber];

        setDrawnName(drawnName);
        setDrawnNames((prev) => [...prev, drawnName]);
        
        removeDrawnName(drawnName);
    }

    const removeDrawnName = (drawn: string) => {
        const updatedArray = values.filter((value) => value != drawn);
        setValues(updatedArray);
    }

    const componentMessage = () => {
        if(storage.length === 0){
            return "You don't have any value saved"
        }

        if(values.length === 0){
            return "ALL VALUES WERE DRAWN"
        }
    }

    return { values, drawnName, drawnNames, onDrawName, componentMessage}
};