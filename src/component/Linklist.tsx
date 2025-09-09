import React from "react";

export default function Linklist() {
  return (
    <div>
      <div></div>
      <form
        action="#"
        style={{
          marginTop: "5%",
          border: "1px solid black",
          marginLeft: "4%",
          height: "49vh",
          borderRadius:"2%"
        }}
      >
        <h1 style={{textAlign:"center"}}>Link List</h1>
        <label id="url" htmlFor="url">
          Url:
        </label>
<br />
        <br />

        <label htmlFor="url">Title:</label>
        <br /> 
        <br />
        <label htmlFor="url">Description:</label>
      </form>
    </div>
  );
}
