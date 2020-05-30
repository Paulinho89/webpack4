<template>
    <div class='container-detail'>
        {{ testData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: '详情页'
        };
    }
};
</script>

<style lang="less" scoped>
.container-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
}
</style>
