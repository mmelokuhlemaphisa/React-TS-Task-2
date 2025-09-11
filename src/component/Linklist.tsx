import React from "react";

export interface LinkItem {
  url: string;
  title: string;
  descr: string;
  tags: string;
}

interface LinkListProps {
  items: LinkItem[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const LinkList: React.FC<LinkListProps> = ({ items, onEdit, onDelete }) => {
  return (
    <div style={{ marginTop: "5%", marginLeft: "10%" }}>
      <h3>Saved Links</h3>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            // margin: "0 auto",
            marginTop: "2%",
            marginRight: "10%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Title
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Description
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Tags
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Link (Url)
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.title}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.descr}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.tags}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    maxWidth: "100px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    style={{
                      width: "200px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.url}
                  </a>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={() => onEdit(index)}
                    style={{
                      marginRight: "5px",

                      background: "grey",
                      color: "white",
                      border: "none",
                      borderRadius: "30px",
                      width: "100%",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    style={{
                      marginTop: "2%",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "30px",
                      width: "100%",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LinkList;
