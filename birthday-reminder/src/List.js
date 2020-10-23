import React from "react";
import {useState} from "react";
import "./List.css";

const List = ({people}) =>{
    return(
        people.map(arg => {
            const {id,name,age,image} = arg;
            return(
               <div className="section" key={id}>
                <img src={image} alt="Sorry :("></img>
                <div className="container-age-name">
                    <span className="name">{name}</span>
                    <div className="age">{age} years</div>
                </div>
                </div>
            )
        })
    )
}

export default List;