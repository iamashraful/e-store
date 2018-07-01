import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
    products: [
        {
            name: 'Lux', id: 1, price: 50, images: [
                '/assets/logo.png', "/assets/logo.png"
            ]
        },
        {
            name: 'Sunsilk', id: 2, price: 3, images: [
                '/assets/logo.png', "/assets/logo.png"
            ]
        },
        {
            name: 'Mortin', id: 3, price: 55, images: [
                '/assets/logo.png', "/assets/logo.png"
            ]
        },
        {
            name: 'Meril', id: 4, price: 23, images: [
                '/assets/logo.png', "/assets/logo.png"
            ]
        },
        {
            name: 'Fair & Lovely', id: 5, price: 80, images: [
                '/assets/logo.png', "/assets/logo.png"
            ]
        },
    ]
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
