import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import ApiGetService from '../../Services/ApiGetService'
import "./Form.css"
import { CiSaveUp1 } from "react-icons/ci";
import { IoMdReturnLeft } from "react-icons/io";
import ApiPostService from '../../Services/ApiPostService';
import CategoryInput from '../CategoryInput/CategoryInput';
import ApiPutService from '../../Services/ApiPutService';
import {useLocation, useNavigate } from 'react-router-dom';
import save from '../../Assets/Img/save.png'
import { BiLeftTopArrowCircle } from "react-icons/ai";

function Form() {
    let url = "http://localhost:8080/api/v1/poems"
    const categories = ['Romántico heterosexual', 'Romántico homosexual', 'Elegía', 'Epigrama', 'Fantasía'];
<<<<<<< HEAD
    let [item, setItem] = useState({ genre: categories[0] })
    let [isSubmitted, setIsSubmitted] = useState(false)
=======
    let [item, setItem] = useState({genre: categories[0]})
    let navigate = useNavigate();
>>>>>>> 4ad228d5182e6181cb6d46c408e92aa9ba02883f
    const State = useLocation().state

    const notify = () => toast('Poema añadido! ');

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleSelectedCategoryChange = (category) => {
        setSelectedCategory(category);
        let temp_item = item
        temp_item["genre"] = category
        setItem(temp_item)
    };

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = item
        temp_item[name] = value
        setItem(temp_item)
    }

    function handleSubmit(event) {
        event.preventDefault();
        State ? ApiPutService(url, item, State.id) : ApiPostService(url, item)
        notify()
        setIsSubmitted(true)
    }



    return (
        <div className='FormPage-Form'>
            <Toaster />
            {isSubmitted ?
                <>
                    <h2>Volver a la página de inicio</h2>
                    <button className='b-post' onClick={() => {window.location.href = "/"}}><IoMdReturnLeft /></button>
                </>
                :
                <form onSubmit={handleSubmit} method="post">
                    <button className='b-post'><CiSaveUp1  /></button>
                    <div className='Form-row'>
                        <label>URL de la imagen:</label>
                        <div className="form-row-div">
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="Url de la Imagén" required pattern="https?://.+" />
                        </div>
                    </div>
                    <div className='Form-row'>
                        <label>Título:</label>
                        <div className="form-row-div">
                            <input type="text" name="title" onChange={handleChange} id="" placeholder="Título" required />
                        </div>
                    </div>
                    <div className='Form-row'>
                        <label>Género:</label>
                        <CategoryInput categories={categories} selectedcategory={selectedCategory} onSelectedcategoryChange={handleSelectedCategoryChange} />

                    </div>
                    <div className='Form-row'>
                        <label>Autor:</label>
                        <div className="form-row-div">
                            <input type="text" name="author" onChange={handleChange} id="" placeholder="Autor" required />
                        </div>
                    </div>
                    <div className='Form-ta'>
                        <label>Tu Poema:</label>
                        <textarea rows="8" type="text" onChange={handleChange} name="poem" id="" required />
                    </div>
                </form>
            }

        </div>
    )
}

export default Form