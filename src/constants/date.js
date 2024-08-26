export const months = (type) => {
    const months = []

    if(type == 'search'){
        months.push({id:null,label:'ทุกเดือน'})
    }

    months.push(...[
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
    ])
    
    return months 
}

export const monthMini = () => {
    return ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
}

export const years = (type) => {
    return getYears(type);
}

const getYears = (type) => {
    let years = []
    const currentYearTh = new Date().getFullYear() + 543
    const currentYear = new Date().getFullYear()

    if(type == 'search'){
        years.push({id:null,label:'ทุกปี'})
    }

    // for(let i = 10 ; i>0;i--){
    //     years.push({id:currentYear+i,label:currentYearTh+i})
    // }

    years.push({id:currentYear,label:currentYearTh})

    for(let i = 1 ; i<11;i++){
        years.push({id:currentYear-i,label:currentYearTh-i})
    }
    return years;
}
    
    
    



