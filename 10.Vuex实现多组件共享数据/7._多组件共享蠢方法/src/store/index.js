// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    odd: function (context, val) {
        console.log('actions中的odd被调用了')
        if (context.state.sum % 2) {
            context.commit('JIA', val)
        }
    },
    wait: function (context, val) {
        console.log('actions中的wait被调用了')
        setTimeout(() => {
            context.commit('JIA', val)
        }, 1000)
    }
}
//准备mutations--用于操作数据 (state)
const mutations = {
    JIA(conText, val) {
        console.log('mutations的JIS被调用了')
        conText.sum += val
    },
    MINUS(conText, val) {
        console.log('mutations的MINUS被调用了')
        conText.sum -= val
    },
    // ODD(conText, val) {
    //     console.log('mutations的ODD被调用了')
    //     conText.sum += val
    // },
    // WAIT(conText, val) {
    //     console.log('mutations的WAIT被调用了')
    //     conText.sum += val
    // },


    ADD_Person(state, val) {
        console.log('mutations中的ADD_Person被调用了', state, val)
        state.personList.unshift(val)
    }
}
//准备state--用于存储数据
const state = {
    sum: 1, //当前的和
    name: '鸣启',
    subject: 'web前端JavaScript',

    personList: [
        {id: '001', name: '咪咪'},
        {id: '002', name: '阿伟'}
    ]
}

//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
