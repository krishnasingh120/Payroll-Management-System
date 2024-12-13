import React from 'react'
import './social.css'
import { useState } from 'react';

const Social = () => {
    const [socialLinks, setSocialLinks] = useState([
        { platform: 'Instagram', link: '' },
        { platform: 'Twitter    ', link: '' },
        { platform: 'Facebook', link: '' },
      ]);
    
      const handleLinkChange = (index, platform, link) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].link = link;
        setSocialLinks(updatedLinks);
      };
    
      const handleAddLink = () => {
        setSocialLinks([...socialLinks, { platform: '', link: '' }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Social Links:', socialLinks);
      };
  return (
    <div className="social-form">
      <h2>Social</h2>

      {socialLinks.map((link, index) => (
        <div key={index} className="social-item">
          <label>{link.platform}</label>
          <input  
            type="text"
            placeholder="Paste link here"
            value={link.link}
            onChange={(e) => handleLinkChange(index, link.platform, e.target.value)}
          />
        </div>
      ))}

      <button className="add-link-button" onClick={handleAddLink}>
        + Add Link
      </button>

      <div className="button-group">
        <button type="button">Cancel</button>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Social;
