import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import HTTPService from '../../Services/HTTPService'
import "./Form.css"
import { CiSaveUp1 } from "react-icons/ci";
import { IoMdReturnLeft } from "react-icons/io";
import CategoryInput from '../CategoryInput/CategoryInput';
import {useLocation } from 'react-router-dom';


function Form() {
    let url = "http://localhost:8082/api/v1/poems"
    const categories = ['Romántico heterosexual', 'Romántico homosexual', 'Elegía', 'Epigrama', 'Fantasía'];
    let [item, setItem] = useState({ genre: categories[0] })
    let [isSubmitted, setIsSubmitted] = useState(false)
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

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     State ? HTTPService().ApiPutService(url, item, State.id) : HTTPService().ApiPostService(url, item)
    //     notify()
    //     setIsSubmitted(true)
    // }
    
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const ApiPutService = await HTTPService().ApiPutService(url, item, State.id);
    //         setItem(ApiPutService);
    //     } catch (error) {
    //         console.log(error);

    //     }
    // };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(item.url);
            if (response.ok) {
                const data = await response.json();
                let temp_item = item;
                temp_item["title"] = data.title;
                temp_item["author"] = data.author;
                temp_item["poem"] = data.poem;
                setItem(temp_item);
                State ? await HTTPService().ApiPutService(url, temp_item, State.id) : await HTTPService().ApiPostService(url, temp_item);
                notify();
                setIsSubmitted(true);
            } else {
                console.log("Error fetching data from URL");
            }
        } catch (error) {
            console.log(error);
        }
    };

    
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
                    <button className='b-return' onClick={() => {window.location.href = "/"}}><IoMdReturnLeft /></button>
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