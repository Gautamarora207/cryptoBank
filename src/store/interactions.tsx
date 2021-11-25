// User

import { userAccountLoaded } from "./actions"


export const loadUserAccount = async (account:any, dispatch:any) => {
  try {
    dispatch(userAccountLoaded(account));
    return account
  } catch (error) {
    return null
  }
}

export const loadUserCrypto = async (crypto:any, dispatch:any) => {
  try {
    dispatch(userAccountLoaded(crypto));
    return crypto
  } catch (error) {
    return null
  }
}