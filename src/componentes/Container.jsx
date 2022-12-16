import React, { useState } from "react";

import TaskList from "./TaskList";//El contenedor tiene los componentes de lista de tareas y el formulario
import FormTodo from "./FormTodo";


const Container = () => { // dentro del método del contenedor se definen las constantes de lista  y setlist a esta se les asigna el valor de use estate para elvaluar el estado, contiene un array vacío porque se irá llenando mediante el usuario añada tareas
const [list, setList] = useState([]); 


const handleAddItem = addItem => { //mediante esta constante se añaden los item que corresponden a cada tarea
setList([...list, addItem]); //añade a setlist la tarea
};
return (//retorna el html con los componentes y sus respectivas propiedades
<div>
<h1 className="titletodo">TO-DO List</h1>
<FormTodo handleAddItem={handleAddItem} />
<TaskList list={list} setList={setList} />

</div>
);
};

export default Container;