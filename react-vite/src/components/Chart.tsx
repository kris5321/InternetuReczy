import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface ChartsProps {
    pData: { x: string, y: number }[];
    uData: { x: string, y: number }[];
    tData: { x: string, y: number }[];
    xLabels: string[];
}

const Chart: React.FC<ChartsProps> = ({ pData, uData, tData }) => {
    const pressureData = pData.map(item => item.y);
    const humidityData = uData.map(item => item.y);
    const temperatureData = tData.map(item => item.y);
    const xLabels = pData.map(item => item.x); // Assuming xLabels are the same for all data

    return (
        <LineChart
            width={700}
            height={400}
            series={[
                { data: pressureData, label: 'Pressure x10 [hPa]', color: '#00bcd4' },
                { data: humidityData, label: 'Humidity [%]', color: '#ff00ff' },
                { data: temperatureData, label: 'Temperature [°C]', color: '#ff0000' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
};

export default Chart;
