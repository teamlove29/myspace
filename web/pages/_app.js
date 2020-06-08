import 'bootstrap/dist/css/bootstrap.min.css'
import './font.css'
import Style from './style'
import {ModalProvider} from '../hook/ModalProvider'

export default function MyApp({Component, pageProps}) {

    return (
        <ModalProvider>
        <Style>
            <Component {...pageProps} />
        </Style>
        </ModalProvider>
    )
}
