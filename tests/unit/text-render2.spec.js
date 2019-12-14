import { shallowMount } from '@vue/test-utils'
import TextRender2 from '@/components/TextRender/index2'

describe('Foo', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(TextRender2, {
      data () {
        return {
          message: 'Hello World',
          username: ''
        }
      }
    })
    // wrapper.setData({ message: 'Hello World' })
    // 确认是否渲染了 `message`
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // 断言渲染了错误信息
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // 更新 `username` 并断言错误信息不再被渲染
    wrapper.setData({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})

/*
上述代码有一些问题：

单个测试断言了不同的事情
很难阐述组件可以处于哪些不同的状态，以及它该被渲染成什么样子
接下来的示例从这几个方面改善了测试：

每个 it 块只做一个断言
让测试描述更简短清晰
只提供测试需要的最小化数据
把重复的逻辑重构到了一个工厂函数中 (创建 wrapper 和设置 username 变量) */
