import * as React from 'react';
import App from './App';
import {createRoot} from "react-dom/client";

// @ts-ignore
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
