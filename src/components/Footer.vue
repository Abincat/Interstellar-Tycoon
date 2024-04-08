
<template>
    <footer>
        <main>
            <div class="information">
                <img src="../assets/images/logo-new.png" alt="logoImg">
                <div class="informationText">
                    <span>{{ name }}</span>
                    <span>{{ tel }}</span>
                    <span>{{ address }}</span>
                </div>
            </div>
            <nav>
                <div class="community">
                    <a href="#">
                        <img src="../assets/images/facebook-white.png" alt="facebook">
                    </a>
                    <a href="#">
                        <img src="../assets/images/instagram-white.png" alt="instagram">
                    </a>
                    <a href="#">
                        <img src="../assets/images/youtube-white.png" alt="youtube">
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

    .community img:hover{
        box-shadow: rgba(255, 255, 255, 0.923) 0px 10px 50px -5px , rgba(255, 208, 78, 0.781) 0px 10px 36px -10px inset;
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

    span{
        display: block;
        font-size: 12px;
    }
</style>