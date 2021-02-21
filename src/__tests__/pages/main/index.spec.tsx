import { act, waitFor } from '@testing-library/react'
import { getMoxios } from '~/__mocks__/lib/axios'
import { camelcase } from '~/__mocks__/store/Repo/sagas'
import { myRender } from '~/__stubs__/render'
import Main from '~/pages/main'
import '~/__mocks__/nextRouter'

describe('pages/main', () => {
  beforeEach(() => {
    const route = 'https://api.github.com/users/jefferson-william/repos'
    const moxios = getMoxios()

    moxios.onGet(route).reply(200, camelcase)
  })

  it('render', async () => {
    const { getByTestId, getAllByTestId } = myRender(<Main />)

    await waitFor(() => getAllByTestId('li'))

    act(() => {
      expect(getByTestId('logo')).toBeInTheDocument()
      expect(getAllByTestId('li')).toHaveLength(2)
    })
  })
})
