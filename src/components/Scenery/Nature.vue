<template>
    <div>
        <div class="cloud left"></div>
        <div class="cloud right flip"></div>

        <div class="hills">
            <div class="hill hill-left"></div>
            <div class="hill hill-right"></div>
            <div class="hill hill-center">
                <div class="tree tree-1">
                    <div class="trunk">
                        <div class="leftbranch"></div>
                        <div class="rightbranch"></div>
                    </div>
                </div>

                <div class="tree tree-2">
                    <div class="trunk">
                        <div class="leftbranch"></div>
                        <div class="rightbranch"></div>
                    </div>
                </div>

            </div>
        </div>

        <div class="mountains">
            <div class="mountain-one">
                <div class="mountain-top">
                    <div class="mountain-cap-1 mountain-cap"></div>
                    <div class="mountain-cap-2 mountain-cap"></div>
                    <div class="mountain-cap-3 mountain-cap"></div>
                </div>
            </div>
            <div class="mountain-two">
                <div class="mountain-top">
                    <div class="mountain-cap-1 mountain-cap"></div>
                    <div class="mountain-cap-2 mountain-cap"></div>
                    <div class="mountain-cap-3 mountain-cap"></div>
                </div>
            </div>
            <div class="mountain-three">
                <div class="mountain-top">
                    <div class="mountain-cap-1 mountain-cap"></div>
                    <div class="mountain-cap-2 mountain-cap"></div>
                    <div class="mountain-cap-3 mountain-cap"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cloud {
    width: 120px;
    height: 102px;
    border-radius: 50%;
    position: absolute;
    right: -200px;
    top: 10px;
    transform: scale(.8);
    background-color: #fafaff;

    &:after,
    &:before {
        content: "";
        position: absolute;
        width: 96px;
        height: 84px;
        border-radius: 50%;
        background-color: #fafaff;
    }

    &:after {
        right: -10px;
        bottom: -10px;
    }

    &:before {
        left: -25px;
        bottom: -10px;
    }

    &.left {
        top: 60px;
        left: -200px;
        animation: toright 50s infinite ease-in-out;
        animation-delay: 2s;
    }

    &.right {
        top: 120px;
        right: -150px;
        animation: toleft 50s infinite ease-in;
    }

    &.flip {
        transform: scaleX(-1);
    }
}

.tree {
    height: 100px;
    width: 100px;
    background-color: #6a976c;
    border-radius: 100%;
    position: absolute;
    top: -111px;

    &.tree-1 {
        right: 35%;
    }

    &.tree-2 {
        right: 65%;
    }

    .trunk {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 10px 140px 10px;
        border-color: transparent transparent #374544 transparent;
        margin-top: 38px;
        margin-left: 48px;
    }

    .leftbranch {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 3px 60px 3px;
        border-color: transparent transparent #374544 transparent;
        transform: rotate(-50deg);
        position: absolute;
        margin-top: 12.5px;
        margin-left: -25px;
    }

    .rightbranch {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 2px 35px 2px;
        border-color: transparent transparent #374544 transparent;
        transform: rotate(36deg);
        position: absolute;
        margin-top: 4px;
        margin-left: 9px;
    }
}

.hill {
    z-index: 2;
    position: absolute;
    background: linear-gradient(#9ccc65, #1F4961 40%);
    border-radius: 100% 100% 0 0;
    box-shadow: 0 0 10px 0 rgba(28, 76, 107, 0.4);
    padding: 40%;
    top: 90%;

    &.hill-left {
        left: -75%;
        width: 140%;
    }

    &.hill-right {
        right: -70%;
        width: 130%;
    }

    &.hill-center {
        left: -30%;
        width: 150%;

    }
}

.mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 200px;
}

.mountain-one {
    left: 70px;

    .mountain-top {
        border-bottom: 75px solid #bde1f0;
    }

    .mountain-cap {
        border-top: 25px solid #bde1f0;
    }
}

.mountain-one,
.mountain-two,
.mountain-three {
    position: absolute;
    bottom: 0;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-bottom: 210px solid #457992;
    z-index: 1;
}

.mountain-two {
    right: 130px;
    bottom: -20px;
    z-index: 0;
}

.mountain-three {
    left: -50px;
    bottom: -10px;
    z-index: 0;
    display: none;
}

.mountain-top {
    position: absolute;
    right: -65px;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 74px solid #ceeaf6;
    z-index: 2;
}

.mountain-cap-1,
.mountain-cap-2,
.mountain-cap-3 {
    position: absolute;
    top: 70px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 25px solid #ceeaf6;
}

.mountain-cap-1 {
    left: -55px;
}

.mountain-cap-2 {
    left: -25px;
}

.mountain-cap-3 {
    left: 5px;
}

@keyframes toright {
    0% {
        left: -150px;
    }

    50% {
        left: 120%;
    }

    100% {
        left: -150px;
    }
}

@keyframes toleft {
    0% {
        right: -150px;
    }

    50% {
        right: 120%;
    }

    100% {
        right: -150px;
    }
}
</style>