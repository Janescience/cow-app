export const expenses = (action) => {
    if(action === 'create'){
        return [
            { id : 'WATER' , label : 'ค่าน้ำ' },
            { id : 'ELECTRIC' , label : 'ค่าไฟ' },
            { id : 'ACCOM' , label : 'ค่าที่พักคนงาน' },
            { id : 'RENT' , label : 'ค่าเช่า' },
            { id : 'INTERNET' , label : 'ค่าอินเทอร์เน็ต' },
            { id : 'WASTE' , label : 'ค่าของเสีย' },
            { id : 'OTH' , label : 'อื่นๆ' },
        ]
        
    }else{
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 'WATER' , label : 'ค่าน้ำ' },
            { id : 'ELECTRIC' , label : 'ค่าไฟ' },
            { id : 'ACCOM' , label : 'ค่าที่พักคนงาน' },
            { id : 'RENT' , label : 'ค่าเช่า' },
            { id : 'INTERNET' , label : 'ค่าอินเทอร์เน็ต' },
            { id : 'WASTE' , label : 'ค่าของเสีย' },
            { id : 'OTH' , label : 'อื่นๆ' },
        ]
    }
}
    
    
    



