<template>
  <div class="test-page">
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="idCard" label="身份证号"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: "张三",
            age: 18,
            sex: "女",
            phone: '11111',
            idCard: "454554fafmd,smfkjasdkjfdksaj;fsdkla;jfdkls;jfaksdjfkdsjfakl;jdskfjaslkjdfkla;jsdf",
            email: '45456456fnfmandmfnasnfmsdnfm,ns,amfndmnfmdasnfmdsngmdna,sndmnfa.s,dnm,nasmd,sn,a.nd',
            address: '江西省南昌市经济技术开发区双港东大街808号华东交通大学北区'
          },
          {
            name: "张三",
            age: 18,
            idCard: "454554fafmd,smfkjasdkjfdksaj;fsdkla;jfdkls;jfaksdjfkdsjfakl;jdskfjaslkjdfkla;jsdf",
            email: '45456456fnfmandmfnasnfmsdnfm,ns,amfndmnfmdasnfmdsngmdna,sndmnfa.s,dnm,nasmd,sn,a.nd',
            address: '江西省南昌市经济技术开发区双港东大街808号华东交通大学北区'
          },
          {
            name: "张三",
            age: 18,
            idCard: "454554fafmd,smfkjasdkjfdksaj;fsdkla;jfdkls;jfaksdjfkdsjfakl;jdskfjaslkjdfkla;jsdf",
            email: '45456456fnfmandmfnasnfmsdnfm,ns,amfndmnfmdasnfmdsngmdna,sndmnfa.s,dnm,nasmd,sn,a.nd',
            address: '江西省南昌市经济技术开发区双港东大街808号华东交通大学北区'
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          },
          {
            name: "张三",
            age: 18
          }
        ]
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
