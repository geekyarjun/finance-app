import {
  User,
  Home,
  Investment,
  Transaction,
  CreditCard,
  Loan,
  Tools,
  Econometrics,
  Settings2,
} from '@/components/svg';

export const navigationItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: Home,
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icon: Transaction,
  },
  {
    label: 'Accounts',
    path: '/accounts',
    icon: User,
  },
  {
    label: 'Investments',
    path: '/investments',
    icon: Investment,
  },
  {
    label: 'Credit Cards',
    path: '/credit-cards',
    icon: CreditCard,
  },
  {
    label: 'Loans',
    path: '/loans',
    icon: Loan,
  },
  {
    label: 'Services',
    path: '/services',
    icon: Tools,
  },
  {
    label: 'My Privileges',
    path: '/privileges',
    icon: Econometrics,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings2,
  },
];
