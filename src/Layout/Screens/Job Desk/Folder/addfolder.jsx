import React, { useState } from 'react'

const Addfolder = ({onClose}) => {
  
  const [name, setName] = useState("");
  const [document, setDocument] = useState(null);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDocumentChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Document Name:', name);
    console.log('Document:', document);
    onClose(); 
  }
  return (
    <div className="add-document-modal">
      <h2>Add Document</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="document">Document:</label>
          <input
            type="file"
            id="document"
            onChange={handleDocumentChange}
            accept=".pdf,.docx,.xlsx" 
          />
          <span className="file-size-limit">Max: 10 Mb</span>
        </div>

        <div className="button-group">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>

  )
}

export default Addfolder;
