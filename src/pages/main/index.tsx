import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextPage } from 'next'
import Layout from '~/components/Layout'
import Main from '~/components/Main'
import * as RepoActions from '~/store/Repo/actions'
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
      <Main repos={repos} href="/home" />
    </Layout>
  )
}

export default Component
