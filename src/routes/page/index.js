
// 动态引入router 遍历该文件夹下所有的非index.js文件
// import routeLayout from '../../components/common/routeLayout'
const path = require('path')
const files = require.context('../../views', true, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})

console.log(modules)
// export default modules
export default [
  {
    path: '/user/page1',
    component: modules.page1,
    name: 'page1',
    key: '/user/page1'
  },
  {
    path: '/user/page2',
    name: 'page2',
    key: '/user/page2',
    component: modules.layout,
    children: [{
      path: '/user/page2/one',
      component: modules.page2one,
      name: 'page2one',
      key: '/user/page2/one',
    },
    {
      path: '/user/page2/two',
      component: modules.page2two,
      name: 'page2two',
      key: '/user/page2/two',
    }
    ]
  },
  {
    path: '/user/page3',
    component: modules.page3,
    name: 'page3',
    key: '/user/page3'
  }
]