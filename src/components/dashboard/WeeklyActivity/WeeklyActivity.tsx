import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent } from '@/components/ui/card';

type LegendPayload = {
  value: string; // Label of the legend item
  id?: string | number; // Optional unique identifier
  type?: string; // Shape type (e.g., 'line', 'square')
  color?: string; // Associated color for the legend item
};

type CustomLegendProps = {
  payload?: LegendPayload[]; // Array of legend items with data
};

const CustomLegend = (props: CustomLegendProps) => {
  const { payload } = props;
  return (
    <ul className="flex flex-wrap gap-4 justify-end">
      {payload?.map((entry, index: number) => (
        <li key={`item-${index}`} className="flex items-center gap-2">
          <span
            style={{
              display: 'inline-block',
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: entry.color,
            }}
          />
          <span className="text-sm">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

// Data for Bar Chart (Weekly Activity)
const barData = [
  { day: 'Sat', Deposit: 480, Withdraw: 220 },
  { day: 'Sun', Deposit: 350, Withdraw: 120 },
  { day: 'Mon', Deposit: 320, Withdraw: 260 },
  { day: 'Tue', Deposit: 490, Withdraw: 390 },
  { day: 'Wed', Deposit: 150, Withdraw: 220 },
  { day: 'Thu', Deposit: 395, Withdraw: 230 },
  { day: 'Fri', Deposit: 400, Withdraw: 310 },
];

const barRadius = 8;

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function WeeklyActivity() {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <div>
          <h2 className="heading-md">Weekly Activity</h2>
        </div>
      </div>
      <Card className="w-full border-none shadow-none rounded-[25px]">
        <CardContent className="h-80 py-0 px-2">
          <ResponsiveContainer width="100%" height="100%">
            <ChartContainer config={chartConfig}>
              <BarChart
                data={barData}
                margin={{ top: 50, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke={'hsl(var(--neutral-100))'}
                />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  fontSize={13}
                  color="green"
                />
                <YAxis
                  allowDecimals={false}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  fontSize={14}
                  color="red"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="top"
                  align="right"
                  content={<CustomLegend />}
                  wrapperStyle={{ top: 28 }}
                />
                <Bar
                  dataKey="Deposit"
                  fill="hsl(var(--primary))"
                  barSize={10}
                  radius={barRadius}
                />
                <Bar
                  dataKey="Withdraw"
                  fill="hsl(var(--secondary-900))"
                  barSize={10}
                  radius={barRadius}
                />
              </BarChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
