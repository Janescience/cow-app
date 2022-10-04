export const getGroupType = (type) => {
    switch (type) {
        case "1":
            return "ขั้นบันได";     
        case "2":
            return "บิทเรทดอกตาม";
        case "3":
            return "เรทดอกตาม";  
    }
}

export const cowStatus = () => {
    return [
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'ท้อง' },
        { id: 2, label: 'นมแห้ง' },
        { id: 3, label: 'ให้ผลผลิต' },
        { id: 4, label: 'วัวเด็ก' }
    ]
}

export const getCareFeeType = (type) => {
    switch (type) {
        case "1":
            return "งวดแรก";     
        case "2":
            return "เมื่อได้รับเงิน";
    }
}