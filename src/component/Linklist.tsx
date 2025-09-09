import React from 'react'

export default function Linklist() {
  return (
    <div>
       <form action="#" style={{ marginTop: "6%" }}>
              <label id="url" htmlFor="url">Url:</label>
              <input
                type="text"
                placeholder="add or past link"
                id="url"
                required
              />{" "}
              <br />
              <br />
              <label htmlFor="url">Title:</label>
              <input type="text" id="title" required /> <br />
              <br />
              <label htmlFor="url">Description:</label>
              <input type="text" id="descr" required style={{}} />
      
            </form>
    </div>
  )
}
