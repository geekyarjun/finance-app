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

export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
}>;

export type AuthResponse = {
  jwt: string;
  user: User;
};
