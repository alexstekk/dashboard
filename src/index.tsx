import {render} from "react-dom";
import {App} from "./app/App";
import './app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/provides/themeProvider";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)