import { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface ChartProps {}

const data = [
    {
        country: 'AD',
        'hot dog': 59,
        'hot dogColor': 'hsl(234, 70%, 50%)',
        burger: 197,
        burgerColor: 'hsl(97, 70%, 50%)',
        sandwich: 200,
        sandwichColor: 'hsl(285, 70%, 50%)',
        kebab: 124,
        kebabColor: 'hsl(166, 70%, 50%)',
        fries: 64,
        friesColor: 'hsl(334, 70%, 50%)',
        donut: 89,
        donutColor: 'hsl(39, 70%, 50%)',
    },
    {
        country: 'AE',
        'hot dog': 85,
        'hot dogColor': 'hsl(320, 70%, 50%)',
        burger: 43,
        burgerColor: 'hsl(45, 70%, 50%)',
        sandwich: 114,
        sandwichColor: 'hsl(256, 70%, 50%)',
        kebab: 160,
        kebabColor: 'hsl(341, 70%, 50%)',
        fries: 108,
        friesColor: 'hsl(202, 70%, 50%)',
        donut: 139,
        donutColor: 'hsl(265, 70%, 50%)',
    },
    {
        country: 'AF',
        'hot dog': 94,
        'hot dogColor': 'hsl(343, 70%, 50%)',
        burger: 67,
        burgerColor: 'hsl(224, 70%, 50%)',
        sandwich: 10,
        sandwichColor: 'hsl(125, 70%, 50%)',
        kebab: 63,
        kebabColor: 'hsl(250, 70%, 50%)',
        fries: 25,
        friesColor: 'hsl(312, 70%, 50%)',
        donut: 142,
        donutColor: 'hsl(111, 70%, 50%)',
    },
    {
        country: 'AG',
        'hot dog': 88,
        'hot dogColor': 'hsl(273, 70%, 50%)',
        burger: 93,
        burgerColor: 'hsl(137, 70%, 50%)',
        sandwich: 119,
        sandwichColor: 'hsl(348, 70%, 50%)',
        kebab: 151,
        kebabColor: 'hsl(248, 70%, 50%)',
        fries: 42,
        friesColor: 'hsl(27, 70%, 50%)',
        donut: 132,
        donutColor: 'hsl(349, 70%, 50%)',
    },
    {
        country: 'AI',
        'hot dog': 184,
        'hot dogColor': 'hsl(226, 70%, 50%)',
        burger: 24,
        burgerColor: 'hsl(335, 70%, 50%)',
        sandwich: 13,
        sandwichColor: 'hsl(115, 70%, 50%)',
        kebab: 101,
        kebabColor: 'hsl(0, 70%, 50%)',
        fries: 145,
        friesColor: 'hsl(34, 70%, 50%)',
        donut: 41,
        donutColor: 'hsl(38, 70%, 50%)',
    },
    {
        country: 'AL',
        'hot dog': 95,
        'hot dogColor': 'hsl(66, 70%, 50%)',
        burger: 166,
        burgerColor: 'hsl(79, 70%, 50%)',
        sandwich: 167,
        sandwichColor: 'hsl(121, 70%, 50%)',
        kebab: 112,
        kebabColor: 'hsl(254, 70%, 50%)',
        fries: 93,
        friesColor: 'hsl(114, 70%, 50%)',
        donut: 148,
        donutColor: 'hsl(105, 70%, 50%)',
    },
    {
        country: 'AM',
        'hot dog': 171,
        'hot dogColor': 'hsl(5, 70%, 50%)',
        burger: 156,
        burgerColor: 'hsl(359, 70%, 50%)',
        sandwich: 17,
        sandwichColor: 'hsl(137, 70%, 50%)',
        kebab: 198,
        kebabColor: 'hsl(285, 70%, 50%)',
        fries: 103,
        friesColor: 'hsl(42, 70%, 50%)',
        donut: 74,
        donutColor: 'hsl(219, 70%, 50%)',
    },
];

const Chart: FC<ChartProps> = ({}) => {
    return (
        <div className="flex flex-1">
            <ResponsiveBar
                data={data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut',
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'sandwich',
                        },
                        id: 'lines',
                    },
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) =>
                    e.id +
                    ': ' +
                    e.formattedValue +
                    ' in country: ' +
                    e.indexValue
                }
            />
        </div>
    );
};

export default Chart;
