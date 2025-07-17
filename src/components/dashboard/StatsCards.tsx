import { TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Tổng số task",
    value: "148",
    change: "+12%",
    trend: "up",
    icon: CheckCircle,
    color: "text-primary"
  },
  {
    title: "Hoàn thành",
    value: "89",
    change: "+8%",
    trend: "up",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    title: "Đang thực hiện",
    value: "34",
    change: "+5%",
    trend: "up",
    icon: Clock,
    color: "text-warning"
  },
  {
    title: "Quá hạn",
    value: "12",
    change: "-3%",
    trend: "down",
    icon: AlertCircle,
    color: "text-destructive"
  },
  {
    title: "Thành viên hoạt động",
    value: "28",
    change: "+2",
    trend: "up",
    icon: Users,
    color: "text-info"
  }
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={stat.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendIcon className={`h-3 w-3 ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`} />
                    <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                      {stat.change}
                    </span>
                    <span>so với tháng trước</span>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}