//WHAT WORKS RIGHT NOWWWWW!!!
// src/pages/Register.js
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
// import '../styles/Register.css';

// const Register = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     teamName: '',
//     competitionLevel: '',
//     ageGroup: '',
//     teamGender: '',
//     dayOfWeek: '',
//     numberOfPlayers: '',
//     managerFirstName: '',
//     managerLastName: '',
//     managerEmail: '',
//     managerPhone: '',
//     paymentMethod: '',
//     creditCardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const [errors, setErrors] = useState({});

//   const nextStep = () => {
//     if (validateForm()) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = {
//       1: ['teamName', 'competitionLevel', 'ageGroup', 'teamGender', 'dayOfWeek', 'numberOfPlayers'],
//       2: ['managerFirstName', 'managerLastName', 'managerEmail', 'managerPhone'],
//       3: ['paymentMethod', 'creditCardNumber', 'expiryDate', 'cvv']
//     };

//     requiredFields[step].forEach(field => {
//       if (!formData[field]) {
//         newErrors[field] = 'This field is required';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const getInputClass = (field) => (errors[field] ? 'is-invalid' : '');

//   return (
//     <Container fluid className="register-container">
//       <h2 className="register-title">Team Registration</h2>
//       <div className="progress-bar-container">
//         <ProgressBar now={(step / 4) * 100} />
//       </div>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           {step === 1 && (
//             <div className="form-step">
//               <h3>Step 1: Team Information</h3>
//               <p>Please provide your team's basic information.</p>
//               <Form>
//                 <Form.Group controlId="teamName">
//                   <Form.Label>Team Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="teamName"
//                     placeholder="Team Name"
//                     value={formData.teamName}
//                     onChange={handleChange}
//                     className={getInputClass('teamName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="competitionLevel">
//                   <Form.Label>Competition Level (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="competitionLevel"
//                     value={formData.competitionLevel}
//                     onChange={handleChange}
//                     className={getInputClass('competitionLevel')}
//                   >
//                     <option value="">Select Competition Level</option>
//                     <option>Competitive</option>
//                     <option>Recreational</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.competitionLevel}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="ageGroup">
//                   <Form.Label>Age Group (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="ageGroup"
//                     value={formData.ageGroup}
//                     onChange={handleChange}
//                     className={getInputClass('ageGroup')}
//                   >
//                     <option value="">Select Age Group</option>
//                     <option>Adult (18+)</option>
//                     <option>Teenager (13-17)</option>
//                     <option>Kids (8-12)</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.ageGroup}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="teamGender">
//                   <Form.Label>Team Gender (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="teamGender"
//                     value={formData.teamGender}
//                     onChange={handleChange}
//                     className={getInputClass('teamGender')}
//                   >
//                     <option value="">Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamGender}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="dayOfWeek">
//                   <Form.Label>Day of the Week to Play Games (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="dayOfWeek"
//                     value={formData.dayOfWeek}
//                     onChange={handleChange}
//                     className={getInputClass('dayOfWeek')}
//                   >
//                     <option value="">Select Day of the Week</option>
//                     <option>Monday</option>
//                     <option>Tuesday</option>
//                     <option>Wednesday</option>
//                     <option>Thursday</option>
//                     <option>Friday</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.dayOfWeek}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="numberOfPlayers">
//                   <Form.Label>Number of Players - min 7, max 12 (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="numberOfPlayers"
//                     value={formData.numberOfPlayers}
//                     onChange={handleChange}
//                     className={getInputClass('numberOfPlayers')}
//                   >
//                     <option value="">Select Number of Players</option>
//                     {[...Array(6)].map((_, i) => (
//                       <option key={i + 7}>{i + 7}</option>
//                     ))}
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.numberOfPlayers}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={nextStep} className="mt-3">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="form-step">
//               <h3>Step 2: Manager Information</h3>
//               <p>Please provide the contact information for the team's manager.</p>
//               <Form>
//                 <Form.Group controlId="managerFirstName">
//                   <Form.Label>First Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerFirstName"
//                     placeholder="First Name"
//                     value={formData.managerFirstName}
//                     onChange={handleChange}
//                     className={getInputClass('managerFirstName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerFirstName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerLastName">
//                   <Form.Label>Last Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerLastName"
//                     placeholder="Last Name"
//                     value={formData.managerLastName}
//                     onChange={handleChange}
//                     className={getInputClass('managerLastName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerLastName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerEmail">
//                   <Form.Label>Email (required)</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="managerEmail"
//                     placeholder="something@example.com"
//                     value={formData.managerEmail}
//                     onChange={handleChange}
//                     className={getInputClass('managerEmail')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerEmail}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerPhone">
//                   <Form.Label>Phone Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerPhone"
//                     placeholder="(XXX) XXX - XXXX"
//                     value={formData.managerPhone}
//                     onChange={handleChange}
//                     className={getInputClass('managerPhone')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerPhone}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={prevStep} className="mt-3">
//                   Go Back
//                 </Button>
//                 <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="form-step">
//               <h3>Step 3: Payment</h3>
//               <p>A $200 deposit is required to complete your team's registration. Please enter your payment details.</p>
//               <Form>
//                 <Form.Group controlId="paymentMethod">
//                   <Form.Label>Payment Method (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="paymentMethod"
//                     value={formData.paymentMethod}
//                     onChange={handleChange}
//                     className={getInputClass('paymentMethod')}
//                   >
//                     <option value="">Select Payment Method</option>
//                     <option>Credit Card</option>
//                     <option>Debit Card</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.paymentMethod}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="creditCardNumber">
//                   <Form.Label>Card Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="creditCardNumber"
//                     placeholder="XXXX - XXXX - XXXX - XXXX"
//                     value={formData.creditCardNumber}
//                     onChange={handleChange}
//                     className={getInputClass('creditCardNumber')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.creditCardNumber}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="expiryDate">
//                   <Form.Label>Expiry Date (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YYYY"
//                     value={formData.expiryDate}
//                     onChange={handleChange}
//                     className={getInputClass('expiryDate')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.expiryDate}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="cvv">
//                   <Form.Label>CVV (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="cvv"
//                     placeholder="XXX"
//                     value={formData.cvv}
//                     onChange={handleChange}
//                     className={getInputClass('cvv')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.cvv}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <div className="d-flex justify-content-between">
//                 <Button variant="dark" onClick={prevStep} className="mt-3">
//                   Go Back
//                 </Button>
//                 <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                   Next Step
//                 </Button>
//                 </div>
//               </Form>
//             </div>
//           )}
//          {step === 4 && (
//             <div className="form-step">
//                 <h3>Step 4: Thank You</h3>
//                 <p>Thank you for registering to the Ottawa Soccer Champions League.</p>
//                 <p>Shortly you will find a confirmation in your email.</p>
//                 <div className="d-flex justify-content-center">
//                 <Button variant="dark" href="/" className="mt-3">
//                     Continue to Home Page
//                 </Button>
//                 </div>
//             </div>
//             )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;

























