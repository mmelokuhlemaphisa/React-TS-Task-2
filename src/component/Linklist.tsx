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
  editIndex: number | null;
}

const LinkList: React.FC<LinkListProps> = ({
  items,
  onEdit,
  onDelete,
  editIndex,
}) => {
  return (
    <div className="list-box">
      <h3>Saved Links</h3>

      {items.length === 0 ? (
        <p>
          No links found. <br /> Add your first link using the form provided.
        </p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Link (URL)</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td data-label="Link">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.url}
                    </a>
                  </td>

                  <td data-label="Title">{item.title}</td>

                  <td data-label="Description">{item.descr}</td>

                  <td data-label="Tags">{item.tags}</td>

                  {/* ACTIONS */}
                  <td data-label="Actions">
                    <div className="actions">
                      <button className="btn" onClick={() => onEdit(index)}>
                        {editIndex === index ? "Update" : "Edit"}
                      </button>

                      <button
                        className="btn"
                        style={{ background: "red" }}
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LinkList;
