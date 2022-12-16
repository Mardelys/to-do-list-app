import React, { useState } from 'react';
//Se declara una constante a la cual se le asigna la funcionalidad de la sección del formulario, esto permite que pueda añadirse nuevas tareas, Se utiliza el estado para definir como esta la descripción que será lo que el usuario ingrese, En este caso esta vacío porque no se ha modificado,
const FormTodo = props=>{
   const {handleAddItem} = props;// se define una constande a la que se le añaden las propiedades o parametros done, id y description
   const [description, setDescription] = useState('');
   const handleSubmit = e =>{
      e.preventDefault();
      handleAddItem({ //dentro de este método se especifican las caracteristicas y este puede utilizarse en cualquier parte del código ya que estan definidas, al usuarlo este sobreentiende que esto debe generar cada vez que es llamado
         done: false,
         id: (+new Date()).toString(),//se genera un id único utilizando la fecha en la que el usuario ingresa la tarea + la cadena que ingresa en el input. 
         description
      });
      setDescription('');// Es el estado modificado por el usuario al ingresar una tarea en el input
   }
   return (// Retorna el código html en el navegador mostrando el input donde el usuario ingresará la tarea.
      <form onSubmit={handleSubmit}>
        {/*(D)*/}
        <div className="todo-list">
          <div className="file-input">
            {/*(F-2)*/}
            <input
              type="text"
              className="text"
              value={description}//Se dice que input tendra el valor de la descripción de este modo puede ser definido por el usuario y asi mismo poder hacer que funcione para que puedan añadirse las tareas correctamente
              onChange={e => setDescription(e.target.value)}
            />
            {/*(A)*/}
            <button //al boton de añadir se le coloca una condicional, mientras este vacío el input esta desabilitadp, si tiene información funcionará para añadir la tarea.
              className="button pink"
              disabled={description ? "" : "disabled"}>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  };
  //Es importante exportar el componente para que pueda ser utilizado sin inconvenientes en App.js.
  export default FormTodo;
   