//new addition

// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
// import { Calendar } from 'react-date-range'; // Make sure to install 'react-date-range'
// import '../styles/Register.css';

// const Register = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     teamName: '',
//     competitionLevel: '',
//     ageGroup: '',
//     teamGender: '',
//     dayOfWeek: '',
//     numberOfPlayers: '',
//     managerFirstName: '',
//     managerLastName: '',
//     managerEmail: '',
//     managerPhone: '',
//     practiceDays: [],
//     practiceTimes: '',
//     paymentMethod: '',
//     creditCardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const [errors, setErrors] = useState({});

//   const nextStep = () => {
//     if (validateForm()) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handlePracticeDaysChange = (day) => {
//     setFormData((prevData) => {
//       const updatedPracticeDays = prevData.practiceDays.includes(day)
//         ? prevData.practiceDays.filter(d => d !== day)
//         : [...prevData.practiceDays, day];
//       return { ...prevData, practiceDays: updatedPracticeDays };
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = {
//       1: ['teamName', 'competitionLevel', 'ageGroup', 'teamGender', 'dayOfWeek', 'numberOfPlayers'],
//       2: ['managerFirstName', 'managerLastName', 'managerEmail', 'managerPhone'],
//       4: ['paymentMethod', 'creditCardNumber', 'expiryDate', 'cvv']
//     };

//     requiredFields[step]?.forEach(field => {
//       if (!formData[field]) {
//         newErrors[field] = 'This field is required';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const getInputClass = (field) => (errors[field] ? 'is-invalid' : '');

//   return (
//     <Container fluid className="register-container">
//       <h2 className="register-title">Team Registration</h2>
//       <div className="progress-bar-container">
//         <ProgressBar now={(step / 5) * 100} />
//       </div>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           {step === 1 && (
//             <div className="form-step">
//               <h3>Step 1: Team Information</h3>
//               <p>Please provide your team's basic information.</p>
//               <Form>
//                 <Form.Group controlId="teamName">
//                   <Form.Label>Team Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="teamName"
//                     placeholder="Team Name"
//                     value={formData.teamName}
//                     onChange={handleChange}
//                     className={getInputClass('teamName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="competitionLevel">
//                   <Form.Label>Competition Level (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="competitionLevel"
//                     value={formData.competitionLevel}
//                     onChange={handleChange}
//                     className={getInputClass('competitionLevel')}
//                   >
//                     <option value="">Select Competition Level</option>
//                     <option>Competitive</option>
//                     <option>Recreational</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.competitionLevel}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="ageGroup">
//                   <Form.Label>Age Group (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="ageGroup"
//                     value={formData.ageGroup}
//                     onChange={handleChange}
//                     className={getInputClass('ageGroup')}
//                   >
//                     <option value="">Select Age Group</option>
//                     <option>Adult (18+)</option>
//                     <option>Teenager (13-17)</option>
//                     <option>Kids (8-12)</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.ageGroup}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="teamGender">
//                   <Form.Label>Team Gender (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="teamGender"
//                     value={formData.teamGender}
//                     onChange={handleChange}
//                     className={getInputClass('teamGender')}
//                   >
//                     <option value="">Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamGender}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="dayOfWeek">
//                   <Form.Label>Day of the Week to Play Games (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="dayOfWeek"
//                     value={formData.dayOfWeek}
//                     onChange={handleChange}
//                     className={getInputClass('dayOfWeek')}
//                   >
//                     <option value="">Select Day of the Week</option>
//                     <option>Monday</option>
//                     <option>Tuesday</option>
//                     <option>Wednesday</option>
//                     <option>Thursday</option>
//                     <option>Friday</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.dayOfWeek}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="numberOfPlayers">
//                   <Form.Label>Number of Players - min 7, max 12 (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="numberOfPlayers"
//                     value={formData.numberOfPlayers}
//                     onChange={handleChange}
//                     className={getInputClass('numberOfPlayers')}
//                   >
//                     <option value="">Select Number of Players</option>
//                     {[...Array(6)].map((_, i) => (
//                       <option key={i + 7}>{i + 7}</option>
//                     ))}
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.numberOfPlayers}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={nextStep} className="mt-3">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="form-step">
//               <h3>Step 2: Manager Information</h3>
//               <p>Please provide the contact information for the team's manager.</p>
//               <Form>
//                 <Form.Group controlId="managerFirstName">
//                   <Form.Label>First Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerFirstName"
//                     placeholder="First Name"
//                     value={formData.managerFirstName}
//                     onChange={handleChange}
//                     className={getInputClass('managerFirstName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerFirstName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerLastName">
//                   <Form.Label>Last Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerLastName"
//                     placeholder="Last Name"
//                     value={formData.managerLastName}
//                     onChange={handleChange}
//                     className={getInputClass('managerLastName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerLastName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerEmail">
//                   <Form.Label>Email (required)</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="managerEmail"
//                     placeholder="something@example.com"
//                     value={formData.managerEmail}
//                     onChange={handleChange}
//                     className={getInputClass('managerEmail')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerEmail}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerPhone">
//                   <Form.Label>Phone Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerPhone"
//                     placeholder="(XXX) XXX - XXXX"
//                     value={formData.managerPhone}
//                     onChange={handleChange}
//                     className={getInputClass('managerPhone')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerPhone}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={prevStep} className="mt-3">
//                   Go Back
//                 </Button>
//                 <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="form-step">
//               <h3>Step 3: Practice Schedule</h3>
//               <p>Select the days and times for your team's practice sessions.</p>
//               <Form>
//                 <Form.Group controlId="practiceDays">
//                   <Form.Label>Practice Days</Form.Label>
//                   <div>
//                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//                       <Form.Check
//                         key={day}
//                         type="checkbox"
//                         label={day}
//                         onChange={() => handlePracticeDaysChange(day)}
//                         checked={formData.practiceDays.includes(day)}
//                       />
//                     ))}
//                   </div>
//                 </Form.Group>
//                 <Form.Group controlId="practiceTimes">
//                   <Form.Label>Practice Times</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="practiceTimes"
//                     placeholder="E.g., 6:00 PM - 8:00 PM"
//                     value={formData.practiceTimes}
//                     onChange={handleChange}
//                     className={getInputClass('practiceTimes')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.practiceTimes}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Button variant="dark" onClick={prevStep} className="mt-3">
//                   Go Back
//                 </Button>
//                 <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 4 && (
//             <div className="form-step">
//               <h3>Step 4: Payment</h3>
//               <p>A $200 deposit is required to complete your team's registration. Please enter your payment details.</p>
//               <Form>
//                 <Form.Group controlId="paymentMethod">
//                   <Form.Label>Payment Method (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="paymentMethod"
//                     value={formData.paymentMethod}
//                     onChange={handleChange}
//                     className={getInputClass('paymentMethod')}
//                   >
//                     <option value="">Select Payment Method</option>
//                     <option>Credit Card</option>
//                     <option>Debit Card</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.paymentMethod}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="creditCardNumber">
//                   <Form.Label>Card Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="creditCardNumber"
//                     placeholder="XXXX - XXXX - XXXX - XXXX"
//                     value={formData.creditCardNumber}
//                     onChange={handleChange}
//                     className={getInputClass('creditCardNumber')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.creditCardNumber}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="expiryDate">
//                   <Form.Label>Expiry Date (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YYYY"
//                     value={formData.expiryDate}
//                     onChange={handleChange}
//                     className={getInputClass('expiryDate')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.expiryDate}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="cvv">
//                   <Form.Label>CVV (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="cvv"
//                     placeholder="XXX"
//                     value={formData.cvv}
//                     onChange={handleChange}
//                     className={getInputClass('cvv')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.cvv}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <div className="d-flex justify-content-between">
//                   <Button variant="dark" onClick={prevStep} className="mt-3">
//                     Go Back
//                   </Button>
//                   <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                     Next Step
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           )}
//           {step === 5 && (
//             <div className="form-step">
//               <h3>Step 5: Thank You</h3>
//               <p>Thank you for registering to the Ottawa Soccer Champions League.</p>
//               <p>Shortly you will find a confirmation in your email.</p>
//               <div className="d-flex justify-content-center">
//                 <Button variant="dark" href="/" className="mt-3">
//                   Continue to Home Page
//                 </Button>
//               </div>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;








//trying again
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import '../styles/Register.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    competitionLevel: '',
    ageGroup: '',
    teamGender: '',
    dayOfWeek: '',
    numberOfPlayers: '',
    managerFirstName: '',
    managerLastName: '',
    managerEmail: '',
    managerPhone: '',
    paymentMethod: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
    practiceDays: [],
  });

  const [errors, setErrors] = useState({});
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedPracticeDays, setSelectedPracticeDays] = useState([]);
  const [selectAllDays, setSelectAllDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectPracticeDays = (date) => {
    const dateString = date.toISOString().split('T')[0];
    setSelectedPracticeDays((prevDays) =>
      prevDays.includes(dateString)
        ? prevDays.filter((day) => day !== dateString)
        : [...prevDays, dateString]
    );
  };

  const handleSelectAllDaysChange = (e) => {
    const { name, checked } = e.target;
    const dayIndex = {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
    }[name];

    setSelectAllDays({
      ...selectAllDays,
      [name]: checked,
    });

    if (checked) {
      const newSelectedPracticeDays = [];
      for (let d = new Date(calendarDate.getFullYear(), 0, 1); d.getFullYear() === calendarDate.getFullYear(); d.setDate(d.getDate() + 1)) {
        if (d.getDay() === dayIndex) {
          newSelectedPracticeDays.push(new Date(d).toISOString().split('T')[0]);
        }
      }
      setSelectedPracticeDays((prevDays) => [...new Set([...prevDays, ...newSelectedPracticeDays])]);
    } else {
      const newSelectAllDays = { ...selectAllDays, [name]: checked };
      const activeDays = Object.keys(newSelectAllDays).filter(day => newSelectAllDays[day]);

      if (activeDays.length === 0) {
        setSelectedPracticeDays([]);
      } else {
        const remainingPracticeDays = [];
        activeDays.forEach(activeDay => {
          const activeDayIndex = {
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
          }[activeDay];

          for (let d = new Date(calendarDate.getFullYear(), 0, 1); d.getFullYear() === calendarDate.getFullYear(); d.setDate(d.getDate() + 1)) {
            if (d.getDay() === activeDayIndex) {
              remainingPracticeDays.push(new Date(d).toISOString().split('T')[0]);
            }
          }
        });
        setSelectedPracticeDays(remainingPracticeDays);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = {
      1: ['teamName', 'competitionLevel', 'ageGroup', 'teamGender', 'dayOfWeek'],
      2: ['managerFirstName', 'managerLastName', 'managerEmail', 'managerPhone'],
      4: ['paymentMethod', 'creditCardNumber', 'expiryDate', 'cvv']
    };

    requiredFields[step]?.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getInputClass = (field) => (errors[field] ? 'is-invalid' : '');

  const handleNextStep = () => {
    setFormData({
      ...formData,
      practiceDays: selectedPracticeDays,
    });
    nextStep();
  };

  return (
    <Container fluid className="register-container">
      <h2 className="register-title">Team Registration</h2>
      <div className="progress-bar-container">
        <ProgressBar now={(step / 5) * 100} />
      </div>
      <Row className="justify-content-center">
        <Col md={6}>
          {step === 1 && (
            <div className="form-step">
              <h3>Step 1: Team Information</h3>
              <p>Please provide your team's basic information.</p>
              <Form>
                <Form.Group controlId="teamName">
                  <Form.Label>Team Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="teamName"
                    placeholder="Team Name"
                    value={formData.teamName}
                    onChange={handleChange}
                    className={getInputClass('teamName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.teamName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="competitionLevel">
                  <Form.Label>Competition Level (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="competitionLevel"
                    value={formData.competitionLevel}
                    onChange={handleChange}
                    className={getInputClass('competitionLevel')}
                  >
                    <option value="">Select Competition Level</option>
                    <option>Competitive</option>
                    <option>Recreational</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.competitionLevel}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="ageGroup">
                  <Form.Label>Age Group (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className={getInputClass('ageGroup')}
                  >
                    <option value="">Select Age Group</option>
                    <option>Adult (18+)</option>
                    <option>Teenager (13-17)</option>
                    <option>Kids (8-12)</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.ageGroup}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="teamGender">
                  <Form.Label>Team Gender (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="teamGender"
                    value={formData.teamGender}
                    onChange={handleChange}
                    className={getInputClass('teamGender')}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.teamGender}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="dayOfWeek">
                  <Form.Label>Day of the Week to Play Games (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="dayOfWeek"
                    value={formData.dayOfWeek}
                    onChange={handleChange}
                    className={getInputClass('dayOfWeek')}
                  >
                    <option value="">Select Day of the Week</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.dayOfWeek}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="dark" onClick={nextStep} className="mt-3">
                  Next Step
                </Button>
              </Form>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <h3>Step 2: Manager Information</h3>
              <p>Please provide the contact information for the team's manager.</p>
              <Form>
                <Form.Group controlId="managerFirstName">
                  <Form.Label>First Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="managerFirstName"
                    placeholder="First Name"
                    value={formData.managerFirstName}
                    onChange={handleChange}
                    className={getInputClass('managerFirstName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerFirstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="managerLastName">
                  <Form.Label>Last Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="managerLastName"
                    placeholder="Last Name"
                    value={formData.managerLastName}
                    onChange={handleChange}
                    className={getInputClass('managerLastName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerLastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="managerEmail">
                  <Form.Label>Email (required)</Form.Label>
                  <Form.Control
                    type="email"
                    name="managerEmail"
                    placeholder="something@example.com"
                    value={formData.managerEmail}
                    onChange={handleChange}
                    className={getInputClass('managerEmail')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerEmail}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="managerPhone">
                  <Form.Label>Phone Number (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="managerPhone"
                    placeholder="(XXX) XXX - XXXX"
                    value={formData.managerPhone}
                    onChange={handleChange}
                    className={getInputClass('managerPhone')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerPhone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="dark" onClick={prevStep} className="mt-3">
                  Go Back
                </Button>
                <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
                  Next Step
                </Button>
              </Form>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <h3>Step 3: Practice Schedule</h3>
              <p>Select the practice days for your team.</p>
              <Form>
                <Form.Group controlId="selectAllDays">
                  <Form.Label>Select Days for Practice</Form.Label>
                  <Form.Check type="checkbox" label="Sunday" name="sunday" onChange={handleSelectAllDaysChange} checked={selectAllDays.sunday} />
                  <Form.Check type="checkbox" label="Monday" name="monday" onChange={handleSelectAllDaysChange} checked={selectAllDays.monday} />
                  <Form.Check type="checkbox" label="Tuesday" name="tuesday" onChange={handleSelectAllDaysChange} checked={selectAllDays.tuesday} />
                  <Form.Check type="checkbox" label="Wednesday" name="wednesday" onChange={handleSelectAllDaysChange} checked={selectAllDays.wednesday} />
                  <Form.Check type="checkbox" label="Thursday" name="thursday" onChange={handleSelectAllDaysChange} checked={selectAllDays.thursday} />
                  <Form.Check type="checkbox" label="Friday" name="friday" onChange={handleSelectAllDaysChange} checked={selectAllDays.friday} />
                  <Form.Check type="checkbox" label="Saturday" name="saturday" onChange={handleSelectAllDaysChange} checked={selectAllDays.saturday} />
                </Form.Group>
                <Calendar
                  value={calendarDate}
                  onChange={setCalendarDate}
                  tileClassName={({ date }) => {
                    const dateString = date.toISOString().split('T')[0];
                    if (formData.dayOfWeek.toLowerCase() === date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()) {
                      return 'game-day';
                    }
                    if (selectedPracticeDays.includes(dateString)) {
                      return 'practice-day';
                    }
                    return null;
                  }}
                  onClickDay={handleSelectPracticeDays}
                />
                <div className="legend">
                  <div><span className="game-day-legend"></span> Game Day</div>
                  <div><span className="practice-day-legend"></span> Practice Day</div>
                </div>
                <Button variant="dark" onClick={prevStep} className="mt-3">
                  Go Back
                </Button>
                <Button variant="dark" onClick={handleNextStep} className="mt-3 ml-2">
                  Next Step
                </Button>
              </Form>
            </div>
          )}
          {step === 4 && (
            <div className="form-step">
              <h3>Step 4: Payment</h3>
              <p>A $200 deposit is required to complete your team's registration. Please enter your payment details.</p>
              <Form>
                <Form.Group controlId="paymentMethod">
                  <Form.Label>Payment Method (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className={getInputClass('paymentMethod')}
                  >
                    <option value="">Select Payment Method</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.paymentMethod}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="creditCardNumber">
                  <Form.Label>Card Number (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="creditCardNumber"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={formData.creditCardNumber}
                    onChange={handleChange}
                    className={getInputClass('creditCardNumber')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.creditCardNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="expiryDate">
                  <Form.Label>Expiry Date (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YYYY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className={getInputClass('expiryDate')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.expiryDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="cvv">
                  <Form.Label>CVV (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    placeholder="XXX"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={getInputClass('cvv')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvv}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="dark" onClick={prevStep} className="mt-3">
                    Go Back
                  </Button>
                  <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
                    Next Step
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {step === 5 && (
            <div className="form-step">
              <h3>Step 5: Thank You</h3>
              <p>Thank you for registering to the Ottawa Soccer Champions League.</p>
              <p>Shortly you will find a confirmation in your email.</p>
              <div className="d-flex justify-content-center">
                <Button variant="dark" href="/" className="mt-3">
                  Continue to Home Page
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
