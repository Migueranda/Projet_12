import React from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

const width = 500;
const height = 300;
const title_x = 40

function Sessions({data}) {
    return (
        <LineChart  width={width} 
                    height={height} 
                    data={data}
                    margin={{
                        top: 50,
                        right: 5,
                        left: 5,
                        bottom: 20,
                        }}>
          <text x={title_x} y="20" fill="#ffffff" fillOpacity="0.5" style={{fontWeight: 'bold'}}>
            <tspan x={title_x} dy="1.2em">Durée moyenne des</tspan>
            <tspan x={title_x} dy="1.2em">sessions</tspan>
          </text>
          <XAxis dataKey="x" 
                 axisLine={false} 
                 tickLine={false}
                 tick={{ fill: '#FFFFFF',
                         fontSize: '12px',
                        //  fontFamily: 'Roboto',
                         fontStyle: 'Medium'
                         }}
                 />
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="40%" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <Line type="monotone" 
                dataKey="sessionLength"
                // stroke="#8884d8"
                stroke="url(#linear)"
                strokeWidth={4} 
                dot={false}
                activeDot={{ stroke: 'white', strokeWidth: 8, r: 2 }}/>
          <Tooltip />
        </LineChart>
    );
}

export default Sessions