<template>
  <div class="home-container">
    <el-container style="height: 100%">
      <transition>
        <el-aside :width="asideWidth + 'px'">
          <el-menu
            default-active="/home/main"
            class="el-menu-vertical-demo"
            :unique-opened="true"
            :collapse="isCollapse"
            :router="true"
            :collapse-transition="false"
          >
            <el-image
              style="width: 60%; margin-top: 10px; border-radius: 50%"
              :src="userInfo.userAccountUrl"
              fit="cover"
            ></el-image>
            <h3 v-if="!isCollapse" id="userName" style="margin: 0">
              {{ userInfo.userName }}
            </h3>
            <h3 v-else id="userName" style="margin: 0">
              {{ userInfo.userName.slice(0, 1) }}
            </h3>
            <h4 v-if="!isCollapse" id="UserType" style="margin: 0">
              {{ userInfo.userType }}
            </h4>
            <hr />
            <el-menu-item index="/home/main" style="text-align: left">
              <i v-if="isCollapse" class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/home/info" style="text-align: left">
              <template slot="title">
                <i v-if="isCollapse" class="el-icon-s-custom"></i>
                <span slot="title">用户信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/info/userInfo"
                  >个人中心</el-menu-item
                >
                <el-menu-item index="/home/info/adminInfo"
                  >管理员信息</el-menu-item
                >
                <el-menu-item index="/home/info/stuInfo">学生信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/home/room" style="text-align: left">
              <template slot="title">
                <i v-if="isCollapse" class="el-icon-school"></i>
                <span slot="title">自习室信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/room/room1">自习室一</el-menu-item>
                <el-menu-item index="/home/room/room2">自习室二</el-menu-item>
                <el-menu-item index="/home/room/room3">自习室三</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/home/notice" style="text-align: left">
              <template slot="title">
                <i v-if="isCollapse" class="el-icon-bell"></i>
                <span slot="title">通知信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/notice/notice1">通知一</el-menu-item>
                <el-menu-item index="/home/notice/notice2">通知二</el-menu-item>
                <el-menu-item index="/home/notice/notice3">通知三</el-menu-item>
              </el-menu-item-group> </el-submenu
            ><el-submenu index="/home/duty" style="text-align: left">
              <template slot="title">
                <i v-if="isCollapse" class="el-icon-s-order"></i>
                <span slot="title">值班信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/duty/duty1">值班一</el-menu-item>
                <el-menu-item index="/home/duty/duty2">值班二</el-menu-item>
                <el-menu-item index="/home/duty/duty3">值班三</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item style="text-align: left" index="daoahngsan" disabled>
              <i v-if="isCollapse" class="el-icon-document"></i>
              <span slot="title">不可用导航</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </transition>
      <el-container>
        <el-header>
          <el-button
            @click="asideShow"
            style="height: 40px; margin-top: 10px; left: 10px"
            ><i v-if="isCollapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i
          ></el-button>
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
              @click="
                index == 0 && breadList.length !== 1
                  ? $router.push({ path: '/home' })
                  : 'N'
              "
              >{{ item.meta.title
              }}{{ index == breadList.length - 1 ? "" : " > " }}</span
            >
          </div>
          <hr />
          <router-view></router-view>
        </el-main>
        <el-footer height="40px">
          Copyright © 2022-2023
          <strong v-for="(item, index) in links" :key="index">
            <a :href="item.linkUrl">
              {{ item.linkTitle }}
            </a>
          </strong>
          All Rights Reserved. 备案号：
          <a
            target="_blank"
            style="text-decoration: none; color: black"
            rel="nofollow"
            href="https://beian.miit.gov.cn/"
            >渝ICP备00000000号-0</a
          >
        </el-footer>
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
      userInfo: {
        userName: "冉智会",
        userType: "人工智能与大数据学院",
        userAccountUrl: "https://avatars.githubusercontent.com/u/82797903",
      },
      links: [
        {
          linkTitle: "",
          linkUrl: "",
        },
      ],
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
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.home-container {
  position: absolute;
  width: 100%;
  min-width: 900px;
  height: 100%;
  min-height: 600px;
  .el-header {
    background-color: #d3dce6;
    color: #333;
    // text-align: center;
  }
  .el-footer {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 40px;
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
    padding: 5px;
    // background-color: #32d4c4;
    color: #333;
    text-align: center;
    .bread {
      display: inline-block;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      text-align: left;
    }
    .bread:hover {
      color: #32d4c4;
    }
  }
}
</style>