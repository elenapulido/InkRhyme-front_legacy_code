import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import HTTPService from '../../Services/HTTPService'
import { IoMdReturnLeft } from "react-icons/io";
import CategoryInput from '../CategoryInput/CategoryInput';
import {useLocation } from 'react-router-dom';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "./Form2.css"

function Form2() {
    
    const categories = ['Lírica', 'Épica', 'Dramática', 'Romántica'];
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
        <div className='main-form'>
            <Toaster />
            {isSubmitted ?
                <>
                    <h2 className='return-h2'>Volver a la página de inicio</h2>
                    <button className='b-return' onClick={() => {window.location.href = "/"}}><IoMdReturnLeft /></button>
                </>
                :
                <Form className='create-form' onSubmit={handleSubmit} method="post">                    
                    <Form.Field>
                        <label>URL de la imagen:</label>                        
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="URL de la imagen" required pattern="https?://.+" />                       
                    </Form.Field>
                    <Form.Field>
                        <label>Título:</label>                        
                            <input type="text" name="title" onChange={handleChange} id="" placeholder="Título" required />                        
                    </Form.Field>
                    <Form.Field>
                        <label>Género:</label>
                        <CategoryInput categories={categories} selectedcategory={selectedCategory} onSelectedcategoryChange={handleSelectedCategoryChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Autor:</label>                        
                            <input type="text" name="author" onChange={handleChange} id="" placeholder="Autor" required />                        
                    </Form.Field>
                    <Form.Field>
                        <label>Tu Poema:</label>
                        <TextArea rows={8} type="text" onChange={handleChange} name="poem" id="" required />
                    </Form.Field>
                    <Button type="submit" content='Enviar' icon='like' ></Button>
                    <Button type="submit" content='Cancelar' icon='cancel' onClick={() => {window.location.href = "/"}}></Button>
                </Form>
            }

        </div>
    )
}

export default Form2