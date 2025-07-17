import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, Upload, UserPlus, Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Mai Anh",
    avatar: "/placeholder-avatar.jpg",
    action: "hoàn thành task",
    target: "Thiết kế giao diện Login",
    time: "5 phút trước",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    id: 2,
    user: "Văn Hùng",
    avatar: "/placeholder-avatar.jpg",
    action: "comment vào",
    target: "Review code backend API",
    time: "12 phút trước",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    id: 3,
    user: "Thu Hà",
    avatar: "/placeholder-avatar.jpg",
    action: "upload file",
    target: "Tài liệu yêu cầu dự án",
    time: "1 giờ trước",
    icon: Upload,
    color: "text-info"
  },
  {
    id: 4,
    user: "Minh Đức",
    avatar: "/placeholder-avatar.jpg",
    action: "được thêm vào dự án",
    target: "Website Redesign",
    time: "2 giờ trước",
    icon: UserPlus,
    color: "text-warning"
  },
  {
    id: 5,
    user: "Lan Anh",
    avatar: "/placeholder-avatar.jpg",
    action: "cập nhật deadline",
    target: "Testing mobile app",
    time: "3 giờ trước",
    icon: Clock,
    color: "text-muted-foreground"
  }
];

export function RecentActivity() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Hoạt động gần đây
          <Badge variant="secondary" className="ml-auto">
            {activities.length}
          </Badge>
        </CardTitle>
        <CardDescription>
          Cập nhật mới nhất từ team của bạn
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="h-8 w-8 mt-0.5">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback className="text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{activity.user}</span>
                  <span className="text-sm text-muted-foreground">{activity.action}</span>
                  <Icon className={`h-3 w-3 ${activity.color}`} />
                </div>
                <p className="text-sm text-foreground font-medium truncate">
                  {activity.target}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <button className="w-full text-sm text-primary hover:text-primary/80 font-medium">
            Xem tất cả hoạt động
          </button>
        </div>
      </CardContent>
    </Card>
  );
}