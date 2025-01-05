import { ResponsiveContainer, PieChart, Pie, LabelList } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Card, CardContent } from '@/components/ui/card';

const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: '30% Entertainment',
    color: 'hsl(var(--secondary-900))',
  },
  safari: {
    label: '20% Investment',
    color: 'hsl(var(--neutral))',
  },
  firefox: {
    label: '15% Expense',
    color: 'hsl(var(--warning-01))',
  },
  edge: {
    label: '35% Others',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export default function ExpenseStatistics() {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <div>
          <h2 className="heading-md">Expenses Statistics</h2>
        </div>
      </div>
      <Card className="w-full border-none shadow-none rounded-[25px]">
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
            >
              <PieChart>
                <Pie data={chartData} dataKey="visitors">
                  <LabelList
                    dataKey="browser"
                    className="fill-background"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: keyof typeof chartConfig) =>
                      chartConfig[value]?.label
                    }
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
