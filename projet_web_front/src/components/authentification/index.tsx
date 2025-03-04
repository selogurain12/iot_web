import { TabsContent } from "../ui/tabs/tab-content";
import { TabsList } from "../ui/tabs/tab-list";
import { TabsTrigger } from "../ui/tabs/tab-trigger";
import { Tabs } from "../ui/tabs/tabs";
import { Login } from "./login";
import { Register } from "./register";

export function AuthentificationIndex() {
    return(
        <div className="flex items-center justify-center w-full h-full">
            <Tabs defaultValue="register" className="w-[600px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="register">S'inscrire</TabsTrigger>
                    <TabsTrigger value="login">Se connecter</TabsTrigger>
                </TabsList>
                <TabsContent value="register">
                    <Register />
                </TabsContent>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
            </Tabs>
        </div>
    )
}