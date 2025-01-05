export interface Payee {
  id: number;
  name: string;
  designation: string;
  avatar: string;
}

export enum CardType {
  CARD_TYPE_1 = 'CARD_TYPE_1',
  CARD_TYPE_2 = 'CARD_TYPE_2',
}

export interface Card {
  id: number;
  name: string;
  number: string;
  expiry: string;
  type: string;
  balance: number;
  limit: number;
  holderName: string;
  cardType: CardType;
}

export enum TransactionCategory {
  PAYPAL = 'PAYPAL',
  DEPOSIT_CARD = 'DEPOSIT_CARD',
  JEMI_WILSON = 'JEMI_WILSON',
}
