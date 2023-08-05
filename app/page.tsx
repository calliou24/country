import Link from "next/link";

export default function Home() {
    return (
        <main className={'w-screen h-screen grid place-items-center'}>
            <div className={'grid place-items-center gap-3'}>
                <Link href={'/countries'} className={`relative bg-white text-center gap-3 rounded-md border-2 border-black py-2 px-7`}>Lets Start</Link>
                by Alexis Ortega Reyes
            </div>
        </main>
    )
}