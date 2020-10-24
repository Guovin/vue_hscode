<template>
  <div>
    <!-- 卡片视图区域 -->
    <el-card v-if="showCard">
      <!-- 表格区域 -->
      <el-table :data="keyList" border stripe>
        <el-table-column prop="hscode" label="商品编号">
        </el-table-column>
        <el-table-column prop="product_name" label="商品名称">
        </el-table-column>
        <el-table-column prop="unit" label="计量单位">
        </el-table-column>
        <el-table-column prop="export_retax" label="出口退税率(%)">
        </el-table-column>
        <el-table-column prop="supervision_code" label="监管条件">
        </el-table-column>
        <el-table-column prop="ciq_code" label="检验检疫">
        </el-table-column>
        <el-table-column label="更多信息">
          <template slot-scope="scope">
            <el-button type="primary" @click="showDetail(scope.row.hscode)" size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页功能区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[5, 7, 10]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"
        background>
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //控制卡片是否显示
        showCard: false,
        // 关键词搜索列表
        keyList: [],
        // hscode
        hscode: '',
        // hscode搜索列表
        hscodeList: [],
        // 总数据条数
        total: 0,
        // 当前页码数
        currentPage: 1,
        // 当前页显示数据条数
        pageSize: 5,
        //url
        urlKey: ''
      }
    },
    methods: {
      // 根据关键词获取数据列表
      async getListByKey() {
        this.urlKey = this.$route.query.key
        const { data: res } = await this.$http.post(`search?keyword=${this.urlKey}`)
        // console.log(res)
        if (res.code !== 200) {
          return this.$message.error(`${res.data}`)
        }
        this.showCard = true
        // 根据分页显示要求处理数据
        if (this.pageSize !== 10 && this.currentPage === 1) {
          this.keyList = res.data.list.slice(0, this.pageSize)
        } else if (this.pageSize !== 10 && this.currentPage === 2) {
          this.keyList = res.data.list.slice(this.pageSize)
        } else {
          this.keyList = res.data.list
        }
        this.total = res.data.length
        // console.log(this.keyList)
      },
      // 分页条数改变触发事件
      handleSizeChange(newPageSize) {
        this.pageSize = newPageSize
        this.getListByKey()
      },
      // 分页当前页切换触发事件
      handleCurrentChange(newPage) {
        this.currentPage = newPage
        this.getListByKey()
      },
      // 点击详情跳转
      async showDetail(hscode) {
        this.$router.push({
          path: 'detail',
          query: {
            hscode: hscode
          }
        })
      }
    },
    created() {
      this.getListByKey()
    },
    updated() {
      if (this.$route.query.key !== this.urlKey)
        this.getListByKey()
    }
  }
</script>

<style scoped>
</style>