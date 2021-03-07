<template>
  <div>
    <el-button type="primary" icon="el-icon-edit"
               ref="maoB1"  @click="maoDoClick()">ce shi ye mian</el-button>
    <el-button type="primary" icon="el-icon-edit"
               ref="maoB2"  @click="maoDoClick()">移除设备</el-button>

    <el-switch
        v-model="refreshSwitch"
        active-text="启用刷新">
    </el-switch>

    <el-table :data="maoTableData">
      <el-table-column label="MaoExpand" type="expand">
        <template slot-scope="maoDetailScope">
          <el-form label-position="left" inline class="">
            <el-form-item label="MaoDetail">
              <span>{{ maoDetailScope.row.maoDetail }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="MaoInfo">
        <template slot-scope="scope">
          {{ scope.row.maoObj }}
        </template>
      </el-table-column>

      <el-table-column label="MaoOperate">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit"
                     @click="maoDoRowClick(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>




<script>
export default {
  name: "MaoCloudMonitor",

  data() {
    return {
      refreshSwitch: true,
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
                vueThis.maoTableData.push({maoObj: data[i]["name"], maoDetail: data[i]["deviceId"]});
              }
            })
            .catch(function (err) {
              alert("errMao" + err);
            })
      }
      this.refreshTimer = setTimeout(this.refreshData, 1000);
    },


    maoDoClick() {

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