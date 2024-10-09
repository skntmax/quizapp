'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        // <div>
        //     <h2>Something went wrong!</h2>
        //     <Button
        //         variant='destructive'
        //         size='lg'
        //         onClick={
        //             // Attempt to recover by trying to re-render the segment
        //             () => reset()
        //         }
        //     >
        //         Try again
        //     </Button>
        // </div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"></h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's wrong.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{error.message} </p>
                    {/* <Link href="/" className="inline-flex bg-gray-900 text-white mx-5 my-4 lg:py-4 lg:px-4 rounded-lg">Back to Homepage</Link> */}
                    <Button
                        variant='dark'
                        size='lg'
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        Try again
                    </Button>
                </div>
            </div>
        </section>
    )
}