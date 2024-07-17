import { BellRing, Check,Bed,Users,Wallet,Ambulance} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




export function CardDemo({ className,title,description,children, ...props }) {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-around">
        
        <CardTitle>{children}</CardTitle>
        <div className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        </div>
        
      </CardHeader>
    </Card>
  )
}
