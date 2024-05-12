import { assignKeys } from '../../../helpers/assignKeys';
import { MenuItem } from './types';

const MENU_ITEMS: Omit<MenuItem, 'key'>[] = [
  {
    text: 'Github',
    to: '/',
  },
  {
    text: 'Contacts',
    to: '/',
  },
  {
    text: 'Rights',
    to: '/',
  },
];

export const menuItems: MenuItem[] = assignKeys(MENU_ITEMS);
