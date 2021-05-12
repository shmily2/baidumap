<template>
  <div class="table">
    <!-- stripe属性可以创建带斑马纹的表格 
     border 竖直方向的边框
     max-height属性为 Table 指定最大高度,此时若表格所需的高度大于最大高度，则会显示一个滚动条。
     highlight-current-row属性即可实现单选
     current-change当表格的当前行发生变化的时候会触发该事件
     cell 改变字体颜色-->
    <el-table
      :data="table.tableData"
      strip
      border
      :row-key="table.id"
      :tree-props="table.treeProps"
      highlight-current-row
      :span-method="table.spanMethod"
      @current-change="table.handleCurrentChange"
      @selection-change="table.handleSelectionChange"
      :cell-style="table.cell"
      show-overflow-tooltip
      style="width: 100%"
      :ref="table.ref"
      :max-height="maxheight"
    >
      <!-- fixed属性固定列
      type属性为index即可显示从 1 开始的索引号。
      type属性为selection
     -->
      <template v-for="item in table.tableLabel">
        <!-- checkbox框 -->
        <el-table-column
          v-if="item.type && item.type == 'selection'"
          :fixed="item.fixed"
          :type="item.type"
          :key="item.prop"
          align="center"
          :min-width="item.width == undefined ? '50' : item.width"
        ></el-table-column>
        <!-- 序号-->
        <el-table-column
          v-else-if="item.type && item.label == '序号'"
          :fixed="item.fixed"
          :type="item.type"
          :key="item.prop"
          align="center"
          :label="item.label"
          :width="item.width == undefined ? '100' : item.width"
        >
          <template slot-scope="scopeSize">
            <span
              v-if="
                item.scopeSize && scopeSize.$index + 1 == table.tableData.length
              "
            ></span>
            <span v-else>{{
              (table.currentPage - 1) * table.pageSize + scopeSize.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <!-- 多级表头 -->
        <el-table-column
          v-else-if="item.type == 'mortabhead'"
          :key="item.label"
          align="center"
          :fixed="item.fixed"
          :label="item.label"
          :minWidth="item.width"
          show-overflow-tooltip
        >
          <el-table-column
            v-for="(list, index) in item.options"
            :min-minWidth="item.minWidth == undefined ? '' : item.minWidth"
            align="center"
            :prop="list.prop"
            :label="list.label"
            :minWidth="item.width"
            show-overflow-tooltip
            :key="index"
          >
            <template slot-scope="scope">
              {{
                (list.formatter &&
                  list.formatter(
                    scope.row,
                    scope.column,
                    scope.row[list.prop]
                  )) ||
                  scope.row[list.prop]
              }}
            </template>
          </el-table-column>
        </el-table-column>
        <!--表格内select选择 -->
        <el-table-column
          v-else-if="item.type == 'select'"
          :key="item.id"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :minWidth="item.width"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.sex"
              :disabled="scope.row.disabled"
              :placeholder="scope.row.disabled ? '' : item.placeholder"
            >
              <el-option
                :label="opt.label"
                :value="opt.value"
                v-for="opt in item.options"
                :key="opt.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <!--表格内input填写 -->
        <el-table-column
          v-else-if="item.type == 'input'"
          :key="item.id"
          :prop="item.prop"
          :fixed="item.fixed"
          :minWidth="item.width"
          :label="item.label"
        >
          <template slot-scope="scope">
            <el-input
              v-model="scope.row[item.prop]"
              :disabled="scope.row.disabled"
              :maxlength="item.max"
              :placeholder="scope.row.disabled ? '' : item.placeholder"
            ></el-input>
          </template>
        </el-table-column>
        <!--表格内时间选择 -->
        <el-table-column
          v-else-if="item.type == 'clocks'"
          :key="item.id"
          :fixed="item.fixed"
          :prop="item.prop"
          :minWidth="item.width"
          :label="item.label"
        >
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.clock"
              :type="item.clocksType"
              :picker-options="item.pickerOptions"
              :range-separator="item.separator"
              :start-placeholder="item.startplaceholder"
              :end-placeholder="item.endplaceholder"
              :placeholder="scope.row.disabled ? '' : item.placeholder"
              :disabled="scope.row.disabled"
            >
            </el-date-picker>
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column
          v-else-if="item.type == 'button'"
          :key="item.label"
          align="center"
          :fixed="item.fixed"
          :label="item.label"
          :minWidth="item.width"
        >
          <template slot-scope="scope">
            <el-button
              v-for="(butlist, butind) in item.options"
              :key="butind"
              size="mini"
              :disabled="butlist.disabled"
              :type="butlist.type"
              @click="butlist.click(scope.$index, scope.row)"
              >{{ butlist.label }}</el-button
            >
          </template>
        </el-table-column>
        <!-- 正常表格 -->
        <el-table-column
          v-else
          :key="item.prop"
          :fixed="item.fixed"
          :sortable="item.sortable"
          :label="item.label"
          :prop="item.prop"
          align="center"
          :minWidth="item.width"
        >
          <template slot-scope="scope">
            <!-- 行内点击 -->
            <div
              v-if="item.typeclick"
              :style="'text-align:center;' + item.style"
              @click="item.click(item, scope.row)"
            >
              {{ scope.row[item.prop] }}
            </div>
            <!-- 时间格式过滤器-->
            <div v-else-if="item.dateFormate">
              <!-- item.format ||-->
              {{
                scope.row[item.param] | dateFormateFilters(item.format || "-")
              }}
            </div>
            <!--默认方式展示-->
            <div v-else :style="item.style">
              {{
                (item.formatter &&
                  item.formatter(
                    scope.row,
                    scope.column,
                    scope.row[item.prop],
                    scope.$index
                  )) ||
                  scope.row[item.prop]
              }}
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="pagina" v-if="table.pagination">
      <el-pagination
        @size-change="table.handleSizeChange"
        @current-change="table.handleCurrentChange"
        :current-page="table.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="table.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.total"
      >
      </el-pagination>
    </div>
  </div>
</template>
  <script>
import { formatWithSeparator } from "../utils/datetime";
export default {
  name: "mytable",
  props: {
    maxheight: {
      type: Number,
      required: true
    },
    table: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {
    // this.table.total = this.table.tableData.length;
  },
  methods: {
    //行背景色
    // tableRowClassName({ row, rowIndex }) {
    //   if (rowIndex === 1) {
    //     return "warning-row";
    //   } else if (rowIndex === 3) {
    //     return "success-row";
    //   }
    //   return "";
    // },
  },
  filters: {
    dateFormateFilters(date, format) {
      return formatWithSeparator(date, format);
    }
  }
};
</script>
<style lang="scss">
.table {
  .el-table .warning-row {
    background: red;
  }

  .el-table .success-row {
    background: greenyellow;
  }
  .pagina {
    minwidth: 100%;
    text-align: center;
    padding-top: 20px;
  }
  .el-table .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*修改滚动条样式
  :-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
  */
  div::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb {
    background: rgba(191, 191, 191, 0.4);
    border-radius: 20px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  div::-webkit-scrollbar-corner {
    background: #179a16;
  }
}
</style>