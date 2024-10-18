import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provides/themeProvider';
import { App } from 'app/App';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
