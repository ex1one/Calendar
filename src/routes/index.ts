import React from 'react';
import Login from '../pages/Login/Login';
import Event from '../pages/Event/Event';

export interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, element: Event },
];
