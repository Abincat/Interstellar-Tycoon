
<template>
    <section>
        <h1>選擇喜歡的星球</h1>
        <main>
            <div class="planets">
                <img src="../assets/images/planetLine.png" alt="planetLine" class="planetLine">
            
            <!-- 以下是其他星球 -->
            <div class="AeolusBlock">
                <img src="../assets/images/Aeolus.png" alt="Aeolus" class="Aeolus">
                <p>風神星</p>
            </div>
            <div class="BozelaBlock">
                <img src="../assets/images/Bozela.png" alt="Bozela" class="Bozela">
                <p>波澤拉星</p>
            </div>
            <div class="PurpuraHeronBlock">
                <img src="../assets/images/PurpuraHeron.png" alt="PurpuraHeron" class="PurpuraHeron">
                <p>紫鷺星</p>
            </div>
            <div class="RedSidusBlock">
                <img src="../assets/images/RedSidus.png" alt="RedSidus" class="RedSidus">
                <p>赤星</p>
            </div>
            <div class="StellaCupreaBlock">
                <img src="../assets/images/StellaCuprea.png" alt="StellaCuprea" class="StellaCuprea">
                <p>紫銅星</p>
            </div>
            <div class="ThermaliaBlock">
                <img src="../assets/images/Thermalia.png" alt="Thermalia" class="Thermalia">
                <p>溫泉星</p>
            </div>
            <div class="YamaraBlock">
                <img src="../assets/images/Yamara.png" alt="Yamara" class="Yamara">
                <p>雅瑪拉星</p>
            </div>
            </div>
        </main>
    </section>
</template>

<script setup>

</script>

<style scoped>
    section{
        width: 100%;
        text-align: center;
        align-content: center;
    }

    .planetLine{
        width: 100%;
        height: auto;
    }

    .planets{
        width: 85%;
        margin: 0 auto;
        position: relative;
    }

    /* ----------各星球的微調樣式---------- */

    /* 風神星-橘藍色星球 */
    .Aeolus{
        width: 90px;
        height: 90px;
        filter:grayscale(80%);
    }
    .AeolusBlock{
        display: block;
        position: absolute;
        top:75%;
        left:80%;
    }
    .AeolusBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 波澤拉星-綠色環星球 */
    .Bozela{
        width: 130px;
        height: auto;
        transform: rotate(330deg);
        filter:grayscale(80%);
    }
    .BozelaBlock{
        display: block;
        position: absolute;
        top:20%;
        left:75%;
    }
    .BozelaBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 紫鷺星-粉色系星球 */
    .PurpuraHeron{
        width: 100px;
        height: 100px;
        filter:grayscale(80%);
    }
    .PurpuraHeronBlock{
        display: block;
        position: absolute;
        top:53%;
        left:32%;
    }
    .PurpuraHeronBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 赤星-銅色系星球 */
    .RedSidus{
        width: 65px;
        height: 65px;
        filter:grayscale(80%);
    }
    .RedSidusBlock{
        display: block;
        position: absolute;
        top:7%;
        left:62%;
    }
    .RedSidusBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 紫銅星-紫紫綠綠星球 */
    .StellaCuprea{
        width: 130px;
        height: 130px;
        filter:grayscale(80%);
    }
    .StellaCupreaBlock{
        display: block;
        position: absolute;
        top:80%;
        left:60%;
    }
    .StellaCupreaBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 溫泉星-藍色海洋星球 */
    .Thermalia{
        width: 70px;
        height: 70px;
        filter:grayscale(80%);
    }
    .ThermaliaBlock{
        display: block;
        position: absolute;
        top:20%;
        left:30%;
    }
    .ThermaliaBlock p{
        display: none;
        margin-top:0 ;
    }

    /* 雅瑪拉星-三色星球 */
    .Yamara{
        width: 120px;
        height: 120px;
        filter:grayscale(80%);
    }
    .YamaraBlock{
        display: block;
        position: absolute;
        top:55%;
        left:0%;
    }
    .YamaraBlock p{
        display: none;
        margin-top:0 ;
    }

    .Aeolus:hover,
    .Bozela:hover,
    .PurpuraHeron:hover,
    .RedSidus:hover,
    .StellaCuprea:hover,
    .Thermalia:hover,
    .Yamara:hover
    {
        filter:none;
        cursor: pointer;
    }

    .AeolusBlock:hover p,
    .BozelaBlock:hover p,
    .PurpuraHeronBlock:hover p,
    .RedSidusBlock:hover p,
    .StellaCupreaBlock:hover p,
    .ThermaliaBlock:hover p,
    .YamaraBlock:hover p{
        display: block;
    }

    
</style>