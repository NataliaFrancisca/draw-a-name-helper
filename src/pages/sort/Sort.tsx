import { useNavigate } from "react-router-dom";
import editImage from "../../assets/edit.svg";
import NameList from "../../components/NameList/NameList";
import { useSortValue } from "../../hooks/useSortValue";
import ButtonSort from "../../components/ButtonSort/ButtonSort";

const Sort = () => {

    const navigate = useNavigate();

    const { sortValue, values, sortedValue, sortedValues } = useSortValue();

    return(
        <main className="bg-custom-gradient min-h-screen p-10 gap-8 flex flex-col md:w-2/6 md:m-auto"> 
            
            <button className="bg-button-transparent p-4 rounded-md flex w-fit mb-8" onClick={() => navigate('/register')}>
                <img src={editImage} />
            </button>
            

            <section className="gap-6 flex flex-col">
                <h1 className="text-center text-5xl font-bold">{sortedValue}</h1>

                <ButtonSort sortValue={sortValue} values={values}/>
                
                {values.length === 0 && <p className="font-medium italic text-center text-sm">ALL VALUES WERE SORTED</p>}
            </section>

            
            {sortedValues.length > 0 && <NameList names={sortedValues}/>}
            
        </main>
    )
}

export default Sort;