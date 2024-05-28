import { useNavigate } from "react-router-dom";
import editImage from "../../assets/edit.svg";
import { useSortValue } from "../../hooks/useSortValue";
import ButtonSort from "../../components/ButtonSort/ButtonSort";
import SortedList from "../../components/NameList/SortedList";

const Sort = () => {

    const navigate = useNavigate();

    const { componentMessage, sortValue, values, sortedValue, sortedValues } = useSortValue();

    return(
        <main className="bg-custom-gradient min-h-screen p-10 gap-8 flex flex-col md:w-2/6 md:m-auto"> 
            
            <button className="bg-button-transparent p-4 rounded-md flex w-fit mb-8" onClick={() => navigate('/register')}>
                <img src={editImage} alt="a pencil icon"/>
            </button>
            
            <section className="gap-6 flex flex-col">
                {sortedValue && <h2 className="text-center text-5xl font-bold">{sortedValue}</h2>}
              
                <ButtonSort sortValue={sortValue} values={values}/>

                <p className="font-medium italic text-center text-sm">{componentMessage()}</p>
            </section>
            
            {sortedValues.length > 0 && <SortedList names={sortedValues}/>}
            
        </main>
    )
}

export default Sort;