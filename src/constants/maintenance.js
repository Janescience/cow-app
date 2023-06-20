export const categories = (action) => {
    if(action === 'create'){
        return [
            { id : 'E' , label : 'อุปกรณ์' },
            { id : 'B' , label : 'สิ่งก่อสร้าง' },
        ]
        
    }else{
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 'E' , label : 'อุปกรณ์' },
            { id : 'B' , label : 'สิ่งก่อสร้าง' },
        ]
    }
}
    
    
    



