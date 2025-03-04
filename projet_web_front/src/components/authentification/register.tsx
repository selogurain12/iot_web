import { useState } from "react";
import axios from "axios";
import { Card } from "../ui/cards/card";
import { CardHeader } from "../ui/cards/card-header";
import { CardTitle } from "../ui/cards/card-title";
import { CardContent } from "../ui/cards/card-content";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CardFooter } from "../ui/cards/card-footer";
import { Button } from "../ui/button";

export function Register() {
    const [firstname, setfirstname] = useState("");
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/users", {
                firstname,
                name,
                email,
                password,
                created_at : new Date().toDateString(),
            });

            console.log("Réponse de l'API:", response.data);
        } catch (error) {
            console.error("Erreur lors de l'envoi des données:", error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>S'inscrire</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Met à jour l'état
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSubmit}>S'inscrire</Button>
            </CardFooter>
        </Card>
    );
}
