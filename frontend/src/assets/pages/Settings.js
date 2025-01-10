import React, { useState } from 'react';
import '../styles/Settings.css';

// const Settings = () => {
//     return (
//         <div className="settings-container">
//             <h1>Settings</h1>
//             <div className="settings-section">
//                 <h2>Account</h2>
//                 <div className="settings-item">
//                     <label>Username</label>
//                     <input type="text" placeholder="Enter your username" />
//                 </div>
//                 <div className="settings-item">
//                     <label>Email</label>
//                     <input type="email" placeholder="Enter your email" />
//                 </div>
//             </div>
//             <div className="settings-section">
//                 <h2>Preferences</h2>
//                 <div className="settings-item">
//                     <label>Theme</label>
//                     <select>
//                         <option>Light</option>
//                         <option>Dark</option>
//                     </select>
//                 </div>
//                 <div className="settings-item">
//                     <label>Language</label>
//                     <select>
//                         <option>English</option>
//                         <option>Spanish</option>
//                         <option>French</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="settings-section">
//                 <h2>Notifications</h2>
//                 <div className="settings-item">
//                     <label>Email Notifications</label>
//                     <input type="checkbox" />
//                 </div>
//                 <div className="settings-item">
//                     <label>Push Notifications</label>
//                     <input type="checkbox" />
//                 </div>
//             </div>
//             <button className="save-button">Save Changes</button>
//         </div>
//     );
// };

// export default Settings;
const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState('Dark');
    const [language, setLanguage] = useState('English');
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [volume, setVolume] = useState(50);
    const [playbackQuality, setPlaybackQuality] = useState('High');

    const handleSave = () => {
        // Logic to save settings, possibly integrating with an API
        console.log({
            username,
            email,
            theme,
            language,
            emailNotifications,
            pushNotifications,
            volume,
            playbackQuality
        });
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-section">
                <h2>Account</h2>
                <div className="settings-item">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                </div>
                <div className="settings-item">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
            </div>
            <div className="settings-section">
                <h2>Preferences</h2>
                <div className="settings-item">
                    <label>Theme</label>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
                <div className="settings-item">
                    <label>Language</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
            </div>
            <div className="settings-section">
                <h2>Notifications</h2>
                <div className="settings-item">
                    <label>Email Notifications</label>
                    <input type="checkbox" checked={emailNotifications} onChange={(e) => setEmailNotifications(e.target.checked)} />
                </div>
                <div className="settings-item">
                    <label>Push Notifications</label>
                    <input type="checkbox" checked={pushNotifications} onChange={(e) => setPushNotifications(e.target.checked)} />
                </div>
            </div>
            <div className="settings-section">
                <h2>Playback</h2>
                <div className="settings-item">
                    <label>Volume</label>
                    <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} />
                </div>
                <div className="settings-item">
                    <label>Playback Quality</label>
                    <select value={playbackQuality} onChange={(e) => setPlaybackQuality(e.target.value)}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
            </div>
            <button className="save-button" onClick={handleSave}>Save Changes</button>
        </div>
    );
};

export default Settings;