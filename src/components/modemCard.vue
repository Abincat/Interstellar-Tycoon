
<template>
    <div class="cardList" v-for="modem in modems">
        <section>
            <img :src="modem.modemImg">
            <p>{{ modem.modemTitle }}</p>
        </section>
        <article>
            <span class="modemNumText">{{ modem.modemNum }}</span>
            <p>{{ modem.modemNarrate }}</p>
        </article>
    </div>
</template>

<script>

import timeImg from "../assets/images/hourglass.png"
import safeImg from "../assets/images/crown.png"
import movePlaceImg from "../assets/images/route.png"
import peopleImg from "../assets/images/man.png"

export default{
    data(){
        return{
            modems:[
                {modemImg:timeImg,
                modemTitle:"多年的營運時間",
                modemNum:"10YEAR",
                modemNarrate:"我們的太空移居計畫已經執行了10年，經過了多次測試和改進，取得了穩步的進展。"},

                {modemImg:safeImg,
                modemTitle:"安全保證金牌",
                modemNum:"NO.1",
                modemNarrate:"我們始終將安全置於首位，採取了多層次的安全措施和防範措施，確保居民在航行及生活中的安全和健康"},

                {modemImg:movePlaceImg,
                modemTitle:"移居的總人口",
                modemNum:"3,000,000",
                modemNarrate:"目前，我們已經成功移居了3百萬人口，並持續擴大移民規模，以實現更廣泛的太空移居目標。"},

                {modemImg:peopleImg,
                modemTitle:"開發中的星球",
                modemNum:"25",
                modemNarrate:"目前我們正在開發25個符合人類長期居住環境條件的星球，這些星球將成為我們太空移居計畫的重要目的地。"},

                
            ]
        }
    }
}



</script>

<style scoped>
.cardList{
    width: 22%;
    display: block;
    margin:20px;
}

section{
    display:block;
    font-size: 12px;
}

article{
    display: block;
    text-align: center;
}

.cardList img{
    width: 70px;
    height:70px;
    
}
.modemNumText{
    font-size: 52px;
    font-weight: bold;
    text-align: center;
    color:rgb(237,192,147)
}
</style>