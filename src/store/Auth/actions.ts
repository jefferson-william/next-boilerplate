import { action } from 'typesafe-actions'
import TYPES from '~/store/Auth/types'

export const setIsLogged = (isLogged: boolean) => action<string, object>(TYPES.SET_IS_LOGGED, { isLogged })

export const validateIsLoggedRequest = () => action<string, object>(TYPES.VALIDATE_IS_LOGGED_REQUEST, {})
