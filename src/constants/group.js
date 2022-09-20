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

export const getGroupStatus = (type) => {
    switch (type) {
        case "P":
            return "กำลังเล่น";     
        case "N":
            return "สร้างใหม่";
        case "S":
            return "จบแล้ว";  
    }
}

export const getCareFeeType = (type) => {
    switch (type) {
        case "1":
            return "งวดแรก";     
        case "2":
            return "เมื่อได้รับเงิน";
    }
}