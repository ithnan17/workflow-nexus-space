import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "T2", completed: 12, pending: 8 },
  { day: "T3", completed: 15, pending: 6 },
  { day: "T4", completed: 8, pending: 12 },
  { day: "T5", completed: 18, pending: 4 },
  { day: "T6", completed: 22, pending: 7 },
  { day: "T7", completed: 16, pending: 3 },
  { day: "CN", completed: 5, pending: 2 },
];

const statusData = [
  { name: "Hoàn thành", value: 89, color: "hsl(var(--success))" },
  { name: "Đang thực hiện", value: 34, color: "hsl(var(--warning))" },
  { name: "Chờ xử lý", value: 13, color: "hsl(var(--info))" },
  { name: "Quá hạn", value: 12, color: "hsl(var(--destructive))" },
];

export function TaskChart() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Weekly Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Tiến độ tuần này</CardTitle>
          <CardDescription>
            Task hoàn thành và đang chờ theo từng ngày
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--popover-foreground))"
                }}
              />
              <Bar 
                dataKey="completed" 
                stackId="a" 
                fill="hsl(var(--success))" 
                name="Hoàn thành"
                radius={[0, 0, 4, 4]}
              />
              <Bar 
                dataKey="pending" 
                stackId="a" 
                fill="hsl(var(--warning))" 
                name="Chờ xử lý"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Status Distribution Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Phân bổ trạng thái</CardTitle>
          <CardDescription>
            Tỷ lệ task theo từng trạng thái
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--popover-foreground))"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {statusData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="text-sm font-medium ml-auto">{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}