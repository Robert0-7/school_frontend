import { useState } from 'react';
import './AdmissionForm.css';

function AdmissionForm({ isOpen, onClose }) {
  // State now includes all fields from the Java entity
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: ''
  });

  // State for handling submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // This is the submission logic to send data to the Spring Boot backend
    try {
      const response = await fetch('/api/admissions/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: 'Server error occurred'
        }));
        throw new Error(errorData.message || `Error: ${response.status}`);
      }

      // If submission is successful
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      alert('Application submitted successfully!');
      onClose(); // Close the modal

    } catch (err) {
      console.error('Submission failed:', err);
      setError(err.message || 'Network error - Please check if the server is running');
      alert('Submission failed - Please try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group required-field">
              <label>Student's Full Name *</label>
              <input name="studentName" type="text" required onChange={handleInputChange} />
            </div>

            <div className="form-group required-field">
              <label>Parent's Phone *</label>
              <input name="phone" type="tel" required onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-grid secondary-fields">
            <div className="form-group">
              <label>Student's Date of Birth</label>
              <input name="dateOfBirth" type="date" onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Applying for Grade</label>
              <select name="grade" onChange={handleInputChange}>
                <option value="">Select Grade</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                {/* Add more grades as needed */}
              </select>
            </div>

            <div className="form-group">
              <label>Parent's Name</label>
              <input name="parentName" type="text" onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Email Id</label>
              <input name="email" type="email" onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label>Full Address</label>
              <input name="address" type="text" onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label>Previous School (if any)</label>
              <input name="previousSchool" type="text" onChange={handleInputChange} />
            </div>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;