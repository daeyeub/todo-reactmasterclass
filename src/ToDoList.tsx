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
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password1: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "Write Required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com eamils allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Write Required",
            minLength: 10,
          })}
          placeholder="first Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "Write Required" })}
          placeholder="last Name"
        />
        <span>{errors?.lastName?.message}</span>

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
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", { required: "Write Required" })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
