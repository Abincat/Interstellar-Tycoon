
<template>
    <footer>
        <main>
            <div class="information">
                <img src="../assets/images/logo-new.png" alt="logoImg">
                <ul class="informationText">
                    <li>{{ name }}</li>
                    <li>{{ tel }}</li>
                    <li>{{ address }}</li>
                </ul>
            </div>
            <nav>
                <div class="community">
                    <a href="#" class="facebookHover">
                        <img src="../assets/images/facebook-white.png" alt="facebook">
                        <img src="../assets/images/facebook-yellow.png" alt="facebookYellow" class="facebookYellow">
                    </a>
                    <a href="#" class="instagramHover">
                        <img src="../assets/images/instagram-white.png" alt="instagram">
                        <img src="../assets/images/instagram-yellow.png" alt="instagramYellow" class="instagramYellow">
                    </a>
                    <a href="#" class="youtubeHover">
                        <img src="../assets/images/youtube-white.png" alt="youtube">
                        <img src="../assets/images/youtube-yellow.png" alt="youtubeYellow" class="youtubeYellow">
                    </a>
                </div>
                <div class="linkList">
                    <div>
                        <router-link to="introduce" class="linkButton">introduce</router-link>
                    </div>
                    <div>
                        <router-link to="reserve" class="linkButton">reserve</router-link>
                    </div>
                </div>
            </nav>
        </main>
    </footer>
    
</template>

<script>
export default{
    data(){
        return{
            name:"星際大亨",
            tel:"(02)0000-1234",
            address:"408台中市南屯區春安路56巷25號",
        };
    }
};
</script>

<style scoped>
    footer{
        display: flex;
        justify-content: center;
    }

    main{
        display: flex;
        width: 80%;
        justify-content:space-between;
    }

    .information{
        display: flex;
        align-items: center;
    }

    .informationText{
        line-height: 1.5em;
        padding: 0 10px
    }

    img{
        width: 80px;
        height: 80px; 
    }

    nav{
        display: block;
    }

    .community{
        display: flex;
        justify-content: center;
    }

    .community img{
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius:50% ; 
    }

    .linkList{
        display: flex;
        margin: 10px;
    }

    .linkButton{
        text-decoration: none;
        color:white;
        margin: 0 20px;
    }

    .linkButton:hover{
        color:rgb(255, 208, 78) ;
    }

    li{
        display: block;
        font-size: 12px;
    }

    .facebookHover,
    .instagramHover,
    .youtubeHover
    {
        position: relative;
    }

    .facebookYellow,
    .instagramYellow,
    .youtubeYellow
    {
        position: absolute;
        top:0;
        left: 0;
        opacity: 0;
    }

    .facebookYellow:hover,
    .instagramYellow:hover,
    .youtubeYellow:hover
    {
        opacity: 1;
    }
</style>