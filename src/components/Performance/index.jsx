import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import  '../../utils/Performance.css'

const width = 288;
const height = 263;

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
          top: 0,
          right: 5,
          left: 5,
          bottom:80,
          }}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" stroke="#fff"  tickLine={false} barCategoryGap={10} />        
        <Radar name="woot" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
    );
}

export default Performance