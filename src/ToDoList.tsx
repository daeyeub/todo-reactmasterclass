import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true, minLength: 10 })}
          placeholder="first Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="last Name"
        />
        <input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
          placeholder="password"
        />
        <input
          {...register("password1", { required: true })}
          placeholder="password1"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
