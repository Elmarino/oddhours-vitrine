import { Card, CardHeader } from "./ui/card"

export function Header() {
    return (
        <header>
            <Card>
                <CardHeader className="p-4">
                    <p>Citation master layout</p>
                </CardHeader>
            </Card>
        </header>
    );
}