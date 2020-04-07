<template>
    <div id="city">
        这是城市组件
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState("TopbarMod",["isTopbarShow"]),
        ...mapState("BotbarMod",["isBotbarShow"])
        
    },
    mounted(){
      
    },
    destroyed(){
     
    }
    
}
</script>

<style lang="scss" scoped>

</style>
