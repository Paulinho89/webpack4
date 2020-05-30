/*
 * @Author: caoyp
 * @Date: 2020-03-15 17:11:59
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-05-30 16:34:28
 * @Description: Description
 * @Route: Route
 */
<template>
    <div class='container'>
        {{ testData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: 'jenkins自动化部署测试'
        };
    }
};
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    font-size: 50px;
}
</style>
