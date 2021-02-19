import React from 'react'
import { useSelector } from 'react-redux'
import { NextPage } from 'next'
import Link from 'next/link'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import { Home } from '~/pages/home/styles'
import * as RepoActions from '~/store/Repo/actions'
import GlobalStyle from '~/styles/global'
import States from '~/types/store/allStates'
import { Repo } from '~/types/store/Repo/state'

const Component: NextPage = () => {
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  return (
    <>
      <GlobalStyle />
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
    </>
  )
}

Component.getInitialProps = ({ store }) => {
  store.dispatch(RepoActions.reposRequest('jefferson-william'))

  return {}
}

export default Component
