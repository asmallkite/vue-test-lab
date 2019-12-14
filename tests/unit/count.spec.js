// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { mount, shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

/**
 * https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html   Vue 组件的单元测试
 * 1. 总览：查看文件，两个文件。
 * 2. Vue Test Utils https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5 来源于  @vue/test-util库
 * 3. Vue Test Utils 通过将组件隔离挂载，然后模拟必要的输入 (prop、注入和用户事件) 和对输出 (渲染结果、触发的自定义事件) 的断言来测试 Vue 组件。
 * 4. There are different syntaxes used for TDD, we will use the commonly seen describe and it syntax that comes with Jest.
 *  it 代表了测试主体应该履行的单一职责。
 *  see:  https://lmiller1990.github.io/vue-testing-handbook/setting-up-for-tdd.html#creating-the-greeting-component
 * 5. 被挂载的组件会返回到一个包裹器内，而包裹器会暴露很多封装、遍历和查询其内部的 Vue 组件实例的便捷的方法。
 * 6. 你可以通过 mount 方法来创建包裹器。
 * 7. 包裹器： https://vue-test-utils.vuejs.org/zh/api/wrapper/#%E5%B1%9E%E6%80%A7
 * step 2
 * 8. 现在我们已经有了这个包裹器，我们能做的第一件事就是认证该组件渲染出来的 HTML 符合预期。
 * 9. assertions 断言 https://lmiller1990.github.io/vue-testing-handbook/setting-up-for-tdd.html#making-assertions
 *
 * step 3 :模拟用户交互
 *
 */

describe('test count', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Counter)

  // Creates a test closure(闭包)
  it('step 1: console.log(vm) ', () => {
    // 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
    const vm = wrapper.vm
    console.log(vm)

    // 在控制台将其记录下来即可深度审阅包裹器
    // 我们对 Vue Test Utils 的探索也由此开始
    console.log(wrapper)
  })

  it('step 2: renders the correct markup ', () => {
    console.log('wrapper is : // ', wrapper.html(), typeof wrapper.html())

    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 也便于检查已存在的元素
  it('step 2: has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // 10. 当用户点击按钮的时候，我们的计数器应该递增。为了模拟这一行为，
  // 我们首先需要通过 wrapper.find() 定位该按钮，此方法返回一个该按钮元素的包裹器。
  // 然后我们能够通过对该按钮包裹器调用 .trigger() 来模拟点击。

  it('step 3:button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  // 11.浅渲染
  /**
   * 在测试用例中，我们通常希望专注在一个孤立的单元中测试组件，避免对其子组件的行为进行间接的断言。

   额外的，对于包含许多子组件的组件来说，整个渲染树可能会非常大。重复渲染所有的子组件可能会让我们的测试变慢。

   Vue Test Utils 允许你通过 shallowMount 方法只挂载一个组件而不渲染其子组件 (即保留它们的存根)：
   */

  it('step 3: another button click should increment the count', () => {
    const shallowWrapper = shallowMount(Counter)
    expect(shallowWrapper.vm.count).toBe(0)
    const mockFn = jest.fn()
    shallowWrapper.vm.$on('toggleClick', mockFn)
    const button = shallowWrapper.find('.button')
    button.trigger('click')
    button.trigger('click')
    expect(mockFn).toBeCalled()
    expect(shallowWrapper.vm.count).toBe(2)
  })
})

// 12 .But you should always see a test fail, then pass, to make sure it's really working.
// In traditional TDD, you would write the test before the actual implementation, see it fail,
// then use the failing errors to guide your code. Let's make sure this test is really working.
// https://lmiller1990.github.io/vue-testing-handbook/setting-up-for-tdd.html#making-assertions
