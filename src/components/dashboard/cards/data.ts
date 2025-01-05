import { Card, CardType } from '@/types/api';

export const cards: Card[] = [
  {
    id: 1,
    name: 'Premium Credit Card',
    number: '3778 **** **** 1234',
    expiry: '12/24',
    type: 'visa',
    balance: 2850.5,
    limit: 5000,
    holderName: 'Eddy Cusuma',
    cardType: CardType.CARD_TYPE_1,
  },
  {
    id: 2,
    name: 'Rewards Card',
    number: '3778 **** **** 1234',
    expiry: '09/25',
    type: 'mastercard',
    balance: 1250.75,
    limit: 3000,
    holderName: 'John doe',
    cardType: CardType.CARD_TYPE_2,
  },
  {
    id: 3,
    name: 'Business Card',
    number: '3778 **** **** 1234',
    expiry: '06/25',
    type: 'visa',
    balance: 4500.25,
    limit: 10000,
    holderName: 'Nkosi Brown',
    cardType: CardType.CARD_TYPE_1,
  },
] as const;
