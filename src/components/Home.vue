<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="this.$route.path==='/table' || this.$route.path==='/detail'">搜索结果
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="this.$route.path==='/detail'">内容详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- logo区域 -->
        <div class="logo_container">
          <span class="logo">
            <span class="hs">HSCode</span> 搜索
          </span>
        </div>
      </el-header>
      <el-main>
        <el-card>
          <!-- 搜索区域 -->
          <el-input placeholder="请输入商品名称或商品编码" v-model="key" @change="inputChange" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getKey"></el-button>
          </el-input>
        </el-card>
        <router-view ref="child"></router-view>
      </el-main>
    </el-container>
    <!-- 回到顶部 -->
    <el-backtop target=".home" :visibility-height="150"></el-backtop>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 关键词
        key: ''
      }
    },
    methods: {
      // 根据关键词获取数据列表
      getKey() {
        this.$router.push({
          path: '/table',
          query: {
            key: this.key
          }
        })
      },
      //输入框change事件
      inputChange() {
        if (this.$route.path === '/table') {
          return this.$refs['child'].getListByKey(this.key)
        }
        this.getKey()
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100%;
    overflow: auto;
  }

  .el-header {
    height: 100px !important;
  }

  .el-card {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 30px;
    width: 50%;
  }

  .home_img {
    height: 100px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }

  .el-header p {
    text-align: center;
    font-size: 35px;
    font-weight: bolder;
    color: darkcyan;
  }

  .el-header p span {
    text-align: center;
    font-size: 35px;
    font-weight: bolder;
    color: firebrick;
  }

  .el-breadcrumb {
    margin-top: 10px;
  }
</style>