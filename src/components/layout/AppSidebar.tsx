import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  KanbanSquare,
  FolderOpen,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  ChevronDown,
  Home
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Tổng quan", url: "/", icon: LayoutDashboard },
  { title: "Dự án", url: "/projects", icon: FolderOpen },
  { title: "Kanban Board", url: "/board", icon: KanbanSquare },
  { title: "Lịch", url: "/calendar", icon: Calendar },
  { title: "Thành viên", url: "/members", icon: Users },
  { title: "Báo cáo", url: "/reports", icon: BarChart3 },
];

const projectItems = [
  { name: "Website Redesign", color: "bg-blue-500", tasks: 12 },
  { name: "Mobile App", color: "bg-green-500", tasks: 8 },
  { name: "Marketing Campaign", color: "bg-purple-500", tasks: 15 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r border-border">
        {/* Header */}
        <div className={`p-4 border-b border-border ${collapsed ? 'px-2' : ''}`}>
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <KanbanSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">TaskFlow Pro</h2>
                <p className="text-xs text-muted-foreground">Workspace</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <KanbanSquare className="w-5 h-5 text-white" />
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="p-4 border-b border-border">
            <Button className="w-full justify-start gap-2" size="sm">
              <Plus className="w-4 h-4" />
              Tạo task mới
            </Button>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                      {item.title === "Dự án" && !collapsed && (
                        <Badge variant="secondary" className="ml-auto">
                          3
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects Section */}
        {!collapsed && (
          <SidebarGroup>
            <div 
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-muted/50 rounded-md mx-2"
              onClick={() => setProjectsExpanded(!projectsExpanded)}
            >
              <SidebarGroupLabel className="text-xs font-medium">
                DỰ ÁN GÀN ĐÂY
              </SidebarGroupLabel>
              <ChevronDown className={`w-4 h-4 transition-transform ${projectsExpanded ? 'rotate-0' : '-rotate-90'}`} />
            </div>
            {projectsExpanded && (
              <SidebarGroupContent>
                <div className="space-y-1 px-2">
                  {projectItems.map((project) => (
                    <div
                      key={project.name}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer group"
                    >
                      <div className={`w-3 h-3 rounded-full ${project.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{project.name}</p>
                        <p className="text-xs text-muted-foreground">{project.tasks} tasks</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        )}

        {/* User Section */}
        <div className="mt-auto p-4 border-t border-border">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  NV
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Nguyễn Văn A</p>
                <p className="text-xs text-muted-foreground">Project Manager</p>
              </div>
              <Button variant="ghost" size="sm" className="p-1">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Avatar className="w-8 h-8 mx-auto">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                NV
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}