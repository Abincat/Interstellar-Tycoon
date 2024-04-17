
<template>
    <main>
        <div class="titleText">
            <h1>Interstellar</h1>
            <h2>Tycoon</h2>
            <div class="illustrate">
                <span>遠離平凡，迎接太空冒險！太空城市等你來，開啟驚奇的太空生活！在這裡，你可以探索無邊的宇宙，挑戰自己的極限，實現夢想！加入我們的太空家族，共同探索太空的無盡可能！</span>
            </div>
            <button @click="guided">JOIN US</button>
        </div>
        <div class="exhibit">
            <img src="../assets/images/earth.png" alt="earth">
        </div>
    </main>
    <div ref="planItem">
        <plan class="planItem"></plan>
    </div>
</template>

<script setup>
    import plan from "./plan.vue"
    import {ref} from "vue"
    
    //按下button觸發函式,錨點跳到設定ref的標籤上(注意!元件無法直接跳轉,所以外面用一層div包起來)
    let planItem = ref(null)
    let guided = function(){
        planItem.value.scrollIntoView({behavior:"smooth"}); //用內建函式scrollIntoView(),裡面可設定滾動時的效果及定位,這邊設置平滑滾動特效
    }
</script>

<style scoped>
    main{
        width: 100%;
        display: flex;
    }

    .titleText{
        width: 45%;
        text-align: center;
        padding-left: 50px;
    }

    .illustrate{
        display:block
    }

    h1{
        color:white;
        font-size: 140px;
        font-weight: bold;
        margin-top: 35px;
        margin-bottom: 0;
    }

    h2{
        color:white;
        font-size: 110px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 50px;
    }

    button{
        width: 150px;
        height: 40px;
        margin: 30px 0;
        border-radius: 30px;
        font-size: 16px ;
        border: none;
        cursor: pointer;
        background-color:rgb(183,145,108)
    }

    button:hover{
        box-shadow: rgb(239, 219, 87) 0px 0px 50px;
        background-color: rgb(255,208,78,1);
        color: blueviolet;
        font-weight: bold;
        animation: buttonHover 1s infinite;
    }

    @keyframes buttonHover{
        0%{
            font-size: 16px;
        }
        25%{
            font-size: 24px;
        }
        50%{
            font-size: 16px;
        }
        75%{
            font-size: 24px;
        }
        100%{
            font-size: 16px;
        }
    }

    /* 地球 */
    .exhibit{
        width: 55%;
        overflow: hidden;
    }

    .exhibit img{
        width: 105%;
        height: auto;
        animation: rotate 60s infinite;
    }
    
    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    .planItem{
        width: 80%;
        margin: 0 auto;
    }
</style>