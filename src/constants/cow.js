

export const status = (mode) => {
    if(mode === 'create'){
        return [
            { id: 1, label: 'ท้อง' },
            { id: 2, label: 'นมแห้ง' },
            { id: 3, label: 'ให้ผลผลิต' },
            { id: 4, label: 'วัวเด็ก' }
        ]
    }else{
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 1, label: 'ท้อง' },
            { id: 2, label: 'นมแห้ง' },
            { id: 3, label: 'ให้ผลผลิต' },
            { id: 4, label: 'วัวเด็ก' }
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
