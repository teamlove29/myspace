import 'bootstrap/dist/css/bootstrap.min.css'
import './font.css'
import Style from './style'

export default function MyApp({Component, pageProps}) {

    return (
        <Style>
            <Component {...pageProps} />
        </Style>
    )
}
