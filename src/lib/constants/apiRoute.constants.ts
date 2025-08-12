
class ROUTES {
    
    private BASE_AUTH_URL = '/auth'
    private BASE_USER_URL = '/user'
    private BASE_RECIPE_URL = '/recipes'

    AUTH = {
        REGISTER: `${this.BASE_AUTH_URL}/register`,
        LOGIN: `${this.BASE_AUTH_URL}/login`,
        VERIFY: `${this.BASE_AUTH_URL}/verify`,
    }

    USER = {
        GET: this.BASE_USER_URL,
        LOGOUT: `${this.BASE_USER_URL}/logout`,
    }

    RECIPE = {
        GET_ALL: this.BASE_RECIPE_URL,
        POST_CREATE_RECIPE: this.BASE_RECIPE_URL,
        GET_MY_RECIPE: `${this.BASE_RECIPE_URL}/my`
    }

}

export const API_ROUTES = new ROUTES()