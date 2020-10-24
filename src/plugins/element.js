import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Container, Header, Main, Input, Message, Table, TableColumn, Card, Button, Pagination, Dialog, Breadcrumb, BreadcrumbItem, Backtop, Icon } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Backtop)
Vue.use(Icon)

Vue.prototype.$message = Message
