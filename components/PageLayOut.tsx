import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SplashScreen from './SplashScreen'

export interface PageLayOutProps {
    children: any,
    fluid?: boolean,
    style?: object,
    className?: string
}

const PageLayOut = (props: PageLayOutProps) => {
    // const [isLoading, setIsLoading] = useState(true)
    // setTimeout(() => setIsLoading(false), 5000)
    // if(isLoading === true) return <SplashScreen logo={"/nma_logo.png"}/>
    return (
        <Container {...props} >
            {props.children}
        </Container>
    )
}

export default PageLayOut