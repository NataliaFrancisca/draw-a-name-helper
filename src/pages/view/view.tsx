import { useNavigate } from "react-router-dom";
import editImage from "../../assets/edit.svg";
import ButtonDraw from "../../components/ButtonDraw/ButtonDraw";
import DrawnList from "../../components/NameList/DrawnList";
import { useDrawName } from "../../hooks/useDrawName";

const View = () => {

    const navigate = useNavigate();

    const { values, drawnName, drawnNames, onDrawName, componentMessage } = useDrawName();

    return(
        <main className="bg-custom-gradient min-h-screen p-10 gap-8 flex flex-col md:w-2/6 md:m-auto"> 
            
            <button className="bg-button-transparent p-4 rounded-md flex w-fit mb-8" onClick={() => navigate('/register')}>
                <img src={editImage} alt="a pencil icon"/>
            </button>
            
            <section className="gap-6 flex flex-col">
                {drawnName && <h2 className="text-center text-5xl font-bold">{drawnName}</h2>}
              
                <ButtonDraw drawName={onDrawName} values={values}/>

                <p className="font-medium italic text-center text-sm">{componentMessage()}</p>
            </section>
            
            {drawnNames.length > 0 && <DrawnList names={drawnNames}/>}
            
        </main>
    )
}

export default View;