export const reproductStatus = (action) => {
    return action === 'create' ? 
    [
        { id: 1, label: 'กำลังสืบพันธุ์' },
        { id: 2, label: 'ตั้งครรภ์' },
        { id: 3, label: 'คลอดลูกแล้ว' },
        { id: 4, label: 'สืบพันธุ์ไม่สำเร็จ' }
    ]
    :[
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'กำลังสืบพันธุ์' },
        { id: 2, label: 'ตั้งครรภ์' },
        { id: 3, label: 'คลอดลูกแล้ว' },
        { id: 4, label: 'สืบพันธุ์ไม่สำเร็จ' }
    ]
}

export const reproductResult = (action) => {
    return action === 'create' ?
    [
        { id: 1, label: 'ผิดปกติ' },
        { id: 2, label: 'ไข่เล็ก' },
        { id: 3, label: 'ตั้งรอบ' },
        { id: 4, label: 'F - ซ้าย' },
        { id: 5, label: 'F - ขวา' }
    ]
    :[
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'ผิดปกติ' },
        { id: 2, label: 'ไข่เล็ก' },
        { id: 3, label: 'ตั้งรอบ' },
        { id: 4, label: 'F - ซ้าย' },
        { id: 5, label: 'F - ขวา' }
    ]
}

