<template>
  <div>
    <mydialog :dialogData="dialogData">
      <div slot="outername" class="account">
        外
      </div>
      <div slot="innername" class="account">
        内
      </div>
    </mydialog>
  </div>
</template>
<script>
export default {
  name: "dangerousVehicles",
  data() {
    return {
      dialogData: {
        outertype: "big",
        innertype: "small",
        outertitle: "外层",
        outerVisible: false,
        outername: "outername",
        innertitle: "内层",
        innerVisible: false,
        innername: "innername",
        center: true,
        footer: [
          {
            title: "取消",
            type: "primary",
            click: () => {
              this.dialogData.outerVisible = false;
            }
          },
          {
            title: "打开内层",
            type: "",
            click: () => {
              this.dialogData.innerVisible = true;
            }
          }
        ]
      }
    };
  }
};
</script>