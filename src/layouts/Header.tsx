import Head from "next/head";

export default function Header({ title }: any) {
    return (
        <>
            <Head>
                <title>Le Ha Gia Bao | {title}</title>
            </Head>
        </>
    )
}