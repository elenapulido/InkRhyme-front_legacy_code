import React, { useState } from "react";
import { Button, Form, TextArea } from 'semantic-ui-react';
import HTTPService from "../../Services/HTTPService";
import "./EditForm.css"


const EditForm = ({ data, setData}) => {
    const [editedData, setEditedData] = useState({ ...data });
   

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData({ ...editedData, [name]: value });

    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedData = await HTTPService().ApiPutService(editedData.id, editedData);
            setData(updatedData);
        } catch (error) {
            console.log(error);

        }
    };


    return (
        <div className='main-form'>
           
            <Form className='create-form' onSubmit={handleSubmit}>
                <Form.Field>
                    <label>TÍTULO</label>
                    <input value={editedData.title} onChange={handleInputChange} type="text" id="title" name="title" />
                </Form.Field>
                <Form.Field>
                    <label>AUTOR</label>
                    <input value={editedData.author} onChange={handleInputChange}
                        rows={7} id="author" name="author" />
                </Form.Field>
                <Form.Field label='TIPO' id="theme" control='select' onChange={handleInputChange}
                    value={editedData.genre} >
                    <label>GÉNERO</label>
                   <option value='Lírica'>Lírica</option>
                    <option value='Épica'>Épica</option>
                    <option value='Dramática'>Dramática</option>
                    <option value='Romántica'>Romántica</option>
                </Form.Field>
                <Form.Field>
                    <label>POEMA</label>
                    
                    <textarea rows="8" type="text" value={editedData.poem} onChange={handleInputChange} name="poem" id="poem" required />
                </Form.Field>
                <Form.Field>
                    <label>IMAGEN</label>
                    <input type="url" id="url" name="url" value={editedData.url} onChange={handleInputChange} autoComplete="off" placeholder="Url de la Imagen" required pattern="https?://.+" />
                </Form.Field>
                
                <div>
                    <Button type="submit" content='Enviar' icon='like'></Button>
                    <Button type="submit" content='Volver' icon='cancel' onClick={() => {window.location.href = "/"}}></Button>
                </div>
            </Form>
        </div>
    );
};

export default EditForm;
