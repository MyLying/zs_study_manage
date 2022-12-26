<template>
  <div class="userInfo-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人中心</span>
      </div>
      <div class="text item">
        <el-image
          style="width: 120px; margin-top: 10px; border-radius: 50%"
          src="https://avatars.githubusercontent.com/u/82797903"
          fit="cover"
        ></el-image>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户信息</span>
      </div>
      <div class="text item">
        <el-descriptions class="margin-top" title="" :column="3" size="" border>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              账号
            </template>
            admin
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              姓名
            </template>
            <el-input
              v-model="userInfo.userName"
              :placeholder="userInfo.userName"
              :disabled="userInfo.userNameEdit"
              style="width: 80px"
            ></el-input>
            <i
              v-if="userInfo.userNameEdit"
              class="el-icon-edit"
              @click="userInfo.userNameEdit = !userInfo.userNameEdit"
            ></i>
            <i
              v-else
              class="el-icon-check"
              @click="userInfo.userNameEdit = !userInfo.userNameEdit"
            ></i>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              所属学院
            </template>
            重庆城市科技学院
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              账号类型
            </template>
            <el-tag size="small">超级管理员</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              联系电话
            </template>
            12345678910 </el-descriptions-item
          ><el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            江苏大道 1188 号
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        userName: "冉智会",
        userNameEdit: "fasle",
      },
    };
  },
};
</script>

<style>
.box-card {
  margin-top: 5px;
}
</style>