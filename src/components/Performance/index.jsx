import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const width = 500;
const height = 300;

function Performance({data}) {
    return (
      <RadarChart 
        width={width} 
        height={height} 
        cx="50%" 
        cy="50%" 
        outerRadius="80%" 
        data={data}
        margin={{
          top: 20,
          right: 5,
          left: 5,
          bottom: 20,
          }}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar name="woot" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
    );
}

export default Performance