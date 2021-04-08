<template>
  <VideoPlayer :list="list"></VideoPlayer>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: "http://vjs.zencdn.net/v/oceans.mp4 ",
          id: 2,
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2657765580,3884894214&fm=26&gp=0.jpg",
          type: "video/mp4"
        },
        {
          src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8 ",
          id: 0,
          pic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747155899,4222803875&fm=26&gp=0.jpg",
          type: "application/x-mpegURL"
        },
        {
          src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8",
          id: 1,
          pic:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1330784235,4146572500&fm=26&gp=0.jpg",
          type: "application/x-mpegURL"
        }
      ]
    };
  }
};
</script>