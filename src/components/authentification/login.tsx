import { Card } from "../ui/cards/card";
import { CardHeader } from "../ui/cards/card-header";
import { CardTitle } from "../ui/cards/card-title";
import { CardContent } from "../ui/cards/card-content";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CardFooter } from "../ui/cards/card-footer";
import { Button } from "../ui/button";

export function Login() {
    return(
        <Card>
          <CardHeader>
            <CardTitle>Se connecter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Se connecter</Button>
          </CardFooter>
        </Card>
    )
}