export const reproductStatus = () => {
    return [
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'อยู่ในกระบวนการ' },
        { id: 2, label: 'ตั้งครรภ์' },
        { id: 3, label: 'คลอดลูกแล้ว' },
        { id: 4, label: 'สืบพันธุ์ไม่สำเร็จ' }
    ]
}

export const reproductResult = () => {
    return [
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'ผิดปกติ' },
        { id: 2, label: 'ไข่เล็ก' },
        { id: 3, label: 'ตั้งรอบ' },
        { id: 4, label: 'F(ซ้าย)' },
        { id: 5, label: 'F(ขวา)' }
    ]
}

