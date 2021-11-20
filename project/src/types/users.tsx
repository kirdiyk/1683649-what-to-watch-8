import {Token} from '../token';

export type Users = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token,
}

export type UserFromServer = {
  id: number,
  email: string,
  name: string,
  'avatar_url'?: string,
  token: Token,
}
