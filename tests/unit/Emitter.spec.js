import Emitter from '@/components/Emitter'
import { shallowMount } from '@vue/test-utils'

/**
 * https://lmiller1990.github.io/vue-testing-handbook/testing-emitted-events.html#testing-emitted-events
 * https://vue-test-utils.vuejs.org/api/wrapper/emitted.html
 *
 * 1. 查看文件。
 * 2. emits an event with two arguments
 * 3. emitted is a method. It returns an object with properties corresponding to the emitted events
 */
describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent() // 模拟事件

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })

  it('emits an event that name is foo', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.$emit('foo')
    wrapper.vm.$emit('foo', 123)

    expect(wrapper.emitted().foo).toBeTruthy()
    expect(wrapper.emitted('foo').length).toBe(2)
    expect(wrapper.emitted('foo')[1]).toEqual([123])
  })

  // it('emits an event without mounting the component', () => {
  //   const events = {}
  //   const $emit = (event, ...args) => { events[event] = [...args] }
  //
  //   Emitter.methods.emitEvent.call({ $emit })
  //
  //   expect(events.myEvent).toEqual(['name', 'password'])
  // })
})
