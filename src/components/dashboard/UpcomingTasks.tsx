import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Flag, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const upcomingTasks = [
  {
    id: 1,
    title: "Thiết kế UI Dashboard Analytics",
    project: "Website Redesign",
    priority: "high",
    dueDate: "Hôm nay",
    dueTime: "17:00",
    assignee: {
      name: "Mai Anh",
      avatar: "/placeholder-avatar.jpg"
    },
    progress: 75
  },
  {
    id: 2,
    title: "Review code API Authentication",
    project: "Mobile App",
    priority: "urgent",
    dueDate: "Ngày mai",
    dueTime: "09:00",
    assignee: {
      name: "Văn Hùng",
      avatar: "/placeholder-avatar.jpg"
    },
    progress: 60
  },
  {
    id: 3,
    title: "Viết test case cho module Payment",
    project: "E-commerce Platform",
    priority: "medium",
    dueDate: "3 ngày nữa",
    dueTime: "15:30",
    assignee: {
      name: "Thu Hà",
      avatar: "/placeholder-avatar.jpg"
    },
    progress: 30
  },
  {
    id: 4,
    title: "Cập nhật tài liệu API Documentation",
    project: "Developer Portal",
    priority: "low",
    dueDate: "Tuần tới",
    dueTime: "12:00",
    assignee: {
      name: "Minh Đức",
      avatar: "/placeholder-avatar.jpg"
    },
    progress: 45
  }
];

const priorityConfig = {
  urgent: { color: "bg-priority-urgent", label: "Khẩn cấp", variant: "destructive" as const },
  high: { color: "bg-priority-high", label: "Cao", variant: "destructive" as const },
  medium: { color: "bg-priority-medium", label: "Trung bình", variant: "secondary" as const },
  low: { color: "bg-priority-low", label: "Thấp", variant: "outline" as const }
};

export function UpcomingTasks() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Task sắp tới</CardTitle>
            <CardDescription>
              Deadline trong 7 ngày tới
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Xem lịch
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingTasks.map((task) => {
          const priority = priorityConfig[task.priority as keyof typeof priorityConfig];
          
          return (
            <div 
              key={task.id} 
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
            >
              {/* Priority Indicator */}
              <div className={`w-1 h-12 rounded-full ${priority.color}`} />
              
              {/* Task Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-sm truncate">{task.title}</h4>
                  <Badge variant={priority.variant} className="text-xs">
                    <Flag className="w-3 h-3 mr-1" />
                    {priority.label}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {task.dueDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {task.dueTime}
                  </span>
                  <span>{task.project}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground min-w-fit">
                    {task.progress}%
                  </span>
                </div>
              </div>
              
              {/* Assignee */}
              <Avatar className="h-8 w-8">
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback className="text-xs">
                  {task.assignee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              {/* Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                  <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                  <DropdownMenuItem>Đánh dấu hoàn thành</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Xóa task
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <Button variant="ghost" className="w-full justify-center text-primary">
            Xem tất cả task ({upcomingTasks.length + 12} task)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}