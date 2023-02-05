
export const status = (mode) => {
    if(mode == 'ddl'){
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: 'S', label: 'สำเร็จ' },
            { id: 'F', label: 'ไม่สำเร็จ' },
        ]
    }else{
        return { 'S': 'สำเร็จ' ,'F': 'ไม่สำเร็จ' }
    }
       
}

export const type = (mode) => {
    if(mode == 'ddl'){
        return [
            { id: "", label: 'ทั้งหมด' },
            { id: "B", label: 'ระบบ(ตามเงื่อนไข)' },
            { id: "T", label: 'ทดสอบจากผู้ใช้' },
            { id: "S", label: 'ระบบ(อัตโนมัติ)' },
        ]
    }else{
        return { "B": 'ระบบ(ตามเงื่อนไข)',  "T" : 'ทดสอบจากผู้ใช้' ,"S" : 'ระบบ(อัตโนมัติ)' }
    }
        
}
