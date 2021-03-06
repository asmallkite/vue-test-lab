import { shallowMount } from '@vue/test-utils'
import TextRender from '@/components/TextRender/index'

/**
 *
 */
test('TextRender', () => {
  // 渲染这个组件
  const wrapper = shallowMount(TextRender)

  // `username` 在除去头尾空格之后不应该少于 7 个字符
  wrapper.setData({ username: ' '.repeat(7) })

  // 确认错误信息被渲染了
  expect(wrapper.find('.error').exists()).toBe(true)

  // 将名字更新至足够长
  wrapper.setData({ username: 'Lachlan' })

  // 断言错误信息不再显示了
  expect(wrapper.find('.error').exists()).toBe(false)
})

// 我们在上一个示例的基础上继续构建，同时引入一个工厂函数 (factory function)使得我们的测试更简洁更易读。这个组件应该
