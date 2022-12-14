import { Route, RouterProvider } from 'atomic-router-react';

import { HomePage, homeRoute } from '$pages';

import { router } from './routing';

export const App = () => (
    <RouterProvider router={router}>
        <Route route={homeRoute} view={HomePage} />
    </RouterProvider>
);
