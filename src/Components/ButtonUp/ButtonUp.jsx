import "./ButtonUp.css" 
import {AiOutlineCaretUp} from "react-icons/ai"


function ButtonUp (){

const scrollToHeader = () => {
    const header = document.getElementById('headerId');
    header.scrollIntoView({ behavior: 'smooth' });
  }


return (

    <div className="divButtonUp">
        <button className="buttonUp" onClick={scrollToHeader}><AiOutlineCaretUp style={{height: "3vh"}}/></button>
    </div>
)

}

export default ButtonUp