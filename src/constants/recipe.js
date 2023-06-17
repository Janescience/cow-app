export const type = (action) => {
    if(action === 'create'){
        return [
            { id : 1 , label : 'อาหารหยาบ' },
            { id : 2 , label : 'อาหารข้น ผสมเอง' },
            { id : 3 , label : 'อาหารข้น สำเร็จรูป' },
        ]
        
    }else{
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 1 , label : 'อาหารหยาบ' },
            { id : 2 , label : 'อาหารข้น ผสมเอง' },
            { id : 3 , label : 'อาหารข้น สำเร็จรูป' },
        ]
    }
}
    
    
    



