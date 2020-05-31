/*
 * @Author: caoyp
 * @Date: 2020-03-15 17:11:59
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-05-31 12:01:42
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
            testData: 'Welcome to jenkins自动化部署测试发送邮件'
        };
    }
};
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 50px;
}
</style>
