<template>
    <div class="top-navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/#/">E-SHOP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link cart-nav-btn" to="">Cart({{0}})</router-link>
                    </li>
                </ul>
            </div>
            <cart-fly-view class="cart-fly-view"/>
        </nav>
    </div>
</template>

<script>
    import CartFlyView from "../../views/CartFlyView";

    export default {
        name: "TopNavbar",
        components: {CartFlyView},
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .top-navbar {
        .cart-fly-view {
            display: none;
        }
        .cart-nav-btn {
            &:hover {
                .top-navbar .cart-fly-view {
                    display: block;
                }
            }
        }
    }
</style>