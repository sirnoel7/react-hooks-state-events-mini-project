import React from "react";

function CategoryFilter({categories,handleFilterCategory,selectedCategory}) {

  const buttons = categories.map(category=>{
    return(
      <button className={selectedCategory === category?"selected":""} key={category} id={category} onClick={()=>handleFilterCategory(category)}>{category}</button>
    )
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;