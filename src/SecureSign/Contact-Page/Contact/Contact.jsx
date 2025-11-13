

import React, { useState, useEffect, useRef, useCallback } from "react";
import DemoScheduler from "../../DemoScheduler/DemoScheduler";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import contactImg from "../../../assets/ContactImg.jpg";
import {
    MdLocalPhone,
    MdLocationOn,
    MdEmail,
} from "react-icons/md";

// 🎯 API Endpoint for secure submission
const CONTACT_API_ENDPOINT = "http://localhost:4000/api/contact";

// --- Country Codes (Your full, sorted list) ---
const countryCodes = [
    { code: "+93", name: "Afghanistan", flag: "https://flagcdn.com/w40/af.png", phoneLength: 9 },
    { code: "+374", name: "Armenia", flag: "https://flagcdn.com/w40/am.png", phoneLength: 8 },
    { code: "+994", name: "Azerbaijan", flag: "https://flagcdn.com/w40/az.png", phoneLength: 9 },
    { code: "+973", name: "Bahrain", flag: "https://flagcdn.com/w40/bh.png", phoneLength: 8 },
    { code: "+880", name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png", phoneLength: 10 },
    { code: "+975", name: "Bhutan", flag: "https://flagcdn.com/w40/bt.png", phoneLength: 8 },
    { code: "+673", name: "Brunei", flag: "https://flagcdn.com/w40/bn.png", phoneLength: 7 },
    { code: "+855", "name": "Cambodia", flag: "https://flagcdn.com/w40/kh.png", phoneLength: 9 },
    { code: "+86", name: "China", flag: "https://flagcdn.com/w40/cn.png", phoneLength: 11 },
    { code: "+995", name: "Georgia", flag: "https://flagcdn.com/w40/ge.png", phoneLength: 9 },
    { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png", phoneLength: 10 },
    { code: "+62", name: "Indonesia", flag: "https://flagcdn.com/w40/id.png", phoneLength: 10 },
    { code: "+98", name: "Iran", flag: "https://flagcdn.com/w40/ir.png", phoneLength: 10 },
    { code: "+964", name: "Iraq", flag: "https://flagcdn.com/w40/iq.png", phoneLength: 10 },
    { code: "+972", name: "Israel", flag: "https://flagcdn.com/w40/il.png", phoneLength: 9 },
    { code: "+81", name: "Japan", flag: "https://flagcdn.com/w40/jp.png", phoneLength: 10 },
    { code: "+962", name: "Jordan", flag: "https://flagcdn.com/w40/jo.png", phoneLength: 9 },
    { code: "+7", name: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png", phoneLength: 10 },
    { code: "+965", name: "Kuwait", flag: "https://flagcdn.com/w40/kw.png", phoneLength: 8 },
    { code: "+996", name: "Kyrgyzstan", flag: "https://flagcdn.com/w40/kg.png", phoneLength: 9 },
    { code: "+856", name: "Laos", flag: "https://flagcdn.com/w40/la.png", phoneLength: 8 },
    { code: "+961", name: "Lebanon", flag: "https://flagcdn.com/w40/lb.png", phoneLength: 8 },
    { code: "+60", name: "Malaysia", flag: "https://flagcdn.com/w40/my.png", phoneLength: 9 },
    { code: "+960", name: "Maldives", flag: "https://flagcdn.com/w40/mv.png", phoneLength: 7 },
    { code: "+976", name: "Mongolia", flag: "https://flagcdn.com/w40/mn.png", phoneLength: 8 },
    { code: "+95", name: "Myanmar", flag: "https://flagcdn.com/w40/mm.png", phoneLength: 9 },
    { code: "+977", name: "Nepal", flag: "https://flagcdn.com/w40/np.png", phoneLength: 10 },
    { code: "+850", name: "North Korea", flag: "https://flagcdn.com/w40/kp.png", phoneLength: 9 },
    { code: "+968", name: "Oman", flag: "https://flagcdn.com/w40/om.png", phoneLength: 8 },
    { code: "+92", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png", phoneLength: 10 },
    { code: "+970", name: "Palestine", flag: "https://flagcdn.com/w40/ps.png", phoneLength: 9 },
    { code: "+63", name: "Philippines", flag: "https://flagcdn.com/w40/ph.png", phoneLength: 10 },
    { code: "+974", name: "Qatar", flag: "https://flagcdn.com/w40/qa.png", phoneLength: 8 },
    { code: "+966", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png", phoneLength: 9 },
    { code: "+65", name: "Singapore", flag: "https://flagcdn.com/w40/sg.png", phoneLength: 8 },
    { code: "+82", name: "South Korea", flag: "https://flagcdn.com/w40/kr.png", phoneLength: 10 },
    { code: "+94", name: "Sri Lanka", flag: "https://flagcdn.com/w40/lk.png", phoneLength: 9 },
    { code: "+963", name: "Syria", flag: "https://flagcdn.com/w40/sy.png", phoneLength: 9 },
    { code: "+992", name: "Tajikistan", flag: "https://flagcdn.com/w40/tj.png", phoneLength: 9 },
    { code: "+66", name: "Thailand", flag: "https://flagcdn.com/w40/th.png", phoneLength: 9 },
    { code: "+670", name: "Timor-Leste", flag: "https://flagcdn.com/w40/tl.png", phoneLength: 8 },
    { code: "+993", name: "Turkmenistan", flag: "https://flagcdn.com/w40/tm.png", phoneLength: 8 },
    { code: "+971", name: "United Arab Emirates", flag: "https://flagcdn.com/w40/ae.png", phoneLength: 9 },
    { code: "+998", name: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png", phoneLength: 9 },
    { code: "+84", name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png", phoneLength: 9 },
    { code: "+967", name: "Yemen", flag: "https://flagcdn.com/w40/ye.png", phoneLength: 9 },
].sort((a, b) => a.name.localeCompare(b.name));

const Contact = () => {
    const initialFormData = {
        name: "", email: "", message: "", countryCode: "+91", phone: "", contactPreference: "callback",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [shakeFields, setShakeFields] = useState({ name: false, email: false, phone: false });
    const [showDemo, setShowDemo] = useState(false);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const phoneRef = useRef(null);
    const navigate = useNavigate();

    const handleSchedulerCloseAndReset = () => {
        setShowDemo(false);
        setFormData(initialFormData);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (phoneRef.current && !phoneRef.current.contains(event.target)) {
                setCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "phone") newValue = value.replace(/\D/g, "");
        else if (name === "email") newValue = value.toLowerCase();

        setFormData((prev) => ({ ...prev, [name]: newValue }));

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (name === "name" && newValue.trim() !== "") delete newErrors.name;
            else if (name === "email" && /^\S+@\S+\.\S+$/.test(newValue)) delete newErrors.email;
            else if (name === "phone") {
                if (newValue.trim().length === getPhoneLength()) delete newErrors.phone;
            }
            return newErrors;
        });
    };

    const handleCountryCodeSelect = (country) => {
        setFormData((prev) => ({
            ...prev,
            countryCode: country.code,
            phone: prev.phone.substring(0, country.phoneLength)
        }));
        setCountryDropdownOpen(false);
    };

    const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
    const getPhoneLength = () => {
        const c = countryCodes.find((c) => c.code === formData.countryCode);
        return c ? c.phoneLength : 0;
    };

    const validate = useCallback(() => {
        const newErrors = {};
        const digits = formData.phone.replace(/\D/g, "").trim();
        const trimmedEmail = formData.email.trim();
        const trimmedName = formData.name.trim();

        if (trimmedName === "") newErrors.name = "Name is required.";
        if (!isEmailValid(trimmedEmail)) newErrors.email = "Valid email is required.";
        if (!digits) newErrors.phone = "Phone number is required.";
        else if (digits.length !== getPhoneLength()) newErrors.phone = `Phone number must be ${getPhoneLength()} digits.`;

        return newErrors;
    }, [formData.name, formData.email, formData.phone, formData.countryCode]);

    const triggerShake = (fields) => {
        const updated = { name: false, email: false, phone: false };
        fields.forEach((f) => (updated[f] = true));
        setShakeFields(updated);
        setTimeout(() => setShakeFields({ name: false, email: false, phone: false }), 500);
    };

    const handleContactPreferenceChange = (e) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, contactPreference: value }));

        const validationErrors = validate();
        if (value === "appointment") {
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                triggerShake(Object.keys(validationErrors));
            } else {
                setErrors({});
                setShowDemo(true);
            }
        } else {
            setShowDemo(false);
        }
    };

    const handleAppointmentClick = () => {
        if (formData.contactPreference === "appointment") {
            const validationErrors = validate();
            if (Object.keys(validationErrors).length === 0) {
                setErrors({});
                setShowDemo(true);
            } else {
                setErrors(validationErrors);
                triggerShake(Object.keys(validationErrors));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && formData.contactPreference !== "appointment") {
            setIsSubmitting(true);
            setErrors({});

            const submissionData = {
                name: formData.name.trim() || 'Anonymous Contact',
                email: formData.email.trim(),
                message: formData.message.trim(),
                phone: `${formData.countryCode} ${formData.phone.trim()}`,
                contactPreference: formData.contactPreference,
                submissionType: 'Callback Request'
            };

            try {
                const response = await fetch(CONTACT_API_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(submissionData),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: `Server error: ${response.status} ${response.statusText}` }));
                    throw new Error(errorData.message || `Server responded with status ${response.status}`);
                }

                setIsSubmitting(false);
                setSubmittedData(submissionData);
                setShowPopup(true);
                setFormData(initialFormData);
            } catch (error) {
                console.error("Contact form submission failed:", error.message);
                setIsSubmitting(false);
                alert(`Submission failed. Error: ${error.message}`);
            }
        } else if (Object.keys(validationErrors).length !== 0) {
            triggerShake(Object.keys(validationErrors));
        }
    };

    const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode);
    const phoneMaxLength = selectedCountry ? selectedCountry.phoneLength : 15;

    const SubmissionSuccessContent = ({ data }) => {
        const displayName = data.name?.trim() || 'Not Provided';
        return (
            <>
                <h2 style={{ color: "#035C75", textAlign: "left" ,width:"450px"}}>Thank you for contacting us!</h2>
                <div className="pg" style={{ textAlign: "left" }}>
                    <p>Name : {displayName}</p>
                    <p>Phone : {data.phone}</p>
                    <p>Email : {data.email}</p>
                </div>
                <p style={{ marginTop: "30px", color: "#035C75", fontSize: "16px", textAlign: "left" }}>
                    Your Booking request has been received. Our team will contact you soon.
                </p>
                <button
                    className="cf-bn"
                    onClick={() => { setShowPopup(false); navigate("/SecureSign"); }}
                    style={{ marginTop: '30px', background: '#035C75', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' ,width:"150px"}}
                >
                    Done
                </button>
            </>
        );
    };

    return (
        <div>
            <div className="form-container">
                <div className="contact-layout">
                    <div className="left-section" style={{width:"800px"}}>
                        <div className="contact-container" >
                            <button onClick={() => navigate(-1)} className="go-back-btn">&#10094; Go Back</button>
                            <h2 style={{color:"white"}}>What to expect in our Demo!</h2>
                            <p style={{color:"white"}}>➝ A 30-min chat with a Product specialist</p>
                            <p style={{color:"white"}}>➝ Overview of the product and the key features</p>
                            <p style={{color:"white"}}>➝ Live walkthrough of how it works</p>
                            <p style={{color:"white"}}>➝ Discover product capabilities and how Securesign may help</p>
                            <p style={{color:"white"}}>➝ Discussion on your specific requirements</p>
                            <div >
                                <img src={contactImg} alt="Contact" style={{ width: '550px', height: '318px', display: 'block' ,marginTop:"50px",borderRadius:"20px"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="right-section" style={{ marginLeft: "10px" }}>
                        <h2 style={{width:"500px",marginLeft:"80px"}}>
                            Experience a solution <p style={{color:"#035C75",display:"inline"}}>demo crafted for your company</p>
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className={`input-group horizontal ${errors.name ? 'shake' : ''}`}>
                                <label>Name <span className="required">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? "error" : ""} disabled={isSubmitting} />
                                {errors.name && <div className="inline-error">{errors.name}</div>}
                            </div>

                            <div className={`input-group horizontal ${errors.email ? 'shake' : ''}`}>
                                <label>Email <span className="required">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} disabled={isSubmitting} />
                                {errors.email && <div className="inline-error">{errors.email}</div>}
                            </div>

                            <div className={`input-group horizontal ${errors.phone ? 'shake' : ''}`}>
                                <label>Phone <span className="required">*</span></label>
                                <div ref={phoneRef} style={{ position: 'relative' }}>
                                    <div className={`phone-input-container ${errors.phone ? "error" : ""}`}>
                                        <div className="phone-prefix" onClick={() => !isSubmitting && setCountryDropdownOpen(!countryDropdownOpen)}>
                                            <img src={selectedCountry?.flag} alt={selectedCountry?.name} />
                                            <span>{formData.countryCode}</span>
                                            <i className={`fas fa-caret-down arrow ${countryDropdownOpen ? "open" : ""}`}></i>
                                        </div>
                                                                                <input
                                            style={{ width: "255px" }}
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="phone-input-only"
                                            maxLength={phoneMaxLength}
                                            placeholder="Enter phone number"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {countryDropdownOpen && (
                                        <div className="country-dropdown">
                                            {countryCodes.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="country-option"
                                                    onClick={() => handleCountryCodeSelect(country)}
                                                >
                                                    <img src={country.flag} alt={country.name} />
                                                    <span>{country.name} ({country.code})</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {errors.phone && <div className="inline-error">{errors.phone}</div>}
                            </div>

                            {/* Message Input */}
                            <div className="input-group horizontal" style={{ width: "390px" }}>
                                <label>Message</label>
                                <textarea
                                    style={{ width: "359px" }}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="resizable-textarea"
                                    rows="4"
                                    placeholder="Briefly describe your requirements..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <p className="info-text" style={{ width: "480px", paddingLeft: "98px", marginTop: "-5px", fontSize:"13px", color:"#333333b2"}}>
                                Thank you for exploring Scopetree SecureSign. One of our specialists will contact you shortly.
                            </p>

                            {/* Contact Preference Radios */}
                            <div className="input-group">
                                <div className="radio-row" style={{ paddingLeft: "3px", marginTop: "-28px" }}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="contactPreference"
                                            value="callback"
                                            checked={formData.contactPreference === "callback"}
                                            onChange={handleContactPreferenceChange}
                                            disabled={isSubmitting}
                                        />
                                        Request a Callback
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contactPreference"
                                            value="appointment"
                                            checked={formData.contactPreference === "appointment"}
                                            onChange={handleContactPreferenceChange}
                                            onClick={handleAppointmentClick} // ✅ new fix
                                            disabled={isSubmitting}
                                        />
                                        Schedule an Appointment
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                                style={{ marginTop: "-5px", width:"250px", height:"30px" }}
                            >
                                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                            </button>
                        </form>

                        {/* Demo Scheduler Modal */}
                        {showDemo && (
                            <DemoScheduler
                                onClose={handleSchedulerCloseAndReset}
                                name={formData.name.trim() || 'Anonymous User'}
                                phone={`${formData.countryCode} ${formData.phone.trim()}`}
                                email={formData.email.trim()}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Submission Success Popup */}
            {showPopup && submittedData && !isSubmitting && (
                <div className="popup-overlay">
                    <div className="popup-content" style={{ textAlign: "center", padding: "30px 40px" }}>
                        <SubmissionSuccessContent data={submittedData} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;

