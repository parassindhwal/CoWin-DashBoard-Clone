import React from 'react';
import {Bar} from 'react-chartjs-2';
import './BarGraph.css';

function BarGraph({data}) {
    return (
        <div className="barChart-wrapper">
            <Bar 
                data={data}
                options= {{
                    aspectRatio: 4,
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
                                font: {
                                    size: 8
                                },
                                autoSkip: true
                                
                            },
                            grid: {
                                color: 'rgba(240, 245, 240, 0.62)',
                            }
                        },
                        x: {
                            ticks: {
                                font: {
                                    size: 10
                                }
                            },
                            grid: {
                                color: 'rgba(240, 245, 240, 0.62)',
                            }
                        }
                    },
                    interaction: {
                        mode: 'index'
                    },
                    plugins: {
                        legend:{
                            display:true,
                            position:'bottom',
                            labels: {
                                boxHeight: 12,
                                boxWidth: 12
                            }
                        },
                    }
                }} />
        </div>
    )
}

export default BarGraph
