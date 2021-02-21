import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'
import { getMoxios } from '~/__mocks__/lib/axios'
import { camelcase } from '~/__mocks__/store/Repo/sagas'

describe('pages/main', () => {
  beforeEach(async () => {
    const route = 'https://api.github.com/users/jefferson-william/repos'
    const moxios = getMoxios()

    moxios.onGet(route).reply(200, camelcase)

    const { render } = await getPage({ route: '/main' })

    render()
  })

  it('render', async () => {
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getAllByTestId('li')).toHaveLength(2)
  })
})
