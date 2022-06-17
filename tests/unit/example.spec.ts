import { mount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent.vue'

describe('TestComponent.vue', () => {
  
  it('test it', async () => {
    
    /**
     * Create a fake component to simulate an app 
     * consuming the component we want to test
     */
    const parent = mount({
      data: () => ({ count: 10 }),
      template: '<div><TestComponent v-model="count" /></div>',
      components: { TestComponent }
    })

    // @ts-ignore
    expect(parent.vm.count).toBe(10)

    /**
     * Simulate User behavior that would 
     * manipulating the data
     */
    const button = parent.find('button')
    expect(button.exists()).toBe(true)
    button.trigger('click')

    /**
     * Wait for a DOM update to ensure 
     * reactivity has completed
     */
    await parent.vm.$nextTick()

    // @ts-ignore
    expect(parent.vm.count).toBe(11)
  })
})
