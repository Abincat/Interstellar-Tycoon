
<template>
    <main>
        <div class="titleText">
            <h1>Interstellar</h1>
            <h2>Tycoon</h2>
            <span>遠離平凡，迎接太空冒險！太空城市等你來，開啟驚奇的太空生活！在這裡，你可以探索無邊的宇宙，挑戰自己的極限，實現夢想！加入我們的太空家族，共同探索太空的無盡可能！</span>
            <button>JOIN US</button>
        </div>
        <div class="exhibit">
            <img src="../assets/images/earth.png" alt="earth">
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
    main{
        width: 100%;
        display: flex;
        padding-left: 50px;
    }

    .titleText{
        width: 100%;
        text-align: center
    }

    h1{
        color:white;
        font-size: 140px;
        font-weight: bold;
        margin-top: 150px;
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
    }

    button:hover{
        box-shadow: rgb(239, 219, 87) 0px 0px 50px;
        background-color: rgb(255,208,78,1);
        color: blueviolet;
        font-weight: bold;
        /* font-size: 20px; */
        animation: buttonHover 1s infinite;
    }

    @keyframes buttonHover{
        0%{
            font-size: 16px;
        }
        20%{
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
    .exhibit img{
        width: 100%;
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
</style>