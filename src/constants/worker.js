export const status = (action) => {
    if(action === 'ddl'){
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 'W' , label : 'ทำงาน' },
            { id : 'L' , label : 'เลิกจ้าง' },
            { id : 'S' , label : 'พัก' },
        ]
        
    }else{
        return { 'W':'ทำงาน','L':'เลิกจ้าง','S':'พัก'}
    }
}
    
    
    



