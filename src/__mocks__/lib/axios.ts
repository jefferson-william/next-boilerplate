import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const getMoxios = () => new MockAdapter(axios)
