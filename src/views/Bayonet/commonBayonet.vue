<template>
  <div>
    <div>
      <VideoPlayer></VideoPlayer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screen: 1,
      idsort: [],
      list: []
    };
  },
  methods: {
    changeList(val) {
      this.list = val;
    },
    add() {
      debugger;
      if (this.list.length >= this.screen * this.screen) {
        let id = this.idsort.sort()[0];
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].id == id) {
            let id = new Date().getTime();
            let data = {
              src: "http://vjs.zencdn.net/v/oceans.mp4",
              id: id,
              pic:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2657765580,3884894214&fm=26&gp=0.jpg",
              type: "video/mp4"
            };
            this.list.splice(i, 1, data);
            this.idsort.splice(i, 1, id);
          }
        }
      } else {
        let id = new Date().getTime();
        this.list.push({
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: id,
          pic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747155899,4222803875&fm=26&gp=0.jpg",
          type: "video/mp4"
        });
        this.idsort.push(id);
      }
    }
  }
};
</script>