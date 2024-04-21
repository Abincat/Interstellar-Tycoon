
<template>
    <section>
        <!-- <div class="cardAppear" @scroll="cardMove($event)">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div> -->
        <!----------- 計畫簡述卡片 ----------->
        <article class="cardAppear" @scroll="cardMove($event)">
            <div class="planIntroduceText">
                <p>地球作為人類的家園，面臨著能源枯竭等重大問題，這不僅對地球生態系統造成嚴重衝擊，也對人類的未來生存提出了嚴峻挑戰。
                <br/>
                <br/>
                在面對這些挑戰的同時，我們意識到單純依賴地球資源和能源已經不再可行。為了尋找新的生存空間和能源來源，我們擬定了太空移居計畫。這個計畫的目標不僅是為了擴展人類的生存領域，更是為了保護地球上珍貴的生態系統和資源，讓我們的後代也能享有美好的生活。</p>
            </div>
            <img src="../assets/images/brokenEarth.jpg" alt="brokenEarth">
        </article>
        <article class="cardAppear" @scroll="cardMove($event)">
            <img src="../assets/images/ourPlanet.png" alt="ourPlanet">
            <div class="planIntroduceText">
                <h2>我們的星球</h2>
                <p>在我們的星球移居計畫中，我們對於挑選適合居住的星球把關嚴格，以確保居民在太空中有一個安全、舒適的家園。我們進行了多項環境測試和生物調查，並符合<b class="planIntroduceTextMark">HN-AC星球安全認證標章</b>，以下是我們的把關要點：
                <br/>
                <br/>
                <b class="planIntroduceTextMark">解決氧氣問題：</b>在太空移居計畫中，我們利用氧氣製造技術成功地克服了太空環境中氧氣供應的挑戰。透過先進的氧氣生產和循環系統，我們確保居民在太空中擁有充足的氧氣來源，保障居民的健康和安全。
                <br/><br/>
                <b class="planIntroduceTextMark">水資源豐富性：</b> 星球上豐富的水資源是我們考慮的重要因素之一。充足的水資源能夠支持居民的生活需要和農業生產。
                <br/><br/>
                <b class="planIntroduceTextMark">地形多樣性：</b> 我們考慮到了星球的地形多樣性，包括山脈、平原、森林等不同地形，這為居民提供了多樣的生活空間和資源。
                <br/><br/>
                <b class="planIntroduceTextMark">生物多樣性：</b> 我們重視星球的生物多樣性，這不僅豐富了星球的生態系統，也為居民提供了多種食物和生產資源。
                <br/><br/>
                <b class="planIntroduceTextMark">安全和穩定性：</b> 我們對星球的安全和穩定性進行評估，確保居民在太空中不受外部威脅和環境變化的影響。
                <br/><br/>
                經過以上把關原則的嚴格考量和評估，我們最終確定了一組符合標準的星球，這些星球將成為我們太空移居計畫的重要目的地，為居民提供安全、舒適的居住環境和美好的未來。</p>
            </div>
        </article>
        <article class="cardAppear" @scroll="cardMove($event)">
            <div class="planIntroduceText">
                <h2>先進的太空運輸設備</h2>
                <p>
                在太空移居計畫中，我們致力於提供多樣性和選擇性，以確保居民在太空中能夠有安全、舒適的生活環境。為了實現這一目標，我們引入了多先進的太空運輸設備，這些設備具有不同的特點和功能，能夠滿足不同居民的需求和偏好。
                <br/><br/>
                其中，我們設計了多樣性選擇的運輸船體，包括大小不同、功能各異的運輸船型。這些運輸船體配備了先進的引擎和推進系統，能夠在太空中快速穩定地航行。我們特別注重航行軌道的正確性和安全性，使用了最新的導航和控制系統，確保運輸船在航行過程中遵循正確的航道，同時將事故風險降為0％。
                <br/><br/>
                我們的太空運輸設備擁有先進的推進器和次光速航行系統，能夠在短時間內達到高速航行，從而大大縮短了從地球到目標星球的抵達時間。這些設備不僅速度快，而且安全可靠，經過多次測試和驗證，平均縮短了抵達時間超過1500％。這使得居民可以更快速、更舒適地抵達新的家園，開始新的太空生活。</p>
            </div>
            <img src="../assets/images/shippingExample.png" alt="shippingExample">
        </article>
        <article class="cardAppear" @scroll="cardMove($event)">
            <img src="../assets/images/houseExample.jpg" alt="houseExample">
            <div class="planIntroduceText">
                <h2>嚴選建材及最新建造技術</h2>
                <p>我們在太空移居計畫中應用了最新的建築技術，可以在太空中建造出具有引力空間的房屋。這些引力空間可以模擬地球的重力環境，提供舒適、穩定的生活和工作環境。同時，我們使用了最新的建材，如耐高壓、高溫的合金材料和具有抗輻射特性的材料，確保建築結構的堅固和居住者的安全。</p>
            </div>
        </article>

        <!----------- 太空服介紹 ----------->
        <article class="spaceSuit cardAppear" @scroll="cardMove($event)">
            <div class="spaceSuitText">
                <div>
                    <h3>高效保溫材料</h3>
                    <p>我們的太空服採用了高效保溫材料，能夠有效阻擋外部極端溫度對身體的影響。無論是在高溫太陽輻射下還是在寒冷的太空中，太空服都能保持舒適的溫度。</p>
                </div>
                <div>
                    <h3>耐輻射材料</h3>
                    <p>太空中的輻射是一個重要的安全問題，我們的太空服採用了耐輻射材料，能夠有效減少輻射對居民身體的影響，確保他們的健康和安全。</p>
                </div>
            </div>
            <img src="../assets/images/astronaut.png" alt="astronaut">
            <div class="spaceSuitText">
                <div>
                    <h3>呼吸系統設計</h3>
                    <p> 我們的太空服配備了先進的呼吸系統設計，包括氧氣供應和二氧化碳排放系統。這些設計保證了居民在太空中有足夠的氧氣供應，同時排出二氧化碳，保持良好的呼吸環境。</p>
                </div>
                <div>
                    <h3>防微生物設計</h3>
                    <p>太空中的微生物可能對居民造成健康威脅，我們的太空服設計了防微生物功能，能夠有效阻擋微生物的進入，保護居民免受感染。</p>
                </div>
            </div>
        </article>

        <!----------- 數據分析 ----------->
        <section class="modem cardAppear" @scroll="cardMove($event)">
            <h2>數據分析</h2>
            <p>太空移居計畫執行了10年以上，已穩定運行；移居總人口已達10萬，形成多元化社區，我們已開發25個星球作為居住地，在過去5年中，安全評估顯示太空運輸設備和居住環境達到安全第一水準。這些數據證明了我們計畫的成功和穩定性，為居民提供了安全、舒適和多元化的太空生活空間。</p>
            <div class="modemCard">
                <modemCard></modemCard>
            </div>
        </section>

        <!----------- 預約按鈕 ----------->

    </section>
</template>

<script setup>
import modemCard from "../components/modemCard.vue"

let cardMove = function(){
    //先把含有cardAppear的class標籤抓出來,抓出來會是陣列
    let cardArr = document.querySelectorAll('.cardAppear')

    //用for迴圈解陣列資料,讓他變成一筆一筆資料
    for(let i = 0 ; i < cardArr.length ; i++){

        let windowHight = window.innerHeight //監聽視窗高度
        let cardTop = cardArr[i].getBoundingClientRect().top //陣列中每一筆資料,用內建函式獲取每一個元素的上邊
        let cardPoint = 150 //這邊數字當作離視窗的高度值,用來計算
        
        if(cardTop < windowHight - cardPoint){
            cardArr[i].classList.add('show'); //把要出現的元素加上浮現特效的class
        }else{
            cardArr[i].classList.remove('show'); //超出視窗高度的就把特效class移除
        }
    }
}
window.addEventListener('scroll',cardMove)




</script>

<style scoped>

    section{
        display: block;
    }

    article{
        display: flex;
        width: 100%;
        margin: 150px 0;
    }

    article img{
        max-width: 50%;
        height: auto;
        object-fit: cover;
        opacity: 0.7;
    }

    article .planIntroduceText{
        align-content: center;
        margin: 0 50px;
    }

    .planIntroduceTextMark{
        color:rgb(237,192,147)
    }

    .spaceSuit{
        display: flex;
    }

    .spaceSuitText{
        display: block;
        width: 25%;
        align-content: space-around;
    }

    h2{
        color:rgb(237,192,147)
    }

    h3{
        padding: 100px 0 5px 0;
        color:rgb(237,192,147)
    }
    
    .modem{
        text-align: center
    }

    .modemCard{
        display: flex;
        justify-content: center;
    }

    .cardAppear{
        transition: opacity 1.5s ease;
        opacity: 0;
    }

    .cardAppear.show{
        opacity: 1;
    }

</style>