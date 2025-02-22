import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {ComponentProps} from "react";
 
interface LoginFormProps extends ComponentProps<"div"> {
    setRegisterUsername: (value: string) => void;
    setRegisterPassword: (value: string) => void;
    handleRegister: () => void
}

export function SignUpForm({className, setRegisterUsername,  setRegisterPassword, handleRegister, ...props}: LoginFormProps) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        Create you account here
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        onChange={(e) => setRegisterUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Create a password</Label>
                                    </div>
                                    <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder="new password" 
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    required />
                                </div>
                                {/* <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="confirm_password">Confirm your password</Label>
                                    </div>
                                    <Input id="confirm_password" type="password" placeholder="confirm password" required />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="job_role">What is your job position ?</Label>
                                    </div>
                                    <Input id="job_role" type="text" placeholder="Enter your job position"/>
                                </div> */}
                                <Button type="button" onClick={handleRegister} className="w-full bg-blue-600 hover:bg-blue-700">
                                    Sign Up
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link to={"/login"} className="text-blue-400">Log in</Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}