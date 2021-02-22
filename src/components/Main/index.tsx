import { Fragment } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Card, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import { Repo } from '~/types/store/Repo/state'
import { Main } from './styles'

interface MainProps {
  repos: Repo[]
  href: string
}

const Component: NextPage<MainProps> = ({ repos, href }) => (
  <Main className="main">
    <header className="main-header">
      <Logo data-testid="logo" />
    </header>
    <main>
      <Typography component="p">
        <Link href={href}>
          <a>Go to {href}</a>
        </Link>
      </Typography>
      <Card>
        <List component="nav" aria-label="Lista de repositórios">
          {repos.map(({ id, fullName }) => (
            <Fragment key={id}>
              <ListItem data-testid="li">
                <ListItemText primary={fullName} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Card>
    </main>
  </Main>
)

export default Component
