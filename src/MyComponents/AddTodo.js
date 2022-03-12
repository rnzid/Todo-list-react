import React, { useState } from "react";

export const AddTodo = (props) => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
    const submit = ()=>{

}
    return (
    <div className="container my-3">
        <h3>AddTodo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            aria-describedby="title"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
          Todo Description
          </label>
          <input
            type="text"
            class="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
