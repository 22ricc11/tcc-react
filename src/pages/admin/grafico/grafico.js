

import { Line } from 'react-chartjs-2';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale, 
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Grafico(){
    const data = {
        labels: ['Ago 1', 'Ago 8', 'Ago 15', 'Ago 22', 'Ago 29', 'Set 05', 'Set 12', 'Set 19', 'Set 26', 'Out 03', 'Out 10'],
        datasets: [{
            data: [12, 17, 29.9, 11.2, 15, 12, 27, 20, 23.7, 26, 20],
            backgroundColor: 'trasnparent',
            borderColor: '#FF0000',
            pointBoderColor: 'tranparent',
            pointBorderWidht: 4,
            tension: 0.5
        }]
    };
    const options = {
        plugins:{
            legend: false
    },
    scales:{
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            min: 10,
            max: 30,
            ticks:{
                stepSize: 3,
                callback: (value) => value + 'K'
            }
        }
    }
}


    return(
        <div style={{width: '65vw'  , backgroundColor: '#B2B2B2'}}>
            <Line data={data} options={options}></Line>
        </div>
    );
}

export default Grafico;