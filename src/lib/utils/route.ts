import { ONE, ZERO } from '../constants/constants';

export function getPageTitle(path: string): string {
  if (path === '') return 'Overview';
  return path.charAt(ZERO).toUpperCase() + path.slice(ONE).replace('-', ' ');
}
