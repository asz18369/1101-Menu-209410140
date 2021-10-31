import React from "react";

const Category_40 = ({categories}) =>{
    console.log('categories',categories);
    return(
    <div className="btn-container">
        {categories.map((category,index)=>{
            return(
                <button key={index} type="button" className="filter-btn">{category}</button>
            )
        })}
      </div>
    )
}

export default Category_40;