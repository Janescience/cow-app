export const months = () => {
    return [
        {id:1,label:'มกราคม'},
        {id:2,label:'กุมภาพันธ์'},
        {id:3,label:'มีนาคม'},
        {id:4,label:'เมษายน'},
        {id:5,label:'พฤษภาคม'},
        {id:6,label:'มิถุนายน'},
        {id:7,label:'กรกฏาคม'},
        {id:8,label:'สิงหาคม'},
        {id:9,label:'กันยายน'},
        {id:10,label:'ตุลาคม'},
        {id:11,label:'พฤศจิกายน'},
        {id:12,label:'ธันวาคม'},
    ]
}

export const years = () => {
    return getYears();
}

const getYears = () => {
    let years = []
    const currentYearTh = new Date().getFullYear() + 543
    const currentYear = new Date().getFullYear()

    for(let i = 5 ; i>0;i--){
        years.push({id:currentYear+i,label:currentYearTh+i})
    }

    years.push({id:currentYear,label:currentYearTh})

    for(let i = 1 ; i<6;i++){
        years.push({id:currentYear-i,label:currentYearTh-i})
    }
    return years;
}
    
    
    



