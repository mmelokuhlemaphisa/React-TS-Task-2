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
    <div style={{ marginTop: "5%", marginLeft: "10%", width: "100%" }}>
      <h3 >Saved Links</h3>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <table
          className="table"
          style={{
            borderCollapse: "collapse",
            marginTop: "5%",
            marginRight: "10%",
            textAlign: "left",
            tableLayout: "auto",
            padding: "5%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  width: "15%",
                }}
              >
                Title
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "35%",
                }}
              >
                Description
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "15%",
                }}
              >
                Tags
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "20%",
                }}
              >
                Link (Url)
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "15%",
                }}
              >
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
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal", 
                  }}
                >
                  {item.descr}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.tags}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    whiteSpace: "normal", 
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                  }}
                >
                  <a
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflowWrap: "break-word",
                      wordBreak: "break-all",
                      color: "blue",
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
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <button
                    onClick={() => onEdit(index)}
                    style={{
                      marginBottom: "5px",
                      background: "grey",
                      color: "white",
                      border: "none",
                      borderRadius: "30px",
                      width: "90%",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "30px",
                      width: "90%",
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
