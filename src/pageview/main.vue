<template>
<div>
    <header class="header">
        <h1 class="logo">
            <a href="/">website</a>
        </h1>
        <div id="login_info">
            <div class="signed">
                <span class="uname">您好，yoyo.css</span>
                <ul class="user-menu">
                    <li>
                    <a href="javascript:;">个人设置</a>
                    </li>
                    <li>
                    <a href="javascript:;" class="logout">退出账户</a>
                    </li>
                </ul>
            </div>
            <ul class="unsigned" style="display: none;">
                <li><a href="javascript:;">登录</a></li>
            </ul>
        </div>
        <ul class="nav">
            <li>
                <router-link to="/home">Home</router-link>
            </li>
            <li>
                <router-link to="/blog">Blog</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </header>

    <router-view></router-view>
</div>
</template>

<script>
export default {}
</script>
