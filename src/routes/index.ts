import React from 'react';
import EventPage from '../pages/EventPage';
import LoginPage from '../pages/LoginPage';

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN_PAGE = '/login',
    EVENT_PAGE = '/main'
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN_PAGE, element: LoginPage }
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.EVENT_PAGE, element: EventPage }
]