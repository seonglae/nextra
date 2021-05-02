import * as React from 'react'
import { NextSeo } from 'next-seo'

import type { NextPage } from '@/types/next'

const EmptyPage: NextPage = () => {
  return <NextSeo title="Empty" />
}

export default EmptyPage
