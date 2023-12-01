import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PostTutorPage.less";
import { useDbAdd, useDbData } from '../../utilities/firebaseUtils';

const PostTutorPage = () => {
    
    const navigate = useNavigate();
    const [data, error] = useDbData('/Tutor-Page');
    const [addData, result] = useDbAdd('/Tutor-Page');

    useEffect(() => {
        if (data) {
          console.log('Data from database:', data);
        }
      }, [data]);
    
    useEffect(() => {
    if (error) {
        console.error('Error fetching data:', error);
    }
    }, [error]);

    const handleHomeClick = () => {
        navigate("/tutor-page");
    };

    const categoryColorMapping = {
        "Science": "#2ecc71",
        "Reading": "#3498db",
        "Math": "#e74c3c",
        "Art": "#9b59b6", 
        "Writing": "#e67e22" 
    };

    const [formData, setFormData] = useState({
        name: '',
        level: '',
        location: '',
        time: '',
        description: '',
        category: 'Science',
        days: {
            monday: { selected: false, startTime: '', endTime: '' },
            tuesday: { selected: false, startTime: '', endTime: '' },
            wednesday: { selected: false, startTime: '', endTime: '' },
            thursday: { selected: false, startTime: '', endTime: '' },
            friday: { selected: false, startTime: '', endTime: '' },
            saturday: { selected: false, startTime: '', endTime: '' },
            sunday: { selected: false, startTime: '', endTime: '' },
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
        const selectedDays = Object.entries(formData.days)
        .filter(([day, data]) => data.selected)
        .map(([day, data]) => `${day.substring(0, 2).toUpperCase()} ${data.startTime}-${data.endTime}`)
        .join(', ');

        const submitData = {
            name: formData.name,
            level: formData.level,
            location: formData.location,
            time: selectedDays,
            description: formData.description,
            category: formData.category
        };

        alert(`Form submitted with data: ${JSON.stringify(submitData)}`);
        addData(submitData);
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
    
    const handleTimeChange = (day, time, isStartTime) => {
        setFormData(prevState => ({
            ...prevState,
            days: {
                ...prevState.days,
                [day]: {
                    ...prevState.days[day],
                    ...(isStartTime ? { startTime: time } : { endTime: time })
                }
            }
        }));
    };
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-box">
                <h1>To become a Tutor</h1>
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input type="text" id="name" name="name" className="form-control input-text" value={formData.name} onChange={handleChange} />
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
                    <label htmlFor="category" className="label">Category:</label>
                    <select id="category" name="category" className="form-control input-text" value={formData.category} onChange={handleChange}>
                        {Object.entries(categoryColorMapping).map(([category]) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group days-checkbox-group">
                {Object.entries(formData.days).map(([day, { selected, startTime, endTime }]) => (
                    <div key={day}>
                        <input 
                            type="checkbox" 
                            id={day} 
                            checked={selected} 
                            onChange={() => handleDayChange(day)} 
                        />
                        <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                        {selected && (
                            <>
                                <input 
                                    type="time" 
                                    value={startTime} 
                                    onChange={(e) => handleTimeChange(day, e.target.value, true)} 
                                />
                                <input 
                                    type="time" 
                                    value={endTime} 
                                    onChange={(e) => handleTimeChange(day, e.target.value, false)} 
                                />
                            </>
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
  
  export default PostTutorPage;