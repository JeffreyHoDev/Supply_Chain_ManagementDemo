import { ResponsivePie } from '@nivo/pie'
import React from 'react'


class InstallationPie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "Item A",
                    value: 50
                },
                {
                    id: "Item B",
                    value: 90
                },
                {
                    id: "Item C",
                    value: 20
                },
                {
                    id: "Item D",
                    value: 70
                },
                {
                    id: "Item E",
                    value: 80
                },
                {
                    id: "Item F",
                    value: 60
                },
                {
                    id: "Item G",
                    value: 35
                },
                {
                    id: "Item H",
                    value: 50
                },
            ],
            isDone: false
        }
    }

    render(){
            return (
                <ResponsivePie
                        data={this.state.data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        sortByValue={true}
                        colors={{ scheme: 'category10' }}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', '2' ] ] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextXOffset={6}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={16}
                        radialLabelsLinkHorizontalLength={24}
                        radialLabelsLinkStrokeWidth={1}
                        radialLabelsLinkColor={{ from: 'color' }}
                        slicesLabelsSkipAngle={10}
                        slicesLabelsTextColor="#333333"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'ruby'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'python'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'scala'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'lisp'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'elixir'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'javascript'
                                },
                                id: 'lines'
                            }
                        ]}
                    />
        )}
}

export default InstallationPie;