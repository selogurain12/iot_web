import { AppSidebar } from "./sidebar/app-sidebar";
import { Button } from "./ui/button";
import { SidebarProvider } from "./ui/sidebar";

export function ListUsers() {
    return(
        <div className="h-screen relative flex overflow-hidden">
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
            <main className="h-full w-full flex-auto overflow-auto antialiased">
				<p className="text-5xl text-center">Utilisateurs</p>
                <div className="w-full pt-5 justify-items-end grid pr-3">
                    <Button variant="outline">Créer un utilisateur</Button>
                </div>
			</main>
        </div>
    )
}