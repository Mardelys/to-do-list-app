import React from "react";
import Checkbox from "./Checkbox";//se importa el componente checkbox

const TaskList = (props) => {//se declara una constante tasklist que tendrá props
// (C)
// (C)
const { list, setList } = props;//se define la constante list y setlist que tammbien contendra props.

const onChangeStatus = (e) => {//se crea la constante que representa en cambio de estado, ésta evalúa un evento 
const { name, checked } = e.target;//estas constantes evaluaran los eventos de si esta hecha la tarea.

// (E)/ esta constante recorre el array list para determinar que tareas estan hechas y cuales no. evaluandolas por una condicional, despues las setea en la lista evaluada, y actualizada.
const updateList = list.map((item) => ({
...item,
done: item.id === name ? checked : item.done
}));
setList(updateList);
};

// (D)// (D) esta constante se encarga de evaluar el evento de bprrado de algun elemento de la lista de tareas, filtra la lista determinada por las tareas que la componen y la inspecciona mediante una condicional, si esta hecha se elimina, y se recarga la lista nuevamente, actualizada cpn los cambios
const onClickRemoveItem = e => {
const updateList = list.filter((item) => !item.done);
setList(updateList);
};

// (A-2) //Se dibujan los item en la lista si no hay items aparece por defecto No tasks, de ser lo contrario se reflejará el item con el valor asignado por el usuario atraves del input de texto
const chk = list.map((item) => (
<Checkbox key={item.id}/*key identificador único en react*/ data={item} onChange={onChangeStatus} />
));
return (
<div className="todo-list">
{/*(A-1)*/}
{list.length ? chk : "No tasks"}{/*recorre el array y si todo esta hecho retorna que no hay mas tareas*/}
{/*(B)*/}
{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete all done
</button>
</p>
) : null}
</div>
);
};

export default TaskList;