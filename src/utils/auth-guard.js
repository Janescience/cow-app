import { setCurrentUser } from '@/utils'
import TokenService from '@/services/token'

export default (to, from, next) => {
    if (to.matched.some(record => record.meta.loginRequired)) {
        const user = TokenService.getUser()
        if (user && user.accessToken) {
            next()
        } else {
            setCurrentUser(null)
            next('/login')
        }
    } else {
        next()
    }
  }