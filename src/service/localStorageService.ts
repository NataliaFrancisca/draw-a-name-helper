const STORAGE_KEY = "NAMES_STORAGE";

const setLocalStorage = (data: Array<string>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const getLocalStorage = () => {
    const storage = localStorage.getItem(STORAGE_KEY);

    if(!storage){
        console.log("STORAGE NOT AVAILABLE");
        return [];
    }

    return JSON.parse(storage);
}

export { setLocalStorage, getLocalStorage }