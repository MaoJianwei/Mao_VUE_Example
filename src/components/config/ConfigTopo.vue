<template>
  <div style="margin: 20px" />
  <el-form :model="form" label-width="120px" label-position="top" style="max-width: 460px" action="/addServiceIp" method="post">
    <el-form-item label="ONOS Endpoint address and port">
      <el-input v-model="form.addrPort" placeholder="e.g. 127.0.0.1:8181"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import { reactive } from 'vue'
export default {
  name: "ConfigTopo",

  data() {
    return {
      form: reactive({
        addrPort: "",
      }),
    }
  },

  methods: {
    onSubmit() {
      this.$http.post("/api/addOnosInfo", this.form,
          {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
              }
          })
          .then(function (res) {
            console.log(res.status)
          })
          .catch(function (err) {
            console.log("errMao: " + err);
          });
      console.log("onSubmit ConfigTopo")
    },
  }
}
</script>