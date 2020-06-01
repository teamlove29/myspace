import 'bootstrap/dist/css/bootstrap.min.css'
import '../layout/Modal/font.css'
import { ThemeProvider } from 'styled-components'

export default function MyApp({Component, pageProps}) {

    const theme = {
        colors: {
          primary: 'orange',
        },
      }

    return (
        <ThemeProvider theme={theme} >
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
