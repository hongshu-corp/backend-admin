import Layout from '@/views/layout/Layout'

const securityRouter = {
  path: '/security',
  component: Layout,
  redirect: 'noredirect',
  name: 'securityManagement',
  meta: {
    title: 'securityManagement',
    icon: 'user'
  },
  children: [
    {
      path: 'users',
      component: () => import('@/views/security/users/index'),
      name: 'Userlist',
      meta: { title: 'userAll' }
    },
    {
      path: 'roles',
      component: () => import('@/views/security/roles/index'),
      name: 'Rolelist',
      meta: { title: 'roleAll' }
    },
    {
      path: 'permissions',
      component: () => import('@/views/security/permissions/index'),
      name: 'Permissionlist',
      meta: { title: 'permissionAll' }
    }
  ]
}

export default securityRouter
