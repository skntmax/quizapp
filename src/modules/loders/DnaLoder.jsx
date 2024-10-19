import { cn } from "@/lib/utils";
import { DNA } from "react-loader-spinner";

export default function DnaLoder() {
    return <div className={cn('w-screen  md:h-screen h-svh flex justify-center items-center')}>
        <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{height:"100vh"}}
            wrapperClass="dna-wrapper"
        />
    </div>
}