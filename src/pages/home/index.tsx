import { useSelector } from 'react-redux'
import { NextPage } from 'next'
import { END } from 'redux-saga'
import Layout from '~/components/Layout'
import Main from '~/components/Main'
import wrapperStore from '~/store'
import * as RepoActions from '~/store/Repo/actions'
import { Repo } from '~/types/store/Repo/state'
import States from '~/types/store/rootStates'

const Component: NextPage = () => {
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  return (
    <Layout>
      <Main repos={repos} href="/main" />
    </Layout>
  )
}

export const getServerSideProps = wrapperStore.getServerSideProps<Promise<void>>(async ({ store }) => {
  store.dispatch(RepoActions.reposRequest('jefferson-william'))

  store.dispatch(END)

  await (store as any).sagaTask.toPromise()
})

export default Component
