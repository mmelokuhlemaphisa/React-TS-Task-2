import React from "react";
import Button from "./Button";

export default function FormInput() {
  return (
    <div
      style={{
       
        height: "",
        border: "1px solid black",
        borderRadius:"2%",
        marginTop: "5%",
        marginLeft: "2%",
        padding:"3%",
        width:"100%"
        
      }}
    >
      <h3 style={{textAlign:"center"}}>Add Links</h3>
      <form action="#" style={{ marginTop: "6%", height:"41vh", display:'flex', flexDirection:"column",marginLeft:"2%" }}>
        <label id="url" htmlFor="url">Url:</label>
        <input
          type="text"
          placeholder="add or past link"
          id="url"
          required
        />
        <br />
        <br />
        <label htmlFor="url">Title:</label>
        <input type="text" id="title" required /> <br />
        <br />
        <label htmlFor="url">Description:</label>
        <input type="text" id="descr" required style={{}} />

        <Button name="Save" color="green" />
      </form>
    </div>
  );
}
