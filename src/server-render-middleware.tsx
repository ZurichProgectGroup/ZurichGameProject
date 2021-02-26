import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import App from 'Components/App';
import configureAppStore from 'Store';
import getInitialState from 'Store/getInitialState';
import Helmet, { HelmetData } from 'react-helmet';

export default (req: Request, res: Response) => {
    const location = req.url || '/';
    const context: StaticRouterContext = {};
    const initialState = getInitialState();
    const store = configureAppStore(initialState);
    const helmetData = Helmet.renderStatic();

    const jsx = (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const reactHtml = renderToString(jsx);

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    res
        .status(context.statusCode || 200)
        .send(getHtml(reactHtml, { state: store.getState() }, helmetData));
};

function getHtml(reactHtml: string, initialState, helmetData: HelmetData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="/app.css" rel="stylesheet" />
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
    </head>
    <body>
        <div class="app">${reactHtml}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/app.js"></script>
    </body>
    </html>
    `;
}
