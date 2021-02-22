import { FC } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'
import GlobalStyles from '~/styles/global'

const Layout: FC = ({ children }) => (
  <>
    <CssBaseline />
    <StylesProvider>
      <GlobalStyles />
    </StylesProvider>
    {children}
  </>
)

export default Layout
