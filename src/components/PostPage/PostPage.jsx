import { useState, useEffect } from "react";
import "./PostPage.less";

const PostPage = () => {
    // accept a props element specify offer or need 
    const [formData, setFormData] = useState({
        courseName: '',
        level: '',
        location: '',
        time: '',
        description: ''
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    };
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-box">
                <div className="form-group">
                    <label htmlFor="courseName" className="label">Course Name:</label>
                    <input type="text" id="courseName" name="courseName" className="form-control input-text" value={formData.courseName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="level" className="label">Level:</label>
                    <input type="text" id="level" name="level" className="form-control input-text" value={formData.level} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="label">Location:</label>
                    <input type="text" id="location" name="location" className="form-control input-text" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="time" className="label">Time:</label>
                    <input type="text" id="time" name="time" className="form-control input-text" value={formData.time} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="label">Description:</label>
                    <textarea id="description" name="description" className="form-control textarea" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-button">Submit</button>
            </form>
        </div>
    );
};
  
  export default PostPage;