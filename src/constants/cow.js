
import CowService from '@/services/cow'
import _ from 'lodash'
export const status = (mode) => {
    if(mode === 'create'){
        return [
            { id: 1, label: 'โคท้อง' },
            { id: 2, label: 'โคดราย' },
            { id: 3, label: 'โคสาว' },
            { id: 4, label: 'โคเด็ก' },
            { id: 5, label: 'โคพักนม' }
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 1, label: 'โคท้อง' },
            { id: 2, label: 'โคดราย' },
            { id: 3, label: 'โคสาว' },
            { id: 4, label: 'โคเด็ก' },
            { id: 5, label: 'โคพักนม' }
        ]
    }
}

export const quality = (mode) => {
    if(mode === 'create'){
        return [
            { id: 1, label: 'คุณภาพดี' },
            { id: 2, label: 'ปกติ' },
            { id: 3, label: 'แย่' },
            { id: 4, label: 'ไม่ได้ตรวจ' },
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 1, label: 'คุณภาพดี' },
            { id: 2, label: 'ปกติ' },
            { id: 3, label: 'แย่' },
            { id: 4, label: 'ไม่ได้ตรวจ' },
        ]
    }
}

export const sex = (mode) => {
    if(mode === 'create'){
        return [
            { id: 'M', label: 'ตัวผู้' },
            { id: 'F', label: 'ตัวเมีย' },
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 'M', label: 'ตัวผู้' },
            { id:'F', label: 'ตัวเมีย' },
        ]
    }
}


export const flag = () => {
    return [
        { id: '', label: 'ทั้งหมด' },
        { id: 'Y', label: 'ใช้งาน' },
        { id: 'N', label: 'ไม่ใช้งาน' },
    ]
}
