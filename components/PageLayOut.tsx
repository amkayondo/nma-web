import { Container } from 'react-bootstrap'

export interface PageLayOutProps {
    children: any,
    fluid?: boolean,
    style?: object,
    className?: string
}

const PageLayOut = (props: PageLayOutProps) => {
    return (
        <Container {...props} >
            {props.children}
        </Container>
    )
}

export default PageLayOut