import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text:"",
    category:""
  });

  function handleFormChange(event){
    const {name, value} = event.target;
    setFormData(formData =>({...formData, [name]: value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text:"",
      category:""
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {categories.map(item=>{
            if(item!=="All"){
              return(
                <option key={item} value={item}>{item}</option>
              )
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
