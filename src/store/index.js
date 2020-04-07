import Vue from 'vue'
import Vuex from 'vuex'

import TopbarMod from "./module/TopbarModule"
import BotbarMod from "./module/Botbarmodule"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    TopbarMod,
    BotbarMod
  }
})
