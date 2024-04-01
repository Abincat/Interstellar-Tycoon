
<template>
    <nav>
        <img src="../assets/images/logo-new.png" class="logo" alt="logoImg">
        <div class="linkButtonList">
            <router-link to="introduce" class="linkButton">introduce</router-link>
            <router-link to="reserve" class="linkButton">reserve</router-link>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
nav{
    display:flex;
    padding: 8px;
    justify-content:space-between;
}

.logo{
    width: 100px;
    height: 100px;
}

.linkButtonList{
    display: flex;
    justify-content: end;
}

.linkButton{
    color: white;
    font-size: 20px;
    margin: 0 20px;
}

</style>
