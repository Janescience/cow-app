export const type = (action) => {
    if(action === 'create'){
        return [
            { id : 1 , label : 'หยาบ' },
            { id : 2 , label : 'ผสมเอง' },
            { id : 3 , label : 'สำเร็จรูป' },
        ]
        
    }else{
        return [
            { id : '' , label : 'ทั้งหมด' },
            { id : 1 , label : 'หยาบ' },
            { id : 2 , label : 'ผสมเอง' },
            { id : 3 , label : 'สำเร็จรูป' },
        ]
    }
}
    
    
    



