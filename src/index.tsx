import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const App = () => {
    useEffect(() => {
        function updateTime() {
            const timeElement = document.getElementById('time');
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            timeElement.textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();
    }, []);
    return (
        <div id={'time'}>Loading...</div>
    )
}

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);