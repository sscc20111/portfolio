import React from 'react';

const Lists = (props) => {
    return(
        <>
            {Array.isArray(props.ListItem) ? (
            props.ListItem.map((item, index) =>  (
                <div key={index} className="item">
                    <input type="radio" className="fake__input"/>
                    <label htmlFor="" className="check__btn" data-id={index}>
                        <i className="fas fa-check"></i>
                    </label>
                    <span className="item_name">
                        {item}
                    </span>
                    <button className="item__edit">
                        <i className="fas fa-pen" data-id={index}></i>
                    </button>
                    <button className="item__delete">
                        <i className="fas fa-trash" data-id={index}></i>
                    </button>
                </div>
            ))) : null}
        </>
    ) 
}


export default Lists;