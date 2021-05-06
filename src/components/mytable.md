<template>
  <div id="yjkk" ref="yjkk">
    <mytable :maxheight="maxheight" :table="table"></mytable>
  </div>
</template>
<script>
export default {
  name: "yjkk",
  data() {
    return {
      maxheight: 300,
      table: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
          console.log(val);
        },
        treeProps: { children: "children", hasChildren: "hasChildren" },
        id: "id",
        cell: ({ row, column, rowIndex, columnIndex }) => {
          if (columnIndex == 3) {
            if (row.date == "2016-05-04") {
              return "color:red";
            }
          }
          if (columnIndex == 2) {
            if (row.zip == "200333") {
              return "cursor:pointer;color:blue";
            } else {
              return "";
            }
          }
        },
        pagination: true,
        currentPage: 1,
        currentRow: null,
        pageSize: 10,
        total: 40,
        strip: true,
        border: true,
        multipleSelection: [], //多选
        tableLabel: [
          {
            type: "selection",
            fixed: true,
            width: 55
          },
          {
            label: "序号",
            type: "index",
            width: "100",
            fixed: true
          },
          {
            label: "邮编",
            prop: "zip",
            width: "200",
            fixed: true,
            typeclick: true,
            click: (item, row) => {
              if (row.zip == "200333") {
                alert("可点击");
              } else {
                console.log("不可点击");
              }
              console.log(item);
              console.log(row);
            }
          },
          {
            label: "日期",
            prop: "date",
            width: "200",
            sortable: true,
            formatter: row => {
              if (row.date == "2016-05-04") {
                return "休息";
              }
            },
            click: (item, row) => {
              console.log(item);
              console.log(row);
            }
          },
          {
            label: "地址",
            prop: "address",
            width: "300"
          },
          {
            label: "性别",
            prop: "sex",
            width: "200",
            type: "select",
            edit: true,
            placeholder: "请选择性别",
            options: [
              {
                label: "男",
                value: 1
              },
              {
                label: "女",
                value: 2
              }
            ]
          },
          {
            placeholder: "请选择性别",
            label: "亲友姓名",
            type: "input",
            prop: "qiname",
            placeholder: "请输入亲友姓名",
            width: "200",
            max: 5
          },
          {
            type: "clocks",
            label: "到达时间",
            clocksType: "date",
            prop: "clocks",
            placeholder: "请选择到达时间",
            width: "300"
          },
          {
            type: "mortabhead",
            label: "配送信息",
            options: [
              {
                width: "100",
                prop: "name",
                label: "姓名"
              },
              {
                width: "100",
                prop: "province",
                label: "省份"
              },
              {
                width: "100",
                prop: "city",
                label: "市区"
              }
            ]
          },

          {
            type: "button",
            label: "操作",
            width: "200",
            options: [
              {
                label: "删除",
                type: "danger",
                disabled: true,
                click: (index, row) => {
                  console.log(row);
                }
              },
              {
                label: "编辑",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  row.disabled = false;
                }
              },
              {
                label: "完成",
                disabled: false,
                click: (index, row) => {
                  row.disabled = true;
                }
              }
            ]
          }
        ],
        tableData: [
          {
            id: 1,
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            qiname: "",
            sex: "男",
            disabled: true,
            address:
              "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
            zip: 200331
          },
          {
            id: 2,
            date: "2016-05-02",
            qiname: "",
            disabled: true,
            name: "虎",
            sex: "女",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200332
          },
          {
            id: 3,
            sex: "女",
            disabled: true,
            qiname: "",
            date: "2016-05-04",
            name: "王虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200330,
            children: [
              {
                id: 31,
                date: "2016-05-01",
                disabled: true,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄"
              },
              {
                id: 32,
                date: "2016-05-01",
                 disabled: true,
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄"
              }
            ]
          },
          {
            id: 4,
            date: "2016-05-01",
            disabled: true,
            name: "王小虎",
            qiname: "",
            sex: "男",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200334
          },
          {
            id: 5,
            date: "2016-05-08",
            disabled: true,
            qiname: "",
            name: "王小虎",
            province: "上海",
            sex: "男",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 6,
            date: "2016-05-06",
            qiname: "",
            disabled: true,
            name: "王小虎",
            sex: "女",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 7,
            date: "2016-05-07",
            name: "王小虎",
            disabled: true,
            qiname: "",
            province: "上海",
            sex: "男",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 8,
            date: "2016-05-04",
            qiname: "",
            name: "王小虎",
            sex: "男",
            province: "上海",
            disabled: true,
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 9,
            date: "2016-05-01",
            qiname: "",
            name: "王小虎",
            disabled: true,
            sex: "男",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 10,
            date: "2016-05-08",
            disabled: true,
            qiname: "",
            sex: "女",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 11,
            date: "2016-05-06",
            disabled: true,
            name: "王小虎",
            sex: "男",
            province: "上海",
            qiname: "",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 12,
            date: "2016-05-07",
            qiname: "",
            name: "王小虎",
            disabled: true,
            sex: "男",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 13,
            date: "2016-05-04",
            disabled: true,
            name: "王小虎",
            sex: "男",
            qiname: "",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 14,
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            disabled: true,
            qiname: "",
            city: "普陀区",
            sex: "女",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 15,
            date: "2016-05-08",
            name: "王小虎",
            sex: "男",
            disabled: true,
            province: "上海",
            qiname: "",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 16,
            date: "2016-05-06",
            disabled: true,
            qiname: "",
            name: "王小虎",
            sex: "男",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          },
          {
            id: 17,
            date: "2016-05-07",
            disabled: true,
            name: "王小虎",
            qiname: "",
            province: "上海",
            city: "普陀区",
            sex: "女",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333
          }
        ]
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.maxheight = this.$refs.yjkk.clientHeight - 120;
    });
  }
};
</script>
<style scoped lang="scss">
#yjkk {
  padding: 10px;
  height: 100%;
}
</style>

    
      
       
          

     
          