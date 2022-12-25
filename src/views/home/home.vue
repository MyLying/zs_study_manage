<template>
  <div class="home-container">
    <el-container style="height: 100%">
      <el-aside :width="asideWidth + 'px'">
        <el-menu
          default-active="/home/main"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :collapse="isCollapse"
          :router="true"
        >
          <el-image
            style="width: 60%; margin-top: 10px; border-radius: 50%"
            src="https://avatars.githubusercontent.com/u/82797903"
            fit="cover"
          ></el-image>
          <h3 v-if="!isCollapse" id="userName" style="margin: 0">冉智会</h3>
          <h3 v-else id="userName" style="margin: 0">冉</h3>
          <h4 v-if="!isCollapse" id="UserType" style="margin: 0">
            人工智能与大数据学院
          </h4>
          <el-menu-item index="/home/main">
            <i v-if="isCollapse" class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/home/info">
            <template slot="title">
              <i v-if="isCollapse" class="el-icon-location"></i>
              <span slot="title">用户信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/info/userInfo">个人中心</el-menu-item>
              <el-menu-item index="/home/info/adminInfo"
                >管理员信息</el-menu-item
              >
              <el-menu-item index="/home/info/stuInfo">学生信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="daohanger">
            <template slot="title">
              <i v-if="isCollapse" class="el-icon-document"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="daoahnger1">选项1</el-menu-item>
              <el-menu-item index="daoahnger2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="daoahngsan" disabled>
            <i v-if="isCollapse" class="el-icon-document"></i>
            <span slot="title">不可用导航</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button
            @click="asideShow"
            style="height: 40px; margin-top: 10px; left: 10px"
            >三</el-button
          >
          <el-dropdown
            @command="handleCommand"
            style="margin-top: 10px; float: right"
          >
            <span class="el-dropdown-link">
              <el-avatar
                src="https://avatars.githubusercontent.com/u/82797903"
              ></el-avatar>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              style="width: 120px; text-align: center"
            >
              <el-dropdown-item icon="el-icon-plus" command="userInfo"
                >个人中心</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-plus" command="login" divided
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!-- <router-link v-for="(item, index) in breadList" :key="index">sdsd </router-link> -->
          <div style="text-align: left">
            <span
              class="bread"
              v-for="(item, index) in breadList"
              :key="index"
              >{{ item.meta.title + " > " }}</span
            >
          </div>
          <hr />
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
      asideWidth: 201,
      isCollapse: false,
      breadList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched;
      if (matched[1].meta.title == "首页") {
        this.breadList = [{ meta: { title: "首页" } }];
      } else {
        this.breadList = matched;
      }
    },
    handleCommand(command) {
      // this.$message("click on item " + command);
      if (command == "login") {
        this.$router.push({ path: "/login" });
      } else if (command == "userInfo") {
        this.$router.push({ path: "/home/info/userInfo" });
      }
    },
    asideShow() {
      this.asideWidth == 201
        ? ((this.asideWidth = 65), (this.isCollapse = !this.isCollapse))
        : ((this.asideWidth = 201), (this.isCollapse = !this.isCollapse));
    },
  },
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
    // background-color: #3778c2;
    color: #333;
    text-align: center;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

  .el-main {
    background-color: #32d4c4;
    color: #333;
    text-align: center;
    .bread {
      text-align: left;
    }
    .bread:hover {
      color: aqua;
    }
  }
}
</style>