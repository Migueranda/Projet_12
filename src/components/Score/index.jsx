import React from 'react';
import { Pie, PieChart, Cell } from "recharts";

function Score({data}){  
    // construction des valeurs à passer au graphique
    // il faut la partie visible data.score mais aussi la partie invisible 
    // autrement nous aurons toujours de représenté un cercle plein
    let serie =  [{ value: data.score}, {value: (1 - data.score)}]

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
export default Score