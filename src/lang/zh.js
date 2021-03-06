export default {
    route: {
      adminServiceManagement: '报修管理',
      head:"头部固定",
      monitoring: '监控',
      monitoringList: '监控列表',
      equipmentInfo: '设备管理',
      companyServiceManagement: '报修管理',
      UnRepairReporl: '未处理报修',
      completionRepair: '处理结束报修',
      inprocessRepair: '处理中报修',
      add: '添加报修',
  
      agentEnterprise: '代理商企业',
      nfcEquip: 'NFC',
      nfcEquipList: 'NFC设备列表',
      recordsWarranty: '报修记录',
      alarmMonitoring: '报警监控',
      // 根据封测版内3.3.14需求 将原 企业报警改为设备告警
      enterpriseAlarm: '设备告警',
  
      setAlam: '围栏报警管理',
      alarmContact: '报警联系人配置',
      powerEquipment: '电量报警阈值',
  
      information: '个人信息管理',
      personalInformation: '个人信息',
      changePassword: '修改密码',
      positioning: '定位与围栏',
      realLocation: '实时位置监控',
      playback: '轨迹回放',
      companyMap: '企业围栏管理',
  
      meetingManage: '会议管理',
      conferenceReservation: '会议预约',
      conferenceHistory: '会议历史记录',
      instantConference: '即时会议',
  
      planManagement: '计划管理',
      dispatchingPlan: '派工计划',
      equipment: '设备管理',
      companyFinancial: '财务管理',
      financial: '财务管理',
      equipmentInfoList: '设备信息',
      equipmentState: '设备状态',
      equipmentGroup: '设备群组',
      dashboard: '安安物联',
      company: '企业管理',
      testCompany: '试用企业',
      vipCompany: '商用企业',
      vipCompanyadd: '添加vip企业',
      addAgentCompany: '代理商添加',
      testCompanyadd: '添加测试企业',
      mageament: '直播管理',
      appointment: '预约直播',
      broadcastList: '直播视频',
      searchover: '直播查询',
      companySoucers: '企业资源管理',
      imgResour: '图像资源',
      videoResour: '视频资源',
      introduction: '简述',
      documentation: '文档',
      guide: '引导页',
      employee: '员工管理',
      employeeList: '员工管理',
      employeePermission: '权限列表',
      icons: '图标',
      components: '组件',
      componentIndex: '介绍',
      tinymce: '富文本编辑器',
      markdown: 'Markdown',
      jsonEditor: 'JSON编辑器',
      dndList: '列表拖拽',
      splitPane: 'Splitpane',
      avatarUpload: '头像上传',
      dropzone: 'Dropzone',
      sticky: 'Sticky',
      countTo: 'CountTo',
      componentMixin: '小组件',
      backToTop: '返回顶部',
      dragDialog: '拖拽 Dialog',
      dragKanban: '可拖拽看板',
      charts: '图表',
      keyboardChart: '键盘图表',
      lineChart: '折线图',
      mixChart: '混合图表',
      example: '综合实例',
      nested: '路由嵌套',
      bar: 'Bar',
      barProfile: 'Profile',
      barPosts: 'Posts',
      Table: 'Table',
      dynamicTable: '动态Table',
      dragTable: '拖拽Table',
      inlineEditTable: 'Table内编辑',
      complexTable: '综合Table',
      treeTable: '树形表格',
      customTreeTable: '自定义树表',
      tab: 'Tab',
      form: '表单',
      createArticle: '创建文章',
      editArticle: '编辑文章',
      articleList: '文章列表',
      errorPages: '错误页面',
      page401: '401',
      page404: '404',
      errorLog: '错误日志',
      excel: 'Excel',
      exportExcel: 'Export Excel',
      selectExcel: 'Export Selected',
      uploadExcel: 'Upload Excel',
      zip: 'Zip',
      exportZip: 'Export Zip',
      theme: '换肤',
      clipboardDemo: 'Clipboard',
      i18n: '国际化',
      equipmentManage: '设备管理',
      unRepairReporl: '未处理报修',
      addRepair: '添加修理'
    },
    navbar: {
      logOut: '退出登录',
      dashboard: '首页',
      github: '项目地址',
      screenfull: '全屏',
      reduction: '复原',
      theme: '换肤',
      getInto:"进入",
    },
    login: {
      title: '管理系统',
      lange:"语言切换",
      companyName:"智慧园区管控系统",
      usernameflure:"用户名不能为空",
      logIn: '登录',
      username: '账号',
      password: '密码',
      any: '随便填',
      thirdparty: '第三方登录',
      thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
    },
    documentation: {
      documentation: '文档',
      github: 'Github 地址'
    },
    permission: {
      roles: '你的权限',
      switchRoles: '切换权限'
    },
    guide: {
      description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
      button: '打开引导'
    },
    components: {
      documentation: '文档',
      tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
      dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
      stickyTips: '当页面滚动到预设的位置会吸附在顶部',
      backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
      backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
      imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
    },
    table: {
      dynamicTips1: '固定表头, 按照表头顺序排序',
      dynamicTips2: '不固定表头, 按照点击顺序排序',
      dragTips1: '默认顺序',
      dragTips2: '拖拽后顺序',
      title: '标题',
      importance: '重要性',
      type: '类型',
      remark: '点评',
      search: '搜索',
      add: '添加',
      export: '导出',
      reviewer: '审核人',
      id: '序号',
      date: '时间',
      author: '作者',
      readings: '阅读数',
      status: '状态',
      actions: '操作',
      edit: '编辑',
      publish: '发布',
      draft: '草稿',
      delete: '删除',
      cancel: '取 消',
      confirm: '确 定',
    },
    errorLog: {
      tips: '请点击右上角bug小图标',
      description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
      documentation: '文档介绍'
    },
    excel: {
      export: '导出',
      selectedExport: '导出已选择项',
      placeholder: '请输入文件名(默认excel-list)'
    },
    zip: {
      export: '导出',
      placeholder: '请输入文件名(默认file)'
    },
    theme: {
      change: '换肤',
      theme:"主题颜色",
      documentation: '换肤文档',
      tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
    },
    tagsView: {
      close: '关闭',
      closeOthers: '关闭其它',
      closeAll: '关闭所有'
    },
    rules:{
      username:"用户名不能为空",
      userNumber:"用户名3-5位",
      password:"密码不能为空",
      passNumber:"密码3-5位",
    }
  }
  