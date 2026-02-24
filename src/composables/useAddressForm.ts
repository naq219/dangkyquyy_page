import { ref, nextTick } from 'vue'
import { myUtils } from '../utils/myUtils'
import { exportedFilev2 } from '../utils/exportedFilev2'

const myUtils0 = new myUtils()

export interface ProvinceItem {
    value: string
    code?: number
    wards?: ProvinceItem[]
}

export function useAddressForm() {
    // ====== Thường trú ======
    const modelProvince = ref('')
    const modelWard = ref('')
    const selectedP = ref('')
    const selectedW = ref('')
    const wards = ref<ProvinceItem[]>([])

    // ====== Tạm trú ======
    const modelProvince11 = ref('')
    const modelWard11 = ref('')
    const selectedP11 = ref('')
    const selectedW11 = ref('')
    const wards11 = ref<ProvinceItem[]>([])

    // ====== Dữ liệu tỉnh/thành ======
    const provincesSource = ref<ProvinceItem[]>([])
    const provinceRef = ref()
    const wardRef = ref()

    // Load dữ liệu tỉnh/thành
    function loadProvinces() {
        provincesSource.value = new exportedFilev2().loadAllProvince()
    }

    // Filter không dấu
    const createFilter = (queryString: string) => {
        return (province: ProvinceItem) => {
            return myUtils0.removeVietnameseTones(province.value)
                .includes(myUtils0.removeVietnameseTones(queryString))
        }
    }

    // ====== Autocomplete thường trú ======
    const querySearchP = (queryString: string, cb: any) => {
        const results = queryString
            ? provincesSource.value.filter(createFilter(queryString))
            : provincesSource.value
        cb(results)
    }

    const querySearchW = (queryString: string, cb: any) => {
        const results = queryString
            ? wards.value.filter(createFilter(queryString))
            : wards.value
        cb(results)
    }

    const handleSelect = (item: ProvinceItem) => {
        selectedP.value = item.value
        wards.value = item.wards || []
        focusNextInput('ward-input')
    }

    const handleSelectW = (item: ProvinceItem) => {
        selectedW.value = item.value
    }

    // ====== Autocomplete tạm trú ======
    const querySearchP11 = (queryString: string, cb: any) => {
        const results = queryString
            ? provincesSource.value.filter(createFilter(queryString))
            : provincesSource.value
        cb(results)
    }

    const querySearchW11 = (queryString: string, cb: any) => {
        const results = queryString
            ? wards11.value.filter(createFilter(queryString))
            : wards11.value
        cb(results)
    }

    const handleSelect11 = (item: ProvinceItem) => {
        selectedP11.value = item.value
        wards11.value = item.wards || []
    }

    const handleSelectW11 = (item: ProvinceItem) => {
        selectedW11.value = item.value
    }

    // ====== Chọn nhanh tỉnh ======
    function selectQuickProvince(name: string) {
        const province = provincesSource.value.find(p => p.value === name)
        if (!province) return
        selectedP.value = province.value
        modelProvince.value = province.value
        wards.value = province.wards || []
        modelWard.value = ''
        selectedW.value = ''
        scrollToWard()
    }

    // ====== Copy địa chỉ ======
    function clickCopyDiaChi() {
        modelProvince11.value = modelProvince.value
        modelWard11.value = modelWard.value
        selectedP11.value = selectedP.value
        selectedW11.value = selectedW.value
        wards11.value = wards.value
    }

    // ====== Scroll & Focus helpers ======
    const scrollToWard = () => {
        const element = document.getElementById('ward-input')
        if (element) {
            const rect = element.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const targetTop = scrollTop + rect.top - 80
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
            setTimeout(() => element.focus(), 300)
        }
    }

    const focusNextInput = (nextInputId: string) => {
        nextTick(() => {
            try {
                const nextInput = document.querySelector(`#${nextInputId}`) as HTMLInputElement
                if (nextInput) {
                    nextInput.focus()
                    setTimeout(() => nextInput.click(), 100)
                }
            } catch (error) {
                console.error('Lỗi khi focus:', error)
            }
        })
    }

    // Khi input được focus, cuộn vào giữa màn hình
    function handleFocusInput(e: FocusEvent) {
        const target = e.target as HTMLElement | null
        if (!target) return
        setTimeout(() => {
            try {
                const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
                const extraOffset = 1.5 * rootFontSize
                const rect = target.getBoundingClientRect()
                const targetTop = rect.top + window.scrollY - extraOffset
                window.scrollTo({ top: targetTop, behavior: 'smooth' })
            } catch {
                target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
            }
        }, 1500)
    }

    // Watch location setup
    function setupWatchers() {
        myUtils0.watchLocationV2(
            modelProvince, modelWard, wards, selectedP,
            selectedW11, selectedP11, selectedW,
            modelProvince11, modelWard11, wards11
        )
    }

    return {
        // Thường trú
        modelProvince, modelWard, selectedP, selectedW, wards,
        provinceRef, wardRef,
        querySearchP, querySearchW, handleSelect, handleSelectW,
        // Tạm trú
        modelProvince11, modelWard11, selectedP11, selectedW11, wards11,
        querySearchP11, querySearchW11, handleSelect11, handleSelectW11,
        // Chung
        provincesSource,
        loadProvinces, selectQuickProvince, clickCopyDiaChi,
        handleFocusInput, scrollToWard, focusNextInput,
        setupWatchers
    }
}
