"use client";

import { useFormState } from "react-dom";
import { createUserAction } from "@/actions";

const CreateUser = () => {
  const [formState, action] = useFormState(createUserAction, { message: "" });

  return (
    <form action={action} className="flex flex-col gap-3 w-1/2">
      <h1>Create New User</h1>
      <label>Full Name</label>
      <input id="name" name="name" className="border rounded p-2 w-full" />
      <label>Username</label>
      <input
        id="username"
        name="username"
        className="border rounded p-2 w-full"
      />
      <label>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className="border rounded p-2 w-full"
      />
      <input
        type="submit"
        value="Create User"
        className="rounded p-2 bg-blue-300 hover:bg-blue-200"
      />
      {formState.message && <p className="text-red-500">{formState.message}</p>}
    </form>
  );
};
export default CreateUser;
