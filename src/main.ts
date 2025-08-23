import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router)
app.use(ElementPlus)

// v-closable: blur active input/textarea when clicking or swiping outside the bound element (mobile-friendly)
app.directive('closable', {
  mounted(el) {
    const state: { startX: number; startY: number } = { startX: 0, startY: 0 }
    
    const isEditable = (node: any) => {
      if (!node || !node.tagName) return false
      const tag = String(node.tagName).toUpperCase()
      return tag === 'INPUT' || tag === 'TEXTAREA' || node.isContentEditable === true
    }
    
    const blurActive = () => {
      const ae = document.activeElement as HTMLElement | null
      if (ae && isEditable(ae)) ae.blur()
    }

    // Check if target or its parents belong to autocomplete dropdown
    const isInsideAutocompleteDropdown = (target: any) => {
      if (!target) return false
      
      let current = target
      while (current && current !== document.body) {
        // Check for Element Plus autocomplete dropdown classes
        if (current.classList) {
          if (current.classList.contains('el-autocomplete-suggestion') ||
              current.classList.contains('el-popper') ||
              current.classList.contains('el-select-dropdown') ||
              current.classList.contains('el-autocomplete__popper') ||
              current.closest?.('.el-popper')) {
            return true
          }
        }
        current = current.parentElement
      }
      return false
    }
    
    // We consider any tap/click whose target is not an editable as a signal to blur
    // BUT exclude autocomplete dropdown elements
    const shouldBlurForTarget = (target: any) => {
      return !isEditable(target) && !isInsideAutocompleteDropdown(target)
    }

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches && e.touches[0]
      if (t) {
        state.startX = t.clientX
        state.startY = t.clientY
      }
    }
    
    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches && e.changedTouches[0]
      const dx = t ? Math.abs(t.clientX - state.startX) : 0
      const dy = t ? Math.abs(t.clientY - state.startY) : 0
      const target = e.target as Node | null
      const threshold = 20
      
      // If touch ended on a non-editable (and not autocomplete dropdown) or it was a swipe gesture, blur the active input
      if ((target && shouldBlurForTarget(target)) || dx > threshold || dy > threshold) {
        // Add small delay to allow autocomplete selection to complete
        setTimeout(() => {
          // Double check - if we're about to blur but the target is inside autocomplete dropdown, don't blur
          if (target && isInsideAutocompleteDropdown(target)) {
            return
          }
          blurActive()
        }, 50)
      }
    }
    
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null
      if (target && shouldBlurForTarget(target)) {
        blurActive()
      }
    }

    // Store handlers for cleanup
    ;(el as any).__closableHandlers__ = { onTouchStart, onTouchEnd, onMouseDown }
    
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    document.addEventListener('mousedown', onMouseDown, { passive: true } as any)
  },
  
  unmounted(el) {
    const h = (el as any).__closableHandlers__
    if (h) {
      document.removeEventListener('touchstart', h.onTouchStart)
      document.removeEventListener('touchend', h.onTouchEnd)
      document.removeEventListener('mousedown', h.onMouseDown)
      delete (el as any).__closableHandlers__
    }
  }
})

// v-closable: blur active input/textarea when clicking or swiping outside the bound element (mobile-friendly)
// app.directive('closable', {
//   mounted(el) {
//     const state: { startX: number; startY: number } = { startX: 0, startY: 0 }
//     const isEditable = (node: any) => {
//       if (!node || !node.tagName) return false
//       const tag = String(node.tagName).toUpperCase()
//       return tag === 'INPUT' || tag === 'TEXTAREA' || node.isContentEditable === true
//     }
//     const blurActive = () => {
//       const ae = document.activeElement as HTMLElement | null
//       if (ae && isEditable(ae)) ae.blur()
//     }
//     // We consider any tap/click whose target is not an editable as a signal to blur
//     const shouldBlurForTarget = (target: any) => !isEditable(target)

//     const onTouchStart = (e: TouchEvent) => {
//       const t = e.touches && e.touches[0]
//       if (t) {
//         state.startX = t.clientX
//         state.startY = t.clientY
//       }
//     }
//     const onTouchEnd = (e: TouchEvent) => {
//       const t = e.changedTouches && e.changedTouches[0]
//       const dx = t ? Math.abs(t.clientX - state.startX) : 0
      
//       const dy = t ? Math.abs(t.clientY - state.startY) : 0
//       const target = e.target as Node | null
//       const threshold = 20
//       // If touch ended on a non-editable or it was a swipe gesture, blur the active input
//       if ((target && shouldBlurForTarget(target)) || dx > threshold || dy > threshold) {
//         blurActive()
//       }
//     }
//     const onMouseDown = (e: MouseEvent) => {
//       const target = e.target as Node | null
//       if (target && shouldBlurForTarget(target)) blurActive()
//     }

//     ;(el as any).__closableHandlers__ = { onTouchStart, onTouchEnd, onMouseDown }
//     document.addEventListener('touchstart', onTouchStart, { passive: true })
//     document.addEventListener('touchend', onTouchEnd, { passive: true })
//     document.addEventListener('mousedown', onMouseDown, { passive: true } as any)
//   },
//   unmounted(el) {
//     const h = (el as any).__closableHandlers__
//     if (h) {
//       document.removeEventListener('touchstart', h.onTouchStart)
//       document.removeEventListener('touchend', h.onTouchEnd)
//       document.removeEventListener('mousedown', h.onMouseDown)
//       delete (el as any).__closableHandlers__
//     }
//   }
// })






app.mount('#app')