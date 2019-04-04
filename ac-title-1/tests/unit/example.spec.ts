import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AcTitle1 from '@/AcTitle1.vue'

describe('AcTitle1.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'hehea'
    const wrapper = shallowMount(AcTitle1, {
      propsData: { title }
    })
    expect(wrapper.text()).to.include(title)
  })
})
