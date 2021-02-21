// @ts-nocheck
import 'jest-styled-components' // https://github.com/styled-components/jest-styled-components#snapshot-testing
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

global.MutationObserver = global.window.MutationObserver
