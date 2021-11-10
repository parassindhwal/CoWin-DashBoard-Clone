import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './DoughnutGraph.css';

function DoughnutGraph({graphData}) {
    return (
        <div className="doughnut-wrapper">

            <Doughnut 
                data={graphData}
                options={{
                    plugins: {
                    
                    legend:{
                        display:true,
                        position:'bottom',
                        labels: {
                            boxHeight: 8,
                            boxWidth: 8,
                            usePointStyle: true
                        }
                    },
                    },
                    circumference: 180,
                    rotation: -90,
                    cutout: '70%',

                    layout: {
                        padding: {
                            right: 0,
                            
                        }
                    }
                }}
            />
        </div>
    )
}

export default DoughnutGraph;
