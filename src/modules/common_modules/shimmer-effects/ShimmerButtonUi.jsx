import { ShimmerButton } from "react-shimmer-effects";

// Component with 3 shimmer buttons
export function ShimmerButtonThree({ className }) {
    return (
        <>
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
        </>
    );
}

// Component with 10 shimmer buttons
export function ShimmerButtonTen({ className }) {
    return (
        <>
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
            <ShimmerButton size="lg" className={className} />
        </>
    );
}
