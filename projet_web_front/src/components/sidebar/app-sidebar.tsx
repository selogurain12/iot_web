import * as React from "react"
import {
  LogOut,
  Map,
  PieChart,
  User,
  Users,
} from "lucide-react"

import { NavProjects } from "./nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "../ui/sidebar"

// This is sample data.
const data = {
  user: [
    {
    name: "Prénom Nom",
    url: "#",
    icon: User,
    },
    {
      name: "Déconnexion",
      url: "#",
      icon: LogOut,
    }
  ],
  projects: [
    {
      name: "Utilisateurs",
      url: "#",
      icon: Users,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      <NavProjects projects={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
