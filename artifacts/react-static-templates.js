

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/eric/Projects/modern-jungle/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/eric/Projects/modern-jungle/src/pages/404.tsx'), universalOptions)
      t_0.template = '/Users/eric/Projects/modern-jungle/src/pages/404.tsx'
      
const t_1 = universal(import('/Users/eric/Projects/modern-jungle/src/pages/about.tsx'), universalOptions)
      t_1.template = '/Users/eric/Projects/modern-jungle/src/pages/about.tsx'
      
const t_2 = universal(import('/Users/eric/Projects/modern-jungle/src/pages/contests.tsx'), universalOptions)
      t_2.template = '/Users/eric/Projects/modern-jungle/src/pages/contests.tsx'
      
const t_3 = universal(import('/Users/eric/Projects/modern-jungle/src/pages/index.tsx'), universalOptions)
      t_3.template = '/Users/eric/Projects/modern-jungle/src/pages/index.tsx'
      
const t_4 = universal(import('/Users/eric/Projects/modern-jungle/src/containers/Article'), universalOptions)
      t_4.template = '/Users/eric/Projects/modern-jungle/src/containers/Article'
      
const t_5 = universal(import('/Users/eric/Projects/modern-jungle/src/containers/Category'), universalOptions)
      t_5.template = '/Users/eric/Projects/modern-jungle/src/containers/Category'
      

// Template Map
export default {
  '/Users/eric/Projects/modern-jungle/src/pages/404.tsx': t_0,
'/Users/eric/Projects/modern-jungle/src/pages/about.tsx': t_1,
'/Users/eric/Projects/modern-jungle/src/pages/contests.tsx': t_2,
'/Users/eric/Projects/modern-jungle/src/pages/index.tsx': t_3,
'/Users/eric/Projects/modern-jungle/src/containers/Article': t_4,
'/Users/eric/Projects/modern-jungle/src/containers/Category': t_5
}
// Not Found Template
export const notFoundTemplate = "/Users/eric/Projects/modern-jungle/src/pages/404.tsx"

