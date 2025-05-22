
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from './App.tsx';
import './index.css';

export function render(url: string) {
  // Render the React app to a string
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  // Extract the Helmet data
  const helmet = Helmet.renderStatic();
  
  // Return the rendered HTML along with the Helmet data
  return {
    html,
    helmet,
  };
}
