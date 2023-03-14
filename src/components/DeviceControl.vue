<template>
  <div>
    <el-button type="primary" :icon="Edit"
               ref="maoB1" @click="maoDoClick()">添加设备
    </el-button>
    <el-button type="primary" :icon="Edit"
               ref="maoB2" @click="maoDoClick()">移除设备
    </el-button>

    <el-switch
        v-model="refreshSwitch"
        size="default"
        active-text="启用刷新">
    </el-switch>

    <el-table :data="maoTableData" ref="maoTable" @cell-click="maoTableClick" :cell-class-name="tableCellClassName" empty-text="暂无数据">
      <el-table-column label="" type="expand">
        <template v-slot:default="maoDetailScope">
          <el-form label-position="left" inline class="mao-table-expand">
            <el-form-item label="MaoDetail">
              <span>{{ maoDetailScope.row.maoDetail }}</span>
            </el-form-item>
            <el-form-item label="MaoDeviceId">
              <span>{{ maoDetailScope.row.MaoDeviceId }}</span>
            </el-form-item>
            <el-form-item label="Online">
              <span>{{ maoDetailScope.row.online }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="MaoInfo">
        <template v-slot:default="scope">
          {{ scope.row.maoObj }}
        </template>
      </el-table-column>

      <el-table-column label="MaoOperate">
        <template v-slot:default="scope">
          <el-button type="primary" icon="el-icon-edit"
                     @click="maoDoRowClick(scope.$index, scope.row)"></el-button>
          <el-button type="primary" icon="el-icon-edit" :disabled="scope.row.onlineDisabled" @click="maoDeviceOnline(scope.row.MaoDeviceId)">上线</el-button>
          <el-button type="primary" icon="el-icon-edit" :disabled="scope.row.offlineDisabled" @click="maoDeviceOffline(scope.row.MaoDeviceId)">下线</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.mao-table-expand {
  font-size: 0;
}
.mao-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.mao-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>


<script setup>
import {
  // Check,
  // Delete,
  Edit,
  // Message,
  // Search,
  // Star,
} from '@element-plus/icons-vue'
</script>

<script>

export default {
  name: "DeviceControl",

  data() {
    return {
      refreshSwitch: false,
      refreshTimer: '',


      maoTableData: [
        // {
        //   maoObj: '<div class="cell">qingdao</div>',
        //   maoDetail: "mao-detail"
        // }
      ]
    }
  },

  mounted() {
    this.refreshTimer = setTimeout(this.refreshData, 1000);
  },

  methods: {


    tableCellClassName({row, column, rowIndex, columnIndex}) {
      //利用单元格的 className 的回调方法，给行列索引赋值
      row.index = rowIndex;
      column.index = columnIndex;
    },
    maoTableClick(row, column) {
      if (1 == column.index) {
        this.$refs.maoTable.toggleRowExpansion(row)
      }
    },

    refreshData() {
      if (this.refreshSwitch) {
        var vueThis = this;
        this.$http.get("https://dev.maojianwei.com/api/devices/getDevices")
            .then(function (res) {
              // console.log(res)
              vueThis.maoTableData = [];
              var data = res["data"];
              for (var i = 0; i < data.length; i++) {
                // console.log(data[i])
                vueThis.maoTableData.push(
                    {
                      maoObj: data[i]["name"],
                      maoDetail: data[i]["deviceId"],
                      MaoDeviceId: data[i]["deviceId"],
                      online: data[i]["online"],
                      onlineDisabled: !data[i]["online"],
                      offlineDisabled: data[i]["online"],
                    });
              }
            })
            .catch(function (err) {
              console.log("errMao" + err);
            })
      }
      this.refreshTimer = setTimeout(this.refreshData, 1000);
    },


    maoDoClick() {
      console.log("DeviceControl clicked")
    },
    maoDeviceOnline(device_id) {
      var vueThis = this;
      console.log(device_id)
      this.$http.post("/api/devices/setDeviceOnline",
          {
            deviceid: device_id,
          }
      ).then(function (resp) {
        console.log(resp);
        if (resp["data"]) {
          vueThis.$notify({
            title: '成功',
            message: '这是一条成功的提示消息',
            type: 'success'
          });
        } else {
          vueThis.$notify.error({
            title: '成功',
            message: '这是一条成功的提示消息',
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },


    maoDeviceOffline(device_id) {
      var vueThis = this;
      this.$http.post("/api/devices/setDeviceOffline",
          {
            deviceid: device_id,
          }
      ).then(function (resp) {
        console.log(resp);
        if (resp["data"]) {
          vueThis.$notify({
            title: '成功',
            message: '这是一条成功的提示消息,maoEE',
            type: 'success'
          });
        } else {
          vueThis.$notify.error({
            title: '错误',
            message: '这是一条错误的提示消息'
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },


    // maoDoClick() {
    //   var vueThis = this;
    //   this.$http.get("https://www.maojianwei.com/resources/Dynamic/MyFavorite.json")
    //       .then(function (res) {
    //         vueThis.maoTableData = [];
    //         console.log(res.data["软件镜像"]);
    //         var d = res.data["软件镜像"];
    //         for (var i = 0; i < d.length; i++){
    //           // console.log(res.data["软件镜像"][i]);
    //           console.log(res.data["软件镜像"][i]["link"])
    //           vueThis.maoTableData.push({maoObj: res.data["软件镜像"][i]["title"], maoDetail: res.data["软件镜像"][i]["link"]});
    //         }
    //         // console.log(res.data["软件镜像"]);
    //         // console.log(res);
    //         // alert(res);
    //       })
    //       .catch(function(err) {
    //         alert("errMao" + err);
    //         alert();
    //       })
    //   // this.$refs.maoB1.maoShow=false;
    // },
    maoDoRowClick(index, row) {
      // alert(index + ", " + row);
      console.log(index, row);
    }
  }
}
</script>