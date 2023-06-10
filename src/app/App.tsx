import React from "react";
import { Router } from './routes';

export const App = () => {
    return (
        <React.Suspense fallback={null}>
            <Router />
        </React.Suspense>
    );
}