
import CowService from '@/services/cow'
import _ from 'lodash'
export const status = (mode,sex) => {
    const statusM = [
        { id: 4, label: 'โคเด็ก' },
        { id: 7, label: 'โคพ่อพันธุ์' },
        { id: 8, label: 'โคจำหน่าย' },
        { id: 9, label: 'โคเลี้ยง' },
        { id: 10, label: 'โคขุน' },
    ]
    const statusF = [
        { id: 1, label: 'โคท้อง' },
        { id: 2, label: 'โคปลดระวาง' },
        { id: 3, label: 'โครีดนม' },
        { id: 4, label: 'โคเด็ก' },
        { id: 5, label: 'โคดราย' },
        { id: 6, label: 'โคสาว' },
    ]

    let status = []
    if(sex){
        if(sex == 'M'){
            status = statusM
        }
        if(sex == 'F'){
            status =statusF
        }
        if(mode !== 'create'){
            status.push({ id: "", label: 'ทั้งหมด' });
        }
        return status;
    }

    status = statusF;
    status.push(...statusM);

    if(mode !== 'create'){
        status.push({ id: "", label: 'ทั้งหมด' })
    }

    return status;
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
