import React from 'react';
import Form from 'react-bootstrap/Form';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
const Lists = ({Tododata, Togle, Delete, Visible}) => {
    const remove = (id) => {
        Delete(id)
    }
    // const Togle = (id) => {
    //     Togle(id)
    // }

    if(!Visible){
        return(
                    <div key={Tododata.id} className="item item-enter-done">
                        <span>{Tododata.text}</span>
                        <div className='btnBox'>
                            <button className="check" data-id={Tododata.id} onClick={()=>Togle(Tododata.id)}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </button>
                            <button className="edit" data-id={Tododata.id}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button className="delete" data-id={Tododata.id} onClick={()=>remove(Tododata.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
        ) 
    }else{
        return(
                <div key={Tododata.id} className="item Completed">
                    <span className="textLine">
                        {Tododata.text}
                    </span>
                    <div className='btnBox'>
                        <button className="return" data-id={Tododata.id} onClick={()=>Togle(Tododata.id)}>
                            <FontAwesomeIcon icon={faRotateLeft} />
                        </button>
                        <button className="delete" data-id={Tododata.id} onClick={()=>remove(Tododata.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
        )
    }
}
// const CompletedLists = (props) => {
//     console.log(props.status)
//     return(

//     ) 
// }


export default Lists;
// export {CompletedLists}