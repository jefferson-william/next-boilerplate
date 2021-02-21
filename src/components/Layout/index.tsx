import React, { FC } from 'react'
import GlobalStyles from '~/styles/global'

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
