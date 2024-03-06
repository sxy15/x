import { describe, expect, test } from 'vitest'
import Button from './Button.vue'
import { mount } from '@vue/test-utils'

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'button',
      },
    })
    expect(wrapper.classes()).toContain('af-button--primary')
    expect(wrapper.get('button').text()).toBe('button')
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'button',
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').element.disabled).toBeDefined()

    wrapper.get('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
