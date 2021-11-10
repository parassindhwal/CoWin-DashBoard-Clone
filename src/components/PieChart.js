import React from 'react'
import { Pie } from 'react-chartjs-2';
import './PieChart.css'

function PieChart({pieData}) {
    return (
      <div className="pie-wrapper">
        <Pie 
        data={pieData}
        options={{
          plugins: {
            legend:{
              display:true,
              position:'bottom',
              labels: {
                boxHeight: 12,
                boxWidth: 12
            }
            }
          }
        }}
        />
      </div>
    )
}

export default PieChart
