export default function Home() {
    return (
        <main className="relative flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6 font-sans dark:bg-black">
            <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-zinc-200 blur-3xl dark:bg-zinc-900" />

            <section className="relative flex w-full max-w-xl flex-col items-center gap-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-base font-bold tracking-wide text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                    HNW
                </div>

                <div className="flex flex-col items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                        Personal Website
                    </span>

                    <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                        HIDAYAT NUR WAHID
                    </h1>

                    <div className="h-px w-24 bg-zinc-300 dark:bg-zinc-700" />

                    <p className="text-xl font-medium tracking-wide text-zinc-500 dark:text-zinc-400">HAPPY CODING</p>
                </div>
            </section>
        </main>
    );
}
