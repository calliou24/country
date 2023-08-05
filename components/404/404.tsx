import Link from "next/link";

export default function Component404() {

    return (
        <>
            <h1 className={'text-center mt-14 text-4xl'}>404</h1>
            <p className={'text-center '}>The page you are looking for could not be found.</p>
            <Link href={'/countries'} className={'text-blue-500 text-center underline w-full block'}>Go back home</Link>
        </>
    )
}