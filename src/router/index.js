import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/home.vue";
import Main from "@/views/main/main.vue";
import Info from "@/views/info/info.vue";
import AdminInfo from "@/views/info/adminInfo.vue";
import StuInfo from "@/views/info/stuInfo.vue";
import UserInfo from "@/views/info/userInfo.vue";
import Login from "@/views/login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: "/home"
  },
  {
    path: "/home", component: Home, redirect: "home/main", meta: { title: "首页" }, children: [
      { path: 'main', name: "Main", component: Main, meta: { title: "首页" } },
      {
        path: 'info', name: "Info", redirect: "info/userInfo", component: Info, meta: { title: "用户信息管理" }, children: [
          { path: 'userInfo', name: "userInfo", component: UserInfo, meta: { title: "个人中心" } },
          { path: 'adminInfo', name: "adminInfo", component: AdminInfo, meta: { title: "管理员信息" } },
          { path: 'stuInfo', name: "stuInfo", component: StuInfo, meta: { title: "学生信息" } }
        ]
      }, {
        path: 'room', name: "Room", redirect: "room/room1", component: Info, meta: { title: "自习室信息管理" }, children: [
          { path: 'room1', name: "room1", component: UserInfo, meta: { title: "自习室一" } },
          { path: 'room2', name: "room2", component: AdminInfo, meta: { title: "自习室二" } },
          { path: 'room3', name: "room3", component: StuInfo, meta: { title: "自习室三" } }
        ]
      }, {
        path: 'notice', name: "Notice", redirect: "notice/notice1", component: Info, meta: { title: "通知信息管理" }, children: [
          { path: 'notice1', name: "notice1", component: UserInfo, meta: { title: "通知一" } },
          { path: 'notice2', name: "notice2", component: AdminInfo, meta: { title: "通知二" } },
          { path: 'notice3', name: "notice3", component: StuInfo, meta: { title: "通知三" } }
        ]
      }, , {
        path: 'duty', name: "Duty", redirect: "duty/duty1", component: Info, meta: { title: "值班信息管理" }, children: [
          { path: 'duty1', name: "duty1", component: UserInfo, meta: { title: "值班一" } },
          { path: 'duty2', name: "duty2", component: AdminInfo, meta: { title: "值班二" } },
          { path: 'duty3', name: "duty3", component: StuInfo, meta: { title: "值班三" } }
        ]
      },
    ]
  },
  { path: "/login", component: Login, name: "Login" },
]

const router = new VueRouter({
  routes
})

export default router
