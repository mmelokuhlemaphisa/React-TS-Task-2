import React, { useState } from "react";
import Button from "./Button";
import Linklist from "./Linklist";
import type { LinkItem } from "./Linklist";

export default function FormInput() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [tags, setTags] = useState("");
  const [items, setItems] = useState<LinkItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !title || !descr || !tags) {
      alert("Please fill in all fields before saving.");
      return;
    }

    const newItem: LinkItem = { url, title, descr, tags };

    if (editIndex !== null) {
      // update existing
      const updated = [...items];
      updated[editIndex] = newItem;
      setItems(updated);
      setEditIndex(null);
      alert("Link updated successfully!");
    } else {
      // add new
      setItems([...items, newItem]);
      alert("Link saved successfully!");
    }

    setUrl("");
    setTitle("");
    setDescr("");
    setTags("");
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      setItems(items.filter((_, i) => i !== index));
      alert("Link delete successfully!");
    }
  };

  const handleEdit = (index: number) => {
    const item = items[index];
    setUrl(item.url);
    setTitle(item.title);
    setDescr(item.descr);
    setTags(item.tags);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "10%",
      }}
    >
      <div
        style={{
          height: "",
          border: "1px solid black",
          borderRadius: "2%",
          marginTop: "5%",
          marginLeft: "2%",
          padding: "3%",
          width: "50%",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Add Links</h3>

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "6%",
            height: "41vh",
            display: "flex",
            flexDirection: "column",
            marginLeft: "2%",
          }}
        >
          <label htmlFor="url">Url:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste link"
            required
          />

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="descr">Description:</label>
          <input
            type="text"
            id="descr"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            required
          />

          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="descr"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />

          <Button name={editIndex !== null ? "Update" : "Save"} color="green" />
        </form>
      </div>
      <div style={{ width: "50%", height: "48vh", marginTop: "6%" }}>
        <Linklist items={items} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
