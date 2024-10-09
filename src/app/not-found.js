import { Button } from '@/components/ui/button'
import { PaginationLink } from '@/components/ui/pagination'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link href="/" className="inline-flex bg-gray-900 text-white mx-5 my-4 lg:py-4 lg:px-4 rounded-lg">Back to Homepage</Link>
                </div>
            </div>
        </section>
    )
}