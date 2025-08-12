
class ROUTES {

    private readonly root = '/app'

    HOME = this.root
    AUTH = '/auth'
    APP = {
        PROFILE: `${this.root}/profile`,
        ALL_RECIPES: `${this.root}/recipes`,
        MY_RECIPES: `${this.root}/my`,
        ADD_RECIPES: `${this.root}/add`,
    }
    
}

export const PAGE_ROUTES = new ROUTES()