import  { useState } from 'react';
import Navbar from './components/Navbar';
import DeviceStatus from './components/DeviceStatus';
import Chart from "./components/Chart";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OpacityIcon from '@mui/icons-material/Opacity';
import './App.css';

function App() {
    const [activeDevice, setActiveDevice] = useState(3);
    const numDevices = 8; // Zmienna konfiguracyjna kontrolująca liczbę wyświetlanych kafelek

    const deviceData = {
        temperature: 23.5,
        pressure: 1013.25,
        humidity: 45,
    };

    const pData = [
        { x: '2024-05-26 11:00', y: 1013 },
        { x: '2024-05-26 12:00', y: 1012 },
        // Add more data points
    ];

    const uData = [
        { x: '2024-05-26 11:00', y: 45 },
        { x: '2024-05-26 12:00', y: 46 },
        // Add more data points
    ];

    const tData = [
        { x: '2024-05-26 11:00', y: 23.5 },
        { x: '2024-05-26 12:00', y: 24.0 },
        // Add more data points
    ];

    const xLabels = ['2024-05-26 11:00', '2024-05-26 12:00']; // Assuming xLabels are the same for all data

    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <div className="device-status main-device-status">
                    {activeDevice === 3 && <DeviceStatus data={deviceData} />}
                </div>
                <div className="charts">
                    <Chart pData={pData} uData={uData} tData={tData} xLabels={xLabels} />
                </div>
            </div>
            <div className="separator"></div>
            <div className="other-devices">
                {Array.from(Array(numDevices).keys()).map(index => (
                    <div
                        className={`device-tile ${index === activeDevice ? 'active' : ''}`}
                        key={index}
                        onClick={() => setActiveDevice(index)}
                    >
                        <h2>Device No. {index}</h2>
                        {index === 3 ? (
                            <>
                                <div className="device-info">
                                    <DeviceThermostatIcon className="device-icon" />
                                    <p>23.5°C</p>
                                </div>
                                <div className="device-info">
                                    <CloudUploadIcon className="device-icon" />
                                    <p>1013.25 hPa</p>
                                </div>
                                <div className="device-info">
                                    <OpacityIcon className="device-icon" />
                                    <p>45%</p>
                                </div>
                            </>
                        ) : (
                            <p>No data</p>
                        )}
                        <button className="details-button">
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
