import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextPage } from 'next'
import Link from 'next/link'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import Layout from '~/components/Layout'
import * as RepoActions from '~/store/Repo/actions'
import { Main } from '~/styles/pages/main'
import { Repo } from '~/types/store/Repo/state'
import States from '~/types/store/rootStates'

const Component: NextPage = () => {
  const dispatch = useDispatch()
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  useEffect(() => {
    dispatch(RepoActions.reposRequest('jefferson-william'))
  }, [])

  return (
    <Layout>
      <Main className="main">
        <header className="main-header">
          <Logo data-testid="logo" />
        </header>
        <main>
          <p>
            <Link href="/home">
              <a>Go to /home</a>
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
      </Main>
    </Layout>
  )
}

export default Component
