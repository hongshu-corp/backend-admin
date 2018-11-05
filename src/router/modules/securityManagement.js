import Layout from '@/views/layout/Layout'

const securityRouter = {
  path: '/users',
  component: Layout,
  redirect: 'noredirect',
  name: 'securityManagement',
  meta: {
    title: 'securityManagement',
    icon: 'user'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/roles/index'),
      name: 'Rolelist',
      meta: { title: 'roleAll' }
    },
    {
      path: '',
      component: () => import('@/views/users/index'),
      name: 'Userlist',
      meta: { title: 'userAll' }
    }
  ]
}

export default securityRouter