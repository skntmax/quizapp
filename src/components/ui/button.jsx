import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define button variants including all color variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", 
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground shadow hover:bg-success/90",
        danger: "bg-danger text-danger-foreground shadow hover:bg-danger/90",
        info: "bg-info text-info-foreground shadow hover:bg-info/90",
        warning: "bg-warning text-warning-foreground shadow hover:bg-warning/90",
        light: "bg-light text-light-foreground shadow hover:bg-light/90",
        dark: "bg-dark text-dark-foreground shadow hover:bg-dark/90",
        primaryVariant: "bg-primary-variant text-primary-variant-foreground shadow hover:bg-primary-variant/90",
        accent: "bg-accent text-accent-foreground shadow hover:bg-accent/90",
        slate: "bg-slate text-slate-foreground shadow hover:bg-slate/90",
        teal: "bg-teal text-teal-foreground shadow hover:bg-teal/90",
        violet: "bg-violet text-violet-foreground shadow hover:bg-violet/90",
        pink: "bg-pink text-pink-foreground shadow hover:bg-pink/90",
        coral: "bg-coral text-coral-foreground shadow hover:bg-coral/90",
        indigo: "bg-indigo text-indigo-foreground shadow hover:bg-indigo/90",
        olive: "bg-olive text-olive-foreground shadow hover:bg-olive/90",
        navy: "bg-navy text-navy-foreground shadow hover:bg-navy/90", // Navy variant
        gray: "bg-gray text-gray-foreground shadow hover:bg-gray/90", // Gray variant
        brown: "bg-brown text-brown-foreground shadow hover:bg-brown/90", // Brown variant
        mint: "bg-mint text-mint-foreground shadow hover:bg-mint/90", // Mint variant
        beige: "bg-beige text-beige-foreground shadow hover:bg-beige/90", // Beige variant
        lavender: "bg-lavender text-lavender-foreground shadow hover:bg-lavender/90", // Lavender variant
        apricot: "bg-apricot text-apricot-foreground shadow hover:bg-apricot/90", // Apricot variant
        charcoal: "bg-charcoal text-charcoal-foreground shadow hover:bg-charcoal/90", // Charcoal variant
        silver: "bg-silver text-silver-foreground shadow hover:bg-silver/90", // Silver variant
        // Add more variants as needed
      },
      size: {
        default: "h-9 px-4 py-5",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-full px-12",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
