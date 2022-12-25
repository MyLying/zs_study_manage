<template>
  <div class="home-container">
    <el-container style="height: 100%">
      <el-aside :width="asideWidth + 'px'">Aside</el-aside>
      <el-container>
        <el-header>
          <el-button
            @click="asideWidth == 200 ? (asideWidth = 80) : (asideWidth = 200)"
            style="height: 40px; margin-top: 10px; left: 10px"
            >三</el-button
          >
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideWidth: 200,
    };
  },
  methods: {},
};
</script>

<style lang="less">
.home-container {
  position: absolute;
  width: 100%;
  min-width: 900px;
  height: 100%;
  min-height: 600px;
  .el-header,
  .el-footer {
    background-color: #d3dce6;
    color: #333;
    // text-align: center;
  }

  .el-aside {
    background-color: #3778c2;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #32d4c4;
    color: #333;
    text-align: center;
  }
}
</style>