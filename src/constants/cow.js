

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
            { id: 1, label: 'ปกติ' },
            { id: 2, label: 'คุณภาพดี' },
            { id: 3, label: 'ยังไม่ได้ตรวจ' },
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 1, label: 'ปกติ' },
            { id: 2, label: 'คุณภาพดี' },
            { id: 3, label: 'ยังไม่ได้ตรวจ' },
        ]
    }
}
