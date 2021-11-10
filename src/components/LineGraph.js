import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineGraph.css';

function LineGraph({data}) {
    return (
        <div className="line__wrapper">

            <Line
                // maintainAspectRatio= {true}
                data={data}
                options= {{
                    aspectRatio:3,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    let valueLegend = this.getLabelForValue(value);
                                    valueLegend = valueLegend.replaceAll(',', '');
                                    const valueLegend2 = Number(valueLegend);
                                    if(valueLegend2 > 1000) {
                                        const legend = Math.floor(valueLegend2 / 1000);
                                        return `${legend}K`;
                                    } else {
                                        return valueLegend2;
                                    }
                                },
                                type: 'logarithmic',
                                font: {
                                    size: 8
                                }
                            },
                            grid: {
                                color: 'rgba(240, 245, 240, 0.62)',
            
                            },
                            
                        },
                        x: {
                            grid: {
                                color: 'rgba(240, 245, 240, 0.62)',
             
                            },
                            ticks: {
                                font: {
                                    size: 10
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'index'
                    },
                    layout: {
                        padding: 25
                    },
                    plugins: {
                        legend:{
                            display:true,
                            position:'bottom',
                            labels: {
                                boxHeight: 10,
                                boxWidth: 20
                            }
                        },
                    }
                }}
                // height={100} 
                />
        </div>
    )
}

export default LineGraph;
