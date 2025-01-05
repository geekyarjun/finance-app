import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent } from '@/components/ui/card';
import { ZERO } from '@/lib/constants/constants';

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 705 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 573 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 500 },
  { month: 'August', desktop: 530 },
  { month: 'September', desktop: 1120 },
  { month: 'October', desktop: 820 },
  { month: 'November', desktop: 900 },
  { month: 'December', desktop: 700 },
];
const chartConfig = {
  desktop: {
    label: 'Balance',
    color: '#1814F3',
  },
} satisfies ChartConfig;

const THREE_CHARACTERS = 3;

export default function BalanceHistory() {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <div>
          <h2 className="heading-md">Balance History</h2>
        </div>
      </div>
      <Card className="w-full border-none shadow-none rounded-[25px]">
        <CardContent className="h-[276px] py-0 px-2">
          <ResponsiveContainer width="100%" height="276px">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
            >
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{ top: 50, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(ZERO, THREE_CHARACTERS)}
                />
                <YAxis axisLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="45%"
                      stopColor="#2D60FF40"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="100%"
                      stopColor="#2D60FF00"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="#1814F3"
                  strokeWidth={3}
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
