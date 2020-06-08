import {Button} from 'react-bootstrap'
import styled from 'styled-components'
export default function LoginButton({ children }) {
    const Button = styled.button`
                    width: 150px;
                    font-weight: 500;
                    font-size: 13px;
                    background: red;
                    background: -webkit-linear-gradient(-90deg, #f3145e, yellow);
                    background: -o-linear-gradient(-90deg, #f3145e, yellow);
                    background: -moz-linear-gradient(-90deg, #f3145e, yellow);
                    background: linear-gradient(-90deg, #f3145e, yellow);
                    border: 0;
                    border-radius: 25px;
    `
    return(
    <>
    <Button className="btn text-light">
    {children}
    </Button>
    </>
    );
}