import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from '@/styles/404.module.css'

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')
        }, 3000)
    }, [])
    return ( 
        <>
        <Head>
            <title>Error | PhotoSwift</title>
        </Head>
        <div className={styles.error}>
            <div>
            <h1>Ooopss!...404</h1>
            <h2>That Page cannot be found</h2>
            <p>Go back to the <Link href="/"><b>Home page</b></Link></p>
            </div>
        </div>
        </>
     );
}
 
export default NotFound;