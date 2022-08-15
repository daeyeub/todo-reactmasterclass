import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IToDo {
  toDo: string;
}
function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IToDo>();
  const handleValid = (data: IToDo) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please Write a to do!!" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
