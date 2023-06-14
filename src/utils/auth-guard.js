import { setCurrentUser } from '@/utils'
import TokenService from '@/services/token'

export default (to, from, next) => {
    const user = TokenService.getUser()
    if (to.matched.some(record => record.meta.loginRequired)) {
        if (user && user.accessToken) {
            next()
        } else {
            setCurrentUser(null)
            next('/login')
        }
    } else {
        if (user && user.accessToken) {
            next('/dashboard')
        }else{
            next()
        }
    }
  }
