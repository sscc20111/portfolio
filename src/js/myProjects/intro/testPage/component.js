import React from "react";

const TitleBox = (props) => {
    return (
        <div className="titleBox">
            <h3>{props.title}</h3>
            <p>{props.txt}</p>
        </div>
    )
}

const TextBox = (props) => {
    return (
        <div className="txtBox">
            <p>{props.txt}</p>
        </div>
    )
}

const ImgBox = (props) => {
    return (
        <div className="imgBox">
            <img src={props.src} style={{width: 'auto', maxWidth: '100%', height: 'auto'}}></img>
        </div>
    )
}

export { TextBox, ImgBox, TitleBox };
