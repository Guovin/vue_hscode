<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/table' }"
            v-if="this.$route.path==='/table' || this.$route.path==='/detail'">搜索结果</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/detail' }" v-if="this.$route.path==='/detail'">内容详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- logo区域 -->
        <img src="../assets/logo.png" class="home_img">
        <p><span>HS</span>编码查询</p>
      </el-header>
      <el-main>
        <el-card>
          <!-- 搜索区域 -->
          <el-input placeholder="请输入商品名称或商品编码" v-model="key" @change="inputChange" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getKey"></el-button>
          </el-input>
        </el-card>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 回到顶部 -->
    <el-backtop target=".home" :visibility-height="100"></el-backtop>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 关键词
        key: '',
        //控制卡片是否显示
        showCard: false,
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
        this.getKey()
      }
    }
  }
</script>

<style scoped>
  .el-header {
    height: 100px !important;
  }

  .home {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  .el-card {
    margin-top: 150px;
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
</style>