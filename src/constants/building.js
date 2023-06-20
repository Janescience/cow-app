export const status = (action) => {
    if(action === 'ddl'){
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 'A' , label : 'ใช้งาน' },
            { id : 'I' , label : 'ไม่ใช้งาน' },
        ]
        
    }else{
        return { 'A':'ใช้งาน','I':'ไม่ใช้งาน'}
    }
}
    
    
    



