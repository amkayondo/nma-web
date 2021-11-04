import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { useState } from 'react'

export interface SplashScreenProps {
    style?: object,
    logo: any
}

const SplashScreen = (props: SplashScreenProps) => {
    const [color, setColor]= useState("")
    const styles: object = {
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        animation: "b 30s cubic-bezier(.6,0,.4,1) forwards",
    }
    setTimeout(() => setColor("#F7911D"), 2000)
    return (
        <Container className="d-flex align-items-center justify-content-center" style={styles} fluid {...props.style}>
            <div className="d-flex justify-content-center " >
                <Image
                    src={props.logo} width={240} height={240} />
            </div>
        </Container>
    )
}



export default SplashScreen