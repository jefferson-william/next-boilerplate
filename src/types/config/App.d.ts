import { AppProps } from 'next/app'
import { Store } from 'redux'
import States from '~/store/allStates'

export interface MyAppProps extends AppProps {
  store: Store<States, any>
}
