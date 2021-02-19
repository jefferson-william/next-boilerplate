import React from 'react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { RouterContext } from 'next-server/dist/lib/router-context'
import { render, waitFor } from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { camelcase } from '~/__mocks__/store/Repo/sagas'
import Home from '~/pages/home'
import configureStore from '~/store'

import '~/__mocks__/nextRouter'

describe('pages/home', () => {
  beforeEach(() => {
    const route = 'https://api.github.com/users/jefferson-william/repos'
    const moxios = new MockAdapter(axios)

    moxios.onGet(route).reply(200, camelcase)
  })

  it('render', async () => {
    const makeStore = {}
    const store = configureStore(makeStore, { isServer: false, req: undefined })
    const router: any = {
      pathname: 'home',
    }

    const { getByTestId, getAllByTestId } = render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <Home />
        </Provider>
      </RouterContext.Provider>
    )

    act(() => {
      expect(getByTestId('logo')).toBeInTheDocument()
    })

    waitFor(() => {
      expect(getAllByTestId('li')).toHaveLength(2)
    })
  })
})
