
import { CardHeader, CardContent, Card } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function SignUp() {
  return (
    (<Card className="w-80 bg-white">
      <CardHeader className="text-black bg-white flex items-center">
        <h2 className="card-title">Create Account</h2>
        
      </CardHeader>
      <CardContent className="bg-white text-black">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name" required />
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" required type="password" />
          </div>
          <Button className="w-full bg-blue-800">Sign Up</Button>
        </div>
      </CardContent>
    </Card>)
  );
}
