import { render, fireEvent } from '@testing-library/vue'
import Counter from '@/components/Counter2'
// 灵感来源 ： https://itnext.io/vue-and-vue-testing-library-bb388a977e17

describe(' Counter2 by BDD', () => {
  test('User should see 0 at the beginning', async () => {
    // The render method returns a collection of utilities to query your component.
    // The imported Render function will just take care of mounting the desired component
    // in isolation and it returns a set of utilities specific to the wrapped instance
    const { getByText } = render(Counter)

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    getByText('Times clicked: 0')
  })
  /**
   * You might notice that our test doesn’t search for a specific tag.
   * That’s a benefit because it helps to rely on Test First Development and leave a margin of flexibility.
   * In addition,
   * end users are not focusing on the nature of HTML tags or hierarchy but only on the displayed content.
   */

  test('increments value on click', async () => {
    const { getByText } = render(Counter)

    const button = getByText('increment')
    // Dispatch a native click event to our button element.
    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 2')
  })
})
