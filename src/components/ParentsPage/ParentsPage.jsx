import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ParentsPage.less";

const ParentsPage = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/need-tutor-page");
    };

    const [formData, setFormData] = useState({
        courseName: '',
        level: '',
        location: '',
        time: '',
        description: '',
        days: {
            monday: { selected: false, time: '' },
            tuesday: { selected: false, time: '' },
            wedensday: { selected: false, time: '' },
            thursday: { selected: false, time: '' },
            friday: { selected: false, time: '' },
            saturday: { selected: false, time: '' },
            sunday: { selected: false, time: '' },
        },
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

    const handleDayChange = (day) => {
        setFormData(prevState => ({
            ...prevState,
            days: {
                ...prevState.days,
                [day]: {
                    ...prevState.days[day],
                    selected: !prevState.days[day].selected
                }
            }
        }));
    };

    const handleTimeChange = (day, time) => {
        setFormData(prevState => ({
            ...prevState,
            days: {
                ...prevState.days,
                [day]: {
                    ...prevState.days[day],
                    time: time
                }
            }
        }));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-box">
                <h1>To find a Tutor</h1>
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
                <div className="form-group days-checkbox-group">
                    {Object.entries(formData.days).map(([day, { selected, time }]) => (
                        <div key={day}>
                            <input 
                                type="checkbox" 
                                id={day} 
                                checked={selected} 
                                onChange={() => handleDayChange(day)} 
                            />
                            <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                            {selected && (
                                <input 
                                    type="time" 
                                    value={time} 
                                    onChange={(e) => handleTimeChange(day, e.target.value)} 
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="label">Description:</label>
                    <textarea id="description" name="description" className="form-control textarea" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group button-group">
                    <button type="submit" className="btn btn-primary submit-button">Submit</button>
                    <button type="button" className="btn btn-primary cancel-button" onClick={handleHomeClick}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

  export default ParentsPage;