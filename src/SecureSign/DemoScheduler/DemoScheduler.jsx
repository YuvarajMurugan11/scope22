import React, { useState, useEffect, useRef } from "react";
import { format, addDays } from "date-fns";

// --- CONFIGURATION ---
// IMPORTANT: This points to the local Node.js server running on port 3000.
// When deploying, replace this with your actual, live server URL (e.g., 'https://api.yourdomain.com/api/schedule').
const EMAIL_API_ENDPOINT = "http://localhost:4000/api/schedule";

// All India Time Slots (IST)
const INDIA_TIME_SLOTS = ["10:30", "12:00", "14:00", "15:30", "17:00", "18:30", "20:00"];

const TIMEZONES = [
    { country: "Afghanistan", id: "Asia/Kabul", code: "AF" },
    { country: "Armenia", id: "Asia/Yerevan", code: "AM" },
    { country: "Azerbaijan", id: "Asia/Baku", code: "AZ" },
    { country: "Bahrain", id: "Asia/Bahrain", code: "BH" },
    { country: "Bangladesh", id: "Asia/Dhaka", code: "BD" },
    { country: "Bhutan", id: "Asia/Thimphu", code: "BT" },
    { country: "Brunei", id: "Asia/Brunei", code: "BN" },
    { country: "Cambodia", id: "Asia/Phnom_Penh", code: "KH" },
    { country: "China", id: "Asia/Shanghai", code: "CN" },
    { country: "Georgia", id: "Asia/Tbilisi", code: "GE" },
    { country: "India", id: "Asia/Kolkata", code: "IN" },
    { country: "Indonesia", id: "Asia/Jakarta", code: "ID" },
    { country: "Iran", id: "Asia/Tehran", code: "IR" },
    { country: "Iraq", id: "Asia/Baghdad", code: "IQ" },
    { country: "Israel", id: "Asia/Jerusalem", code: "IL" },
    { country: "Japan", id: "Asia/Tokyo", code: "JP" },
    { country: "Jordan", id: "Asia/Amman", code: "JO" },
    { country: "Kazakhstan", id: "Asia/Almaty", code: "KZ" },
    { country: "Kuwait", id: "Asia/Kuwait", code: "KW" },
    { country: "Kyrgyzstan", id: "Asia/Bishkek", code: "KG" },
    { country: "Laos", id: "Asia/Vientiane", code: "LA" },
    { country: "Lebanon", id: "Asia/Beirut", code: "LB" },
    { country: "Malaysia", id: "Asia/Kuala_Lumpur", code: "MY" },
    { country: "Maldives", id: "Indian/Maldives", code: "MV" },
    { country: "Mongolia", id: "Asia/Ulaanbaatar", code: "MN" },
    { country: "Myanmar", id: "Asia/Yangon", code: "MM" },
    { country: "Nepal", id: "Asia/Kathmandu", code: "NP" },
    { country: "North Korea", id: "Asia/Pyongyang", code: "KP" },
    { country: "Oman", id: "Asia/Muscat", code: "OM" },
    { country: "Pakistan", id: "Asia/Karachi", code: "PK" },
    { country: "Palestine", id: "Asia/Gaza", code: "PS" },
    { country: "Philippines", id: "Asia/Manila", code: "PH" },
    { country: "Qatar", id: "Asia/Qatar", code: "QA" },
    { country: "Saudi Arabia", id: "Asia/Riyadh", code: "SA" },
    { country: "Singapore", id: "Asia/Singapore", code: "SG" },
    { country: "South Korea", id: "Asia/Seoul", code: "KR" },
    { country: "Sri Lanka", id: "Asia/Colombo", code: "LK" },
    { country: "Syria", id: "Asia/Damascus", code: "SY" },
    { country: "Tajikistan", id: "Asia/Dushanbe", code: "TJ" },
    { country: "Thailand", id: "Asia/Bangkok", code: "TH" },
    { country: "Timor-Leste", id: "Asia/Dili", code: "TL" },
    { country: "Turkmenistan", id: "Asia/Ashgabat", code: "TM" },
    { country: "United Arab Emirates", id: "Asia/Dubai", code: "AE" },
    { country: "Uzbekistan", id: "Asia/Tashkent", code: "UZ" },
    { country: "Vietnam", id: "Asia/Ho_Chi_Minh", code: "VN" },
    { country: "Yemen", id: "Asia/Aden", code: "YE" },
];


