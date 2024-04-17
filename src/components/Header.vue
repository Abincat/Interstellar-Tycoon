
<template>
    <header>
        <router-link to="/" class="logo">
            <img src="../assets/images/logo-new.png" alt="logoImg">
        </router-link>
        <div class="linkButtonList">
            <div>
                <router-link to="introduce" class="linkButton">introduce</router-link>
            </div>
            <div>
                <router-link to="reserve" class="linkButton">reserve</router-link>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
header{
    display:flex;
    justify-content:space-between;
    width: 100%;
}

.logo img{
    width: 100px;
    height: 100px;
    padding-left: 20px;
    padding-top: 5px;
}

.linkButtonList{
    display: flex;
    justify-content: end;
    padding-top: 20px;
    padding-right: 20px;
}

.linkButton{
    color: white;
    font-size: 20px;
    margin: 0 10px;
    padding: 10px 10px 0 10px;
    text-decoration: none;
}

.linkButton:hover{
    background: linear-gradient(to bottom, #ffffff00 , rgb(255,208,78,0.5));
    border-bottom:3px solid white ;
    animation: navHover 0.8s;
}

@keyframes navHover{
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}


</style>
