

export const status = (mode) => {
    if(mode === 'create'){
        return [
            { id: 1, label: 'โคท้อง' },
            { id: 2, label: 'โคดราย' },
            { id: 3, label: 'โครีดนม' },
            { id: 4, label: 'โคเด็ก' }
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 1, label: 'โคท้อง' },
            { id: 2, label: 'โคดราย' },
            { id: 3, label: 'โครีดนม' },
            { id: 4, label: 'โคเด็ก' }
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

export const flag = () => {
    return [
        { id: '', label: 'ทั้งหมด' },
        { id: 'Y', label: 'ใช้งาน' },
        { id: 'N', label: 'ไม่ใช้งาน' },
    ]
}
