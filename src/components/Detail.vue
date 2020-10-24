<template>
  <div>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 表格区域 -->
      <el-table :data="goodList" border stripe>
        <el-table-column prop="hscode" label="商品编号">
        </el-table-column>
        <el-table-column prop="hscode_name" label="编号描述">
        </el-table-column>
        <el-table-column prop="ordinary" label="普通税率">
        </el-table-column>
        <el-table-column prop="most_discount" label="优惠税率">
        </el-table-column>
        <el-table-column prop="export_rate" label="出口税率">
        </el-table-column>
        <el-table-column prop="export_retax" label="出口退税率">
        </el-table-column>
        <el-table-column prop="customs_rate" label="消费税率">
        </el-table-column>
        <el-table-column prop="add_tax_rate" label="增值税率">
        </el-table-column>
        <el-table-column prop="unit_1" label="法定计量单位">
        </el-table-column>
        <el-table-column prop="unit_1_name" label="法定计量单位名称">
        </el-table-column>
        <el-table-column prop="unit_2" label="法定第二计量单位">
        </el-table-column>
        <el-table-column prop="unit_2_name" label="法定第二计量单位名称">
        </el-table-column>
        <el-table-column prop="regulatory_code" label="监管代码">
        </el-table-column>
        <el-table-column prop="ciq_code" label="检疫代码">
        </el-table-column>
        <el-table-column prop="element_require" label="申报要素要求">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 商品详情数据列表
        goodList: []
      }
    },
    methods: {
      // 根据hscode获取数据列表
      async getListByHsCode() {
        const { data: res } = await this.$http.post(`hscode?hscode=${this.$route.query.hscode}`)
        if (res.code !== 200) {
          return this.$message.error(`${res.data}`)
        }
        const arr = []
        arr.push(res.data.info)
        this.goodList = arr
      }
    },
    created() {
      this.getListByHsCode()
    }
  }
</script>

<style scoped>
</style>