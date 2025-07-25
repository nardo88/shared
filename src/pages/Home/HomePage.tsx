import type { FC } from 'react'

import { Home } from '@features/Home'
import { Layout } from '@widgets/Layout/Layout'

export const HomePage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <Home />
      </div>
    </Layout>
  )
}
