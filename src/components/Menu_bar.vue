<template>
    <nav class="menu-bar">
        <div class="logo">
            <img src="../assets/adopt_logo.png" alt="Logo" width=100>
        </div>
        <ul class="menu-items">
            <li class="menu-item">
                <a href="#">Home</a>
            </li>
            <li class="menu-item">
                <a href="#">About</a>
            </li>
            <li class="menu-item" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
                <a href="#">Services</a>
                <ul v-if="showDropdown" class="dropdown">
                    <li class="dropdown-item">
                        <a href="#">Service 1</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#">Service 2</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#">Service 3</a>
                    </li>
                </ul>
            </li>
            <li class="menu-item">
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<style>


.menu-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #333;
    color: #fff;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    
}

.menu-items {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu-item {
    position: relative;
    margin-right: 20px;
}

.menu-item a {
    color: #fff;
    text-decoration: none;
}

.dropdown {
    position: absolute;
    top: 20px;
    left: 0;
    background-color: #333;
    color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
}

.menu-item:hover .dropdown {
    display: block;
}

.dropdown-item {
    padding: 10px;
}
</style>

<script>
export default {
    data() {
        return {
            showDropdown: false
        }
    }
}
</script>
