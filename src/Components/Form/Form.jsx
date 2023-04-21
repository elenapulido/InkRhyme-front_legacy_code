import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import HTTPService from '../../Services/HTTPService'
import "./Form.css"
import { CiSaveUp1 } from "react-icons/ci";
import CategoryInput from '../CategoryInput/CategoryInput';
import {useLocation } from 'react-router-dom';
import { IoMdReturnLeft } from "react-icons/io";
import { MdCancelPresentation, MdFileUpload } from "react-icons/md";


function Form() {
    
    const categories = ['Lírica', 'Épica', 'Dramática', 'Romántica'];
    let [item, setItem] = useState({ genre: categories[0] })
    let [isSubmitted, setIsSubmitted] = useState(false)
    const State = useLocation().state

    const notify = () => toast('Poema añadido!');

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
        State ? HTTPService().ApiPutService(item, State.id) : HTTPService().ApiPostService(item)
        notify()
        setIsSubmitted(true)
    }
    
    
    useEffect(()=>{
        if (State) {
            
        }
    })

    return (
        <div className='FormPage-Form'>
            <Toaster />
            {isSubmitted ?
                <>
                    <h2 className='return-h2'>Volver a la página de inicio</h2>
                    <button className='b-return' onClick={() => { window.location.href = "/" }}><IoMdReturnLeft /></button>
                </>
                :
                <form onSubmit={handleSubmit} method="post">
                    
                    <div className='Form-row'>
                        <label>URL de la imagen:</label>
                        <div className="form-row-div">
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="Url de la Imagen" required pattern="https?://.+" />
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
                    <button><MdFileUpload size={25} /></button>
                    <button><MdCancelPresentation onClick={() => {window.location.href = "/"}} size={25} /></button>
                </form>
            }

        </div>
    )
}

export default Form