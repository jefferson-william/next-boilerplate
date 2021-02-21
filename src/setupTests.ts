// @ts-nocheck
import React from 'react'
import 'jest-styled-components' // https://github.com/styled-components/jest-styled-components#snapshot-testing
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

global.MutationObserver = global.window.MutationObserver

React.useLayoutEffect = React.useEffect
