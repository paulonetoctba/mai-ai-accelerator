import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-card hover:border-primary/50 text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-card hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_hsl(180_100%_50%/0.4)] hover:shadow-[0_0_30px_hsl(180_100%_50%/0.6)] hover:scale-105",
        "neon-outline": "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 shadow-[0_0_15px_hsl(180_100%_50%/0.2)] hover:shadow-[0_0_25px_hsl(180_100%_50%/0.4)]",
        "neon-secondary": "bg-secondary text-secondary-foreground font-semibold shadow-[0_0_20px_hsl(270_100%_65%/0.4)] hover:shadow-[0_0_30px_hsl(270_100%_65%/0.6)] hover:scale-105",
        glass: "bg-card/40 backdrop-blur-md border border-border/30 text-foreground hover:bg-card/60 hover:border-primary/30",
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 hover:scale-105 shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
