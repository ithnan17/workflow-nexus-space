import { StatsCards } from "@/components/dashboard/StatsCards";
import { TaskChart } from "@/components/dashboard/TaskChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Chào mừng trở lại! Đây là tổng quan về công việc của bạn.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts */}
      <TaskChart />

      {/* Bottom Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <UpcomingTasks />
        <RecentActivity />
      </div>
    </div>
  );
}