import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    title: 'Vue3 Communication Examples',
    common: {
      parent: 'Parent',
      child: 'Child',
      count: 'Count',
      message: 'Message',
      increment: 'Increment',
      updateMessage: 'Update Message',
      user: 'User',
      age: 'years old',
      parentData: 'Parent Data',
      receivedMessage: 'Received Message',
      grandChild: 'Grandchild',
      menu: {
        props: 'Props',
        customEvent: 'Custom Event',
        eventBus: 'Event Bus',
        vModel: 'v-Model',
        attrs: 'useAttrs',
        ref: 'ref/$parent',
        provideInject: 'Provide/Inject',
        pinia: 'Pinia',
        slot: 'Slot',
      },
    },
    pages: {
      props: {
        title: 'Props Example (readonly)',
        fromParent: 'Hello from Parent',
        userInfo: 'User Info',
      },
      customEvent: {
        title: 'Custom Event Example',
        notifyParent: 'Notify Parent',
        sendMessage: 'Send Message',
        fromChild: 'Hello from Child',
        incrementBy: 'Increment by',
      },
      provideInject: {
        title: 'Provide/Inject Example',
        fromParent: 'Hello from Parent',
        grandChildMsg: 'Message in GrandChild',
        receivedFromParent: 'Received from Parent',
      },
      pinia: {
        title: 'Pinia State Management Example',
        parentUpdate: 'Message updated by parent',
        childUpdate: 'Message updated by child',
        storeCount: 'Store Count',
        storeMessage: 'Store Message',
      },
      slot: {
        title: 'Slot Example',
        defaultContent: 'This is default slot content',
        namedSlot: 'This is named slot',
        footerSlot: 'This is footer slot',
        headerSlot: 'Header Slot',
        scopedSlot: 'Scoped Slot Example',
      },
      ref: {
        title: 'ref/$parent Example',
        callChild: 'Call Child Method',
        fromParent: 'Message from Parent',
        receivedCount: 'Received count from parent',
        callParent: 'Call parent method via $parent',
        calledParent: 'Called parent increment method',
        childMethod: 'Child Method Called',
      },
      eventBus: {
        title: 'Event Bus Example',
        child1: 'Child1 Component',
        child2: 'Child2 Component',
        sendToChild2: 'Send Message to Child2',
        fromChild1: 'Message from Child1',
        receivedFromBus: 'Received from Event Bus',
      },
      attrs: {
        title: 'useAttrs Example',
        message: '{type} message',
        primaryBtn: 'Primary Button',
        successBtn: 'Success Button',
        warnBtn: 'Warning Button',
        child: 'Child Component',
        attrsDisplay: 'Attributes:',
      },
      vModel: {
        title: 'v-model Binding Example',
      },
    },
  },
  zh: {
    title: 'Vue3 通信示例',
    common: {
      parent: '父组件',
      child: '子组件',
      count: '计数',
      message: '消息',
      increment: '计数+1',
      updateMessage: '更新消息',
      user: '用户',
      age: '岁',
      parentData: '父组件数据',
      receivedMessage: '接收到的消息',
      grandChild: '孙组件',
      menu: {
        props: 'Props传值',
        customEvent: '自定义事件',
        eventBus: '事件总线',
        vModel: 'v-Model绑定',
        attrs: 'useAttrs',
        ref: 'ref/$parent',
        provideInject: '依赖注入',
        pinia: 'Pinia状态管理',
        slot: '插槽',
      },
    },
    pages: {
      props: {
        title: 'Props 传值示例(readonly)',
        fromParent: '来自父组件的消息',
        userInfo: '用户信息',
      },
      customEvent: {
        title: '自定义事件示例',
        notifyParent: '通知父组件',
        sendMessage: '发送消息',
        fromChild: '来自子组件的消息',
        incrementBy: '增加',
      },
      provideInject: {
        title: '依赖注入示例',
        fromParent: '来自父组件的消息',
        grandChildMsg: '孙组件中的消息',
        receivedFromParent: '从父组件接收到',
      },
      pinia: {
        title: 'Pinia 状态管理示例',
        parentUpdate: '父组件更新的消息',
        childUpdate: '子组件更新的消息',
        storeCount: 'Store中的计数',
        storeMessage: 'Store中的消息',
      },
      slot: {
        title: '插槽示例',
        defaultContent: '这是默认插槽的内容',
        namedSlot: '这是具名插槽',
        footerSlot: '这是底部具名插槽',
        headerSlot: '头部插槽',
        scopedSlot: '作用域插槽示例',
      },
      ref: {
        title: 'ref、$parent示例',
        callChild: '调用子组件方法',
        fromParent: '来自父组件的消息',
        receivedCount: '接收到的计数',
        callParent: '通过$parent调用父组件方法',
        calledParent: '调用父组件的increment方法',
        childMethod: '子组件方法被调用',
      },
      eventBus: {
        title: '全局事件总线示例',
        child1: 'Child1组件',
        child2: 'Child2组件',
        sendToChild2: '发送消息给Child2',
        fromChild1: '来自Child1的消息',
        receivedFromBus: '从事件总线接收到',
      },
      attrs: {
        title: 'useAttrs示例',
        message: '{type}消息',
        primaryBtn: '主要按钮',
        successBtn: '成功按钮',
        warnBtn: '警告按钮',
        child: '子组件',
        attrsDisplay: '属性：',
      },
      vModel: {
        title: 'v-model绑定示例',
      },
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages,
})
