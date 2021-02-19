import Router from 'next/router'

const router: any = {
  push: jest.fn(),
  prefetch: jest.fn(),
}

Router.router = router