export default function DemoScheduler({ onClose = () => { }, name, phone, email }) {
    // --- SCHEDULER STATE ---
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [userTimeZone, setUserTimeZone] = useState("");
    const [showTZ, setShowTZ] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const dropdownRef = useRef();
    const hasSubmittedRef = useRef(false);
    // ⭐️ MODIFICATION 1: Initialize to TRUE. Assume success immediately upon modal open.
    const [isBookingSuccessful, setIsBookingSuccessful] = useState(true); 
    const [emailAttempted, setEmailAttempted] = useState({ success: null, message: '' }); 

    // Filter out Saturday (6) and Sunday (0) for the next 30 days
    const days = Array.from({ length: 30 }, (_, i) => addDays(new Date(), i)).filter(
        (d) => d.getDay() !== 0 && d.getDay() !== 6
    );

    // --- 1. INITIAL TIMEZONE AND DATE SETUP ---
    useEffect(() => {
        // 1. Set initial timezone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let matched = TIMEZONES.find(c => c.id === tz);
        if (!matched) matched = TIMEZONES.find(c => tz.includes(c.id.split("/")[1]));
        if (!matched) matched = TIMEZONES.find(c => c.country === "India");
        if (matched) setUserTimeZone(matched.id);

        // 2. Ensure initial selectedDate is a valid weekday
        if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
            const nextWeekday = days[0] || new Date();
            setSelectedDate(nextWeekday);
        }
    }, []); // Initial load only

    // --- 2. TIME SLOT CALCULATION ---
    useEffect(() => {
        if (!userTimeZone) return;
        const now = new Date();
        // Get the current time in the user's selected timezone
        const nowInTZ = new Date(now.toLocaleString("en-US", { timeZone: userTimeZone }));

        const calculatedSlots = INDIA_TIME_SLOTS.map(time => {
            const [hour, minute] = time.split(":").map(Number);
            const date = new Date(selectedDate);
            // Set the IST time on the selected date
            date.setHours(hour, minute, 0, 0);
            // Convert that IST time to the user's timezone for display and comparison
            const converted = new Date(date.toLocaleString("en-US", { timeZone: userTimeZone }));
            return {
                time, // IST time for internal use
                label: converted.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase(), // Display time
                slotInTZ: converted, // Date object in user's TZ for "now" comparison
            };
        }).filter(({ slotInTZ }) => {
            // Only show slots that are in the future if the selected date is today in the user's TZ
            const todayString = format(new Date(now.toLocaleString("en-US", { timeZone: userTimeZone })), 'yyyy-MM-dd');
            const selectedDateString = format(slotInTZ, 'yyyy-MM-dd');
            const isSelectedTodayInTZ = selectedDateString === todayString;

            if (isSelectedTodayInTZ) return slotInTZ.getTime() > nowInTZ.getTime();

            return true;
        });

        // Auto-advance date if the currently selected day has no remaining slots
        const selectedDateString = format(selectedDate, 'yyyy-MM-dd');
        if (calculatedSlots.length === 0 && days.length > 0) {
            const currentIndex = days.findIndex(d => format(d, 'yyyy-MM-dd') === selectedDateString);

            if (currentIndex !== -1 && currentIndex < days.length - 1) {
                const nextDay = days[currentIndex + 1];
                if (nextDay) {
                    setSelectedDate(nextDay);
                    // Return early to let the effect run again with the new date
                    return;
                }
            }
        }

        setTimeSlots(calculatedSlots);
        setSelectedTime("");
    }, [selectedDate, userTimeZone]);

    // --- 3. DROPDOWN CLICK HANDLER ---
    useEffect(() => {
        const handleClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowTZ(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Function to handle sending the confirmation email via an external API
    const sendConfirmationEmail = async (bookingData) => {
        // Safety check: Don't send mail if the recipient email is missing
        if (!bookingData.email) {
            const message = "Cannot send booking request: User email address is missing.";
            console.warn(message);
            return { success: false, message: message };
        }

        // Structure the data payload for an external service
        const emailPayload = {
            name: bookingData.name.trim() || 'Anonymous User',
            email: bookingData.email,
            phone: bookingData.phone,
            date_formatted: bookingData.date_formatted,
            time_user_tz: bookingData.time_user_tz,
            time_ist: bookingData.time_ist,
            timezone_id: bookingData.timezone_id,
            timezone_location: bookingData.timezone_location,
            booked_at_utc: new Date().toISOString(), // Timestamp of submission
        };

        try {
            const response = await fetch(EMAIL_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary authentication headers for your backend here
                },
                body: JSON.stringify(emailPayload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Email API endpoint failed:", response.status, errorText);

                if (response.status === 0) {
                    return { success: false, message: `Could not connect to the backend server at ${EMAIL_API_ENDPOINT}. Is the server.js script running?` };
                }

                return { success: false, message: `Server returned status ${response.status}. Details: ${errorText}` };
            }

            const result = await response.json();
            return { success: true, message: result.message || "Booking data successfully sent to backend endpoint." };

        } catch (error) {
            console.error("Network error when calling email service endpoint:", error);
            if (error.message.includes('Failed to fetch')) {
                return { success: false, message: `Connection refused. Please ensure your backend server (server.js) is running locally on ${EMAIL_API_ENDPOINT}` };
            }
            return { success: false, message: "A network error prevented the booking data from being sent." };
        }
    }


    // --- 4. HANDLE CONFIRMATION AND SUBMISSION START (EMAIL ONLY) ---
    const handleSubmission = async (bookingData) => {
        // The delay and 'Processing' state logic have been removed/simplified
        
        const emailResult = await sendConfirmationEmail(bookingData);
        setEmailAttempted(emailResult);

        // ⭐️ MODIFICATION 2: Only flip to FALSE if the submission failed.
        if (emailResult.success === false) {
            setIsBookingSuccessful(false);
        }
    };


    useEffect(() => {
        if (!isConfirmOpen || !selectedTime || hasSubmittedRef.current) {
            return;
        }

        hasSubmittedRef.current = true; // Mark as submitting
        
        // ⭐️ MODIFICATION 3: Set initial state to SUCCESS (true) when opening the modal
        setIsBookingSuccessful(true); 
        setEmailAttempted({ success: null, message: '' }); 

        const selectedISTSlot = timeSlots.find(slot => slot.label === selectedTime)?.time;
        if (!selectedISTSlot) return;

        const [hour, minute] = selectedISTSlot.split(":").map(Number);
        const indiaDate = new Date(selectedDate);
        indiaDate.setHours(hour, minute, 0, 0);
        const userDate = new Date(indiaDate.toLocaleString("en-US", { timeZone: userTimeZone }));
        const location = TIMEZONES.find(tz => tz.id === userTimeZone)?.country || "Unknown";

        const bookingData = {
            name: name?.trim() ? name.trim() : 'Anonymous User',
            email: email ?? '',
            phone: phone ?? '',
            date_formatted: format(selectedDate, "yyyy-MM-dd"),
            time_user_tz: userDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase(),
            time_ist: indiaDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase(),
            timezone_id: userTimeZone,
            timezone_location: location,
        };

        // Start the submission process
        handleSubmission(bookingData);

    }, [isConfirmOpen, selectedTime, selectedDate, userTimeZone, name, phone, email]);


    // --- UTILITY FUNCTIONS ---
    const getSelectedCountry = () => TIMEZONES.find(tz => tz.id === userTimeZone);

    // Utility function to get the flag image URL
    const getFlagImageUrl = (countryCode) => {
        if (!countryCode) return '';
        return `https://flagicons.lipis.dev/flags/4x3/${countryCode.toLowerCase()}.svg`;
    };

    const getButtonText = () => {
        if (!selectedTime) {
            return "Select a Time Slot to Continue";
        }
        return "Confirm & Book Demo";
    }

    // Custom Confirmation Modal Component
    const CustomModal = ({ isOpen, fadeOut, children }) => {
        if (!isOpen) return null;

        return (
            <div className="cf-ov">
                <div className={`cf-md ${fadeOut ? "fade-out" : "fade-in"}`}>
                    {children}
                </div>
            </div>
        );
    };

    const handleCloseSuccess = () => {
        setFadeOut(true); // Start fade out animation
        setTimeout(() => {
            setIsConfirmOpen(false);
            setFadeOut(false);
            hasSubmittedRef.current = false; // Reset ref
            onClose(); // Close the scheduler component
        }, 500); // Time for fade animation to complete
    };

    // Determine the confirmation message based on success state
    const ConfirmationMessage = () => {
        const displayName = name?.trim() || 'Not Provided';

        if (isBookingSuccessful === true) {
            // This is the message that now shows instantly
            return (
                <>
                    <h2 style={{ color: "#035C75" }}>Booking Request Sent! </h2>
                    <p style={{ fontSize: "20px",color:"red" }}>
                        <strong>{format(selectedDate, "MMMM d, yyyy, EEEE")} at {selectedTime} </strong>
                    </p>
                    <div className="pg" >
                        <p>Name: {displayName}</p>
                        <p>Phone: {phone}</p>
                        <p>Email: {email}</p>
                    </div>
                    <p style={{ marginTop: "20px", color: "#035C75", fontSize: "16px" }}>
                        {/* Your Booking request has been received. Thanks for choosing us! */}
                        Thank you for scheduling a demo with us. We look forward to meeting you!
                    </p>

                    <button
                        className="cf-bn"
                        onClick={handleCloseSuccess}
                        style={{ marginTop: '30px', width: "300px" }}
                    >
                        Done
                    </button>

                </>
            );
        } else { // isBookingSuccessful === false
            return (
                <>
                    <h2 style={{ color: "crimson" }}>Submission Failed ⚠️</h2>
                    <p style={{ marginTop: "20px", color: "crimson", fontSize: "16px" }}>
                        An error occurred while sending your booking data to the backend endpoint. The request did not complete successfully.
                    </p>

                    {/* ERROR DETAILS */}
                    {emailAttempted.message && (
                        <div style={{ padding: '10px', border: '1px solid #DC2626', background: '#FEF2F2', borderRadius: '6px', margin: '20px 0', fontSize: '14px', color: '#DC2626', textAlign: 'left' }}>
                            *Reason:* **{emailAttempted.message}**
                        </div>
                    )}

                    <button
                        className="cf-bn"
                        onClick={() => { setIsConfirmOpen(false); setFadeOut(false); hasSubmittedRef.current = false; }}
                        style={{ marginTop: '30px', background: '#DC2626' }}
                    >
                        Close and Try Again
                    </button>
                </>
            );
        }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

            * {
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            }

            /* Base */
            .ap-bd {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            }

            .ap-md {
            background: white;
            width: 600px;
            max-width: 95vw;
            border-radius: 12px;
            padding: 30px 40px;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
            margin: auto;
            }

            .cl-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: 28px;
            background: none;
            border: none;
            cursor: pointer;
            color: #555;
            line-height: 1;
            // border: 1px solid #ccc;
            }

            .md-tl {
            font-size: 28px;
            font-weight: 700;
            margin-top: 10px;
            color: #222;
            // border: 1px solid #4b06b9ff;
            }

            .mn-lb {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            color: #444;
            // margin-bottom: 12px;
            }

            /* Date cards */
            .dt-cs {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 10px;
            margin-bottom: 30px;
            }

            .dt-cr {
            cursor: pointer;
            width: 58px;
            border-radius: 8px;
            text-align: center;
            padding: 12px 6px;
            user-select: none;
            background: #f5f5f5;
            transition: background 0.25s, box-shadow 0.25s;
            color: #555;
            flex-shrink: 0;
            }

            .dt-cr:hover,
            .dt-cr:focus {
            background: #e0e0ff;
            outline: none;
            }

            .dt-cr.selected {
            background: #035C75;
            color: white;
            font-weight: 700;
            box-shadow: 0 0 10px rgba(3, 92, 117, 0.5);
            }

            .cr-dy {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
            }

            .cr-dt {
            font-size: 20px;
            font-weight: 700;
            line-height: 1;
            }

            /* Timezone */
            .tz-sc {
            position: relative;
            display: flex;
            // border: 1px solid #65ce10ff;
            height:40px
            
            }

            .tz-dd {
            border: 1px solid #ccc;
            border-radius: 6px;
            padding: 10px 14px;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            background: #f9f9f9;
            font-weight: 600;
            transition: background 0.25s;
            min-width: 100px;
            position: relative;
            }

            .tz-dd:hover {
            background: #e0e0ff;
            }

            .tz-dd::after {
            content: "";
            border: solid #555;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 4px;
            transform: rotate(45deg);
            margin-left: 8px;
            transition: transform 0.3s ease;
            }

            .tz-dd.open::after {
            transform: rotate(-135deg);
            }

            .tz-ls {
            border: 1px solid #ccc;
            border-radius: 6px;
            max-height: 250px;
            overflow-y: auto;
            background: #fff;
            margin-top: 5px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            z-index: 10000;
            width: max-content;
            min-width: 180px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .tz-ls.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
            }

            .tz-it {
            padding: 10px 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: background 0.25s;
            }

            .tz-it:hover {
            background: #e0e0ff;
            }
            
            /* NEW: Style for CDN Image Flags */
            .flag-icon {
                width: 1.5rem; /* Standard size for flag */
                height: auto;
                margin-right: 8px;
                vertical-align: middle;
                border: 1px solid #ddd; /* Light border for definition */
                border-radius: 2px;
                box-shadow: 0 0 2px rgba(0,0,0,0.1);
            }

            /* Time */
            .tm-sc {
            text-align: center;
            margin-bottom: 30px;
            }

            .tm-bt {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            }

            .tm-bn {
            padding: 10px 16px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #f9f9f9;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.25s;
            }

            .tm-bn:hover {
            background: #e0e0ff;
            border-color: #035C75;
            color: #035C75;
            }

            .tm-bn.active {
            background: #035C75;
            color: white;
            border-color: #035C75;
            }
            
            /* Debug Panel */
            .debug-panel {
                margin-top: 15px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #f0f8ff;
                font-size: 12px;
                text-align: left;
                color: #333;
            }
            .debug-panel strong {
                font-weight: 600;
                color: #035C75;
            }
            .debug-panel p {
                margin: 4px 0;
            }
            
            /* Footer */
            .ft {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            }

            .cf-bn {
            background: #035C75;
            color: white;
            font-weight: 600;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.25s;
            }

            .cf-bn.disabled-style {
                background: #ccc !important;
                color: #888;
                cursor: not-allowed;
            }
            
            .cf-bn:hover:not(.disabled-style) {
            background: #024a60;
            }

            /* Confirmation Modal */
            .cf-md {
            background: white;
            padding: 30px 40px;
            border-radius: 10px;
            width: 600px;
            max-width: 95vw;
            position: relative;
            text-align: center;
            margin: auto;
            
            /* Animation styles for fade */
            transition: opacity 0.5s ease; 
            opacity: 1;
            }

            .cf-md.fade-in {
            opacity: 1;
            }

            .cf-md.fade-out {
            opacity: 0;
            }

            .cf-ov {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            }

            /* Animated Modal Title */
            .cf-ct h1 {
            margin-bottom: 10px;
            font-weight: 600;
            animation: fadeScaleIn 0.6s ease forwards;
            opacity: 0;
            transform: scale(0.8);
            text-align: left;
            margin-bottom: 20px;
            }

            .pg {
            font-size: 17px;
            }

            @keyframes fadeScaleIn {
            to {
                opacity: 1;
                transform: scale(1);
            }
            }

            .cf-ct p {
            margin: 6px;
            text-align: left;
            margin-top: 10px;
            }

            /* Loading Spinner */
            .spinner {
            border: 4px solid #f3f3f3; /* Light grey */
            border-top: 4px solid #035C75; /* Blue */
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
            }

            .flex{
            }

            @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }
        `}} />

            <div className="ap-bd">
                <div className="ap-md">
                    <button className="cl-btn" onClick={onClose}>×</button>
                    <div className="flex" style={{ display: "flex", height: "40px", marginTop: "30px" }}>
                        <h2 className="md-tl" style={{ width: "400px", height: "28px", marginLeft: "110px", marginTop: "-10px" }}>Schedule Your Demo</h2>
                    </div>

                    <h4 className="mn-lb" style={{ width: "150px", marginLeft: "170px" }}>{format(selectedDate, "MMMM yyyy")}</h4>

                    <div className="tz-sc" ref={dropdownRef} style={{ width: "177px", marginTop: "-50px", marginLeft: "340px", marginBottom: "20px" }}>
                        <div className={`tz-dd ${showTZ ? "open" : ""}`} onClick={() => setShowTZ(!showTZ)}>
                            {getSelectedCountry() ? (
                                <span>
                                    {/* --- MODIFIED TO USE SVG IMAGE FLAG --- */}
                                    <img
                                        src={getFlagImageUrl(getSelectedCountry().code)}
                                        alt={getSelectedCountry().code}
                                        className="flag-icon"
                                    />
                                    {getSelectedCountry().country}
                                </span>
                            ) : <span>Select Country</span>}
                        </div>
                        <div className={`tz-ls ${showTZ ? "show" : ""}`} >
                            {TIMEZONES.map(tz => (
                                <div key={tz.id} className="tz-it" onClick={() => { setUserTimeZone(tz.id); setShowTZ(false); }}>
                                    {/* --- MODIFIED TO USE SVG IMAGE FLAG --- */}
                                    <img
                                        src={getFlagImageUrl(tz.code)}
                                        alt={tz.code}
                                        className="flag-icon"
                                    />
                                    {tz.country}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dt-cs">
                        {days.map(d => {
                            const isSel = d.toDateString() === selectedDate.toDateString();
                            return (
                                <div key={d.toISOString()} className={`dt-cr ${isSel ? "selected" : ""}`} onClick={() => setSelectedDate(d)}>
                                    <div className="cr-dy">{format(d, "EEE")}</div>
                                    <div className="cr-dt">{format(d, "d")}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="tm-sc">

                        {userTimeZone && timeSlots.length > 0 ? (
                            <>
                                {!selectedTime && (
                                    <p style={{ textAlign: 'center', color: '#B91C1C', fontWeight: 'bold', marginBottom: '15px', padding: '10px', border: '2px solid #FCA5A5', backgroundColor: '#FEF2F2', borderRadius: '6px', fontSize: "14px", width: "200px", marginLeft: "155px" }}>
                                        Select your time slot
                                    </p>
                                )}
                                <div className="tm-bt">
                                    {timeSlots.map(({ label }) => (
                                        <button
                                            key={label}
                                            className={`tm-bn ${selectedTime === label ? "active" : ""}`}
                                            onClick={() => setSelectedTime(label)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p style={{ textAlign: 'center', color: '#888' }}>
                                No available slots for {format(selectedDate, "EEEE")} in your timezone.
                                Please select a different date.
                            </p>
                        )}
                    </div>

                    <div className="ft">
                        <button
                            className={`cf-bn ${!selectedTime ? 'disabled-style' : ''}`}
                            onClick={() => setIsConfirmOpen(true)}
                            disabled={!selectedTime}
                        >
                            {getButtonText()}
                        </button>
                    </div>

                    {/* DEBUG PANEL FOR TROUBLESHOOTING */}
                    <div className="debug-panel" style={{ textAlign: "left" }}>
                        <p style={{ textAlign: "left", fontSize: "12px" }}><strong>SUBMISSION STATUS : </strong></p>
                        <p style={{ textAlign: "left", fontSize: "12px", color: "red" }}> <b style={{color:"#333"}}>Selected Date:</b> {format(selectedDate, "yyyy-MM-dd")}</p>
                        <p style={{ textAlign: "left", fontSize: "12px", color: "red" }}> <b style={{color:"#333"}}>Your Timezone:</b> {userTimeZone}</p>
                        {/* <p style={{ textAlign: "left", fontSize: "12px", color: "#333" }}> <b>Available Slots:</b> {timeSlots.length}</p> */}
                        <p style={{ color: emailAttempted.success === false ? 'red' : emailAttempted.success ? 'green' : '#035C75', textAlign: "left", fontSize: "12px" }}>
                            <b>Status:</b> {emailAttempted.success === null ? 'Awaiting Submission' : emailAttempted.success ? 'Data Sent' : 'Submission Failed'}
                        </p>
                    </div>
                </div>

                {/* Custom Confirmation Modal */}
                <CustomModal
                    isOpen={isConfirmOpen}
                    fadeOut={fadeOut}
                >
                    <div className="cf-ct">
                        <ConfirmationMessage />
                    </div>
                </CustomModal>
            </div>
        </>
    );
}