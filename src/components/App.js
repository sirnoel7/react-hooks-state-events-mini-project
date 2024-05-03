import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksData, updateTasksData] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleDeleteTask(id) {
    updateTasksData((data) =>
      data.filter((item, index) => {
        return index !== id;
      })
    );
  }

  function handleFilterCategory(category) {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(formData){
    updateTasksData([...tasksData, formData]);
  }

  const tasksToShow = tasksData.filter((item) => {
    if(selectedCategory === "All"){
      return true
    }
    else if (selectedCategory.length > 0) {
      return item.category === selectedCategory;
    }
    else{
      return true
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleFilterCategory={handleFilterCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToShow} handleDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
