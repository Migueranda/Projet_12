import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import propTypes from 'prop-types';
import  '../../utils/Activity.css';

/**
*   @function activity displays data in Barchart (Activité quotidienne)
* 
*/
function Activity({data}){ 
      
    let CustomTooltip = ({ active, payload, label }) => {
        
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
                <p className="kg-value"> {`${payload[0].value}`}Kg</p>
                <p className="calories-value">{`${payload[1].value}`}Kcal</p>
            </div>
          );
        }      
        return null;
      };

    return (
        <div className='container-activity'>
            <BarChart
                width={1000}
                height={300}
                data={data.sessions}
                margin={{
                    top: 20,
                    right: 0,
                    left: 10,
                    bottom: 5,
                }}
            >
                
            <CartesianGrid vertical={false} strokeDasharray="3" />
            <XAxis dataKey="x" stroke='#74798C'/>
            <YAxis orientation="right"/>
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none'}}/>            
            <text x={10} y={36} fill="black" style={{fontWeight: 'bold'}}>{data.title}</text>
            <Legend align="right" verticalAlign="top" height={36} iconType="circle" />
            <Bar name={data.legend.kilogram} dataKey="kilogram" fill="red" radius={[5, 5, 0, 0]} barSize={8}/>
            <Bar name={data.legend.calories} dataKey="calories" fill="black" radius={[5, 5, 0, 0]} barSize={8}/>
            </BarChart>
        </div>
    );
}
    Activity.propTypes = {
        data : propTypes.object,    
    }
    
export default Activity