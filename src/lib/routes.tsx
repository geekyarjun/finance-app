import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

// Lazy load pages
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Transactions = lazy(() => import('../pages/Transactions'));
const Accounts = lazy(() => import('../pages/Accounts'));
const Investments = lazy(() => import('../pages/Investments'));
const CreditCards = lazy(() => import('../pages/CreditCards'));
const Loans = lazy(() => import('../pages/Loans'));
const Services = lazy(() => import('../pages/Services'));
const Privileges = lazy(() => import('../pages/Privileges'));
const Settings = lazy(() => import('../pages/Settings'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
  {
    path: '/accounts',
    element: <Accounts />,
  },
  {
    path: '/investments',
    element: <Investments />,
  },
  {
    path: '/credit-cards',
    element: <CreditCards />,
  },
  {
    path: '/loans',
    element: <Loans />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/privileges',
    element: <Privileges />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
];
