import { useSelector } from 'react-redux'
import { NextPage } from 'next'
import Link from 'next/link'
import { END } from 'redux-saga'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import Layout from '~/components/Layout'
import wrapperStore from '~/store'
import * as RepoActions from '~/store/Repo/actions'
import { Home } from '~/styles/pages/home'
import { Repo } from '~/types/store/Repo/state'
import States from '~/types/store/rootStates'

const Component: NextPage = () => {
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  return (
    <Layout>
      <Home className="main">
        <header className="main-header">
          <Logo data-testid="logo" />
        </header>
        <main>
          <p>
            <Link href="/">
              <a>Go to /</a>
            </Link>
          </p>
          <ul>
            {repos.map(({ id, fullName }) => (
              <li key={id} data-testid="li">
                {fullName}
              </li>
            ))}
          </ul>
        </main>
      </Home>
    </Layout>
  )
}

export const getServerSideProps = wrapperStore.getServerSideProps<Promise<void>>(async ({ store }) => {
  store.dispatch(RepoActions.reposRequest('jefferson-william'))

  store.dispatch(END)

  await (store as any).sagaTask.toPromise()
})

export default Component
