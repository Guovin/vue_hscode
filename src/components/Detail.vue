<template>
  <div class="detail">
    <!-- 卡片视图区域 -->
    <!-- 卡片视图区 -->
    <div v-for="(list,index) in goodList" :key="index">
      <div class="container">
        <el-row :gutter="30">
          <el-col :span="12">
            <!-- 商品基本信息 -->
            <!-- 商品名称 -->
            <el-card>
              <div class="info">基本信息</div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:40px;">商品名称</span>
                  <span style="font-size: 30px;font-weight: bolder;color: #fa3534;">{{title}}</span>
                </div>
              </div>
              <!-- 商品编码 -->
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:40px;">商品编码</span>
                  <span style="font-size: 30px;font-weight: bolder;">{{list.hscode}}</span>
                </div>
              </div>
              <!-- 商品分类 -->
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:40px;">商品分类</span>
                  <span style="font-size: 20px;font-weight: bolder;line-height:40px;">{{list.hscode_name}}</span>
                </div>
              </div>

            </el-card>
          </el-col>
          <el-col :span="12">
            <!-- 计量单位 -->
            <el-card>
              <div class="info">计量单位</div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">法定计量单位名称</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.unit_1_name}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">法定计量单位</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.unit_1}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">法定第二计量单位名称</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;"
                    v-if="list.unit_2_name !== '' ">{{list.unit_2_name}}</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #909399;" v-else>无</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">法定第二计量单位</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;"
                    v-if="list.unit_2 !== '' ">{{list.unit_2}}</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #909399;" v-else>无</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <el-row :gutter="30">
          <el-col :span="12">
            <!-- 税率信息 -->
            <el-card>
              <div class="info">税率信息</div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">普通税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.ordinary}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">优惠税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.most_discount}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">出口税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.export_rate}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">出口退税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.export_retax}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">消费税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.customs_rate}}</span>
                </div>
              </div>
              <div class="hoverColor">
                <div class="span_right">
                  <span style="font-size: 15px;font-weight: bold;color: #606266;line-height:24px;">增值税率</span>
                  <span style="font-size: 18px;font-weight: bolder;color: #19be6b;">{{list.add_tax_rate}}</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <!-- 监管条件 -->
            <el-card>
              <div class="info"><span>监管条件</span><span class="subTitle">{{list.regulatory_code}}</span></div>
              <div class="hoverColor">
                <span style="font-size: 18px;color: #909399;" v-if="list.regulatory_code === '' ">暂无</span>
                <div v-else v-for="(code,c) in codeName" :key="c" class="span_right">
                  <span style="font-size: 18px;font-weight: bolder;">{{code}}</span>
                  <span style="font-size: 18px;font-weight: bold;color: #606266;">{{codeDetail[c]}}</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <el-row :gutter="30">
          <el-col :span="12">
            <!-- 检验检疫类别 -->
            <el-card>
              <div class="info"><span>检验检疫类别</span><span class="subTitle">{{list.ciq_code}}</span></div>
              <div class="hoverColor">
                <span style="font-size: 18px;color: #909399;" v-if="list.ciq_code === '' ">暂无</span>
                <div v-else v-for="(ciq,q) in ciqName" :key="q" class="span_right">
                  <span style="font-size: 18px;font-weight: bolder;">{{ciq}}</span>
                  <span style="font-size: 18px;font-weight: bold;color: #606266;">{{ciqDetail[q]}}</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <!-- 申报条件 -->
            <el-card>
              <div class="info">申报要素</div>
              <div class="hoverColor">
                <span style="font-size: 18px;color: #909399;" v-if="list.element_require === '' ">暂无</span>
                <div v-else v-for="(item,i) in elementList" :key="i">
                  <el-row>
                    <el-col :span="2"><span style="font-size: 18px;color: #909399;">{{i+1}}</span></el-col>
                    <el-col :span="22"><span style="font-size: 18px;font-weight: bold;color: #606266;">{{item}}</span>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 商品详情数据列表
        goodList: [],
        //商品名称
        title: '',
        //申报要素列表
        elementList: [],
        //监管条件名称列表
        codeName: [],
        //监管条件详情列表
        codeDetail: [],
        //检疫条件名称列表
        ciqName: [],
        //检疫条件详情列表
        ciqDetail: []
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
        this.codeList()
        this.ciqList()
        this.getElementList(this.goodList)
        this.changeNumber()
      },
      //生成申报要素列表
      getElementList() {
        var element
        this.goodList.forEach(item => {
          return element = item.element_require
        })
        if (element !== null) {
          const list = element.split(";")
          var newList = []
          list.forEach(item => {
            if (item !== '') {
              newList.push(item.slice(2))
            }
          })
          return this.elementList = newList
        }
      },
      //处理监管与检疫条件列表
      codeList() {
        //处理监管条件
        var codeLists = []
        this.goodList.forEach(item => {
          return codeLists = item.regulatory_code_name
        })
        if (codeLists !== null) {
          codeLists.forEach(item => {
            let name = item.split(':')
            this.codeName.push(name[0])
            this.codeDetail.push(name[1])
          })
        }
      },

      ciqList() {
        //处理检疫条件
        var ciqLists = []
        this.goodList.forEach(item => {
          return ciqLists = item.ciq_code_name
        })
        if (ciqLists !== null) {
          ciqLists.forEach(item => {
            let name = item.split(':')
            this.ciqName.push(name[0])
            this.ciqDetail.push(name[1])
          })
        }
      },

      //税率单位换算
      changeNumber() {
        this.goodList.forEach(item => {
          //保留0位小数
          item.ordinary = (item.ordinary * 100).toFixed(0) + '%'
          item.most_discount = (item.most_discount * 100).toFixed(0) + '%'
          item.export_rate = (item.export_rate * 100).toFixed(0) + '%'
          item.add_tax_rate = (item.add_tax_rate * 100).toFixed(0) + '%'
          item.customs_rate = (item.customs_rate * 100).toFixed(0) + '%'
        })
      }
    },
    created() {
      this.getListByHsCode()
      this.title = this.$route.query.title
    }
  }
</script>

<style scoped>
  .info {
    font-size: 14px;
    color: gray;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  .el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .el-row .el-card {
    min-width: 100%;
    height: 100%;
    margin-right: 20px;
    transition: all .5s;
  }

  .container {
    width: 80%;
    margin: auto;
  }

  .span_right {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-radius: 4px;
  }

  .hoverColor {
    border-radius: 4px;
  }

  .hoverColor :hover {
    background-color: gainsboro;
  }
</style>