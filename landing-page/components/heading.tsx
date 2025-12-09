import { cn } from "@/lib/utils";

export const Heading = ({className, children, as= "h2"}:{
  className?: string;
  children : React.ReactNode;
  as?: "h1" | "h2"
}) => {
  const Tag =as;
  return (
    <Tag className={cn(`text-2xl md:text-4xl lg:text-6xl tracking-tight font-manrope font-bold ${className}`)}>
      {children} 
    </Tag>
  )
}
 
 
  