import { ResponsiveLine } from '@nivo/line'
import React from 'react';

const installMonth = [
    {
        "id": "Installation",
        "color": "hsl(135, 70%, 50%)",
        "data":  [
            {
                x: "Jan",
                y: 50
            },
            {
                x: "Feb",
                y: 90
            },
            {
                x: "Mar",
                y: 100
            },
            {
                x: "Apr",
                y: 70
            },
            {
                x: "May",
                y: 80
            },
            {
                x: "Jun",
                y: 40
            },
            {
                x: "Jul",
                y: 40
            },
            {
                x: "Aug",
                y: 90
            },
            {
                x: "Sep",
                y: 120
            },
            {
                x: "Oct",
                y: 100
            },
            {
                x: "Nov",
                y: 110
            },
            {
                x: "Dec",
                y: 70
            },
        ]

}
]


class InstallationLine extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ResponsiveLine
            data={installMonth}
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
            colors={{ scheme: 'category10' }}
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

export default InstallationLine;