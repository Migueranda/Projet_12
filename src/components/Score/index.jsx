import React from 'react';
import { Pie, PieChart, Cell } from "recharts";
import propTypes from 'prop-types';

/**
*  @function Score manages the data display in PieChart ( the goal expects from the user in %  )    
*  @param {object} data
*  @return {JSX.Element}         
* */

function Score({data}){  

    // construction of the values to be passed to the graph
    // you need the visible data.score part but also the invisible part 
    // otherwise we will always have represented a full circle
    let serie =  [{ value: data.score}, {value: (1 - data.score)}] // 0,3 / 0,7

    const width = 258;
    const height = 263

    return (
        <PieChart width={width} height={height}>
            <text x={width/2} y={height/2 - 30} textAnchor="middle" dominantBaseline="middle" >
                <tspan x={width/2} fill="#282D30" style={{fontWeight: 'bold', fontSize: '2em'}}>{data.score*100}%</tspan>
                <tspan x={width/2} dy="2.5em" fill="#74798C" style={{fontSize: '1.4em', fontWeight: '600'}} >de votre</tspan>
                <tspan x={width/2} dy="1.6em" fill="#74798C" style={{fontSize: '1.4em',fontWeight: '600'}}>objectif</tspan>
            </text>
            <Pie startAngle={180}
                endAngle={-180}
                innerRadius="70%"
                data={serie}
                dataKey="value"
                labelLine={false}
                blendStroke
                isAnimationActive={false}
                cornerRadius = {10}
                >
                <Cell fill="#FF0000" />
                <Cell fill="#FFFFFF" />
            </Pie>
            <text x={10} y={36} fill="black" style={{fontWeight: 'bold', fontSize: '17px'}}>Score</text>
        </PieChart>
    );
}

    Score.propTypes = {
        data : propTypes.object,    
    }
    
export default Score