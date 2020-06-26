import { ResponsiveLine } from '@nivo/line'
import React from 'react';
import { format } from 'date-fns'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const year = format(new Date, 'yyyy')
const month = [
    {
        "id": "Maintenance",
        "color": "hsl(138, 70%, 50%)",
        "data":  [
            {
                x: "Jan",
                y: 20
            },
            {
                x: "Feb",
                y: 0
            },
            {
                x: "Mar",
                y: 40
            },
            {
                x: "Apr",
                y: 90
            },
            {
                x: "May",
                y: 75
            },
            {
                x: "Jun",
                y: 80
            },
            {
                x: "Jul",
                y: 15
            },
            {
                x: "Aug",
                y: 90
            },
            {
                x: "Sep",
                y: 100
            },
            {
                x: "Oct",
                y: 100
            },
            {
                x: "Nov",
                y: 70
            },
            {
                x: "Dec",
                y: 70
            },
        ]
    }
]


class MaintenanceLine extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ResponsiveLine
            data={month}
            margin={{ top: 20, right: 80, bottom: 100, left: 100 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Month',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: `Outbound Quantities`,
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'set1' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
        />
        )
    }
}

export default MaintenanceLine;