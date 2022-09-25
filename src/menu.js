
export default [
  'การจัดการ',
  [
    {
      to: '/manage/cow',
      icon: 'cow',
      label: 'วัว/โค'
    },
    {
      to: '/manage/milk',
      icon: 'cupWater',
      label: 'น้ำนมดิบ (การรีดนม)'
    },
    {
      to: '/manage/reproduce',
      icon: 'reproduction',
      label: 'การสืบพันธุ์/ผสมพันธุ์'
    },
    {
      to: '/manage/birth',
      icon: 'babyFaceOutline',
      label: 'การคลอดลูก'
    },
    {
      to: '/manage/heal',
      icon: 'doctor',
      label: 'การรักษา'
    },
    {
      to: '/manage/protection',
      icon: 'pillMultiple',
      label: 'การป้องกัน/บำรุง'
    },
    {
      to: '/manage/vaccine',
      icon: 'needle',
      label: 'วัคซีน/ยา'
    },
    {
      to: '/manage/food',
      icon: 'foodDrumstickOutline',
      label: 'การให้อาหาร'
    },
    {
      to: '/manage/formula',
      icon: 'calculatorVariantOutline',
      label: 'สูตรอาหาร'
    },
  ],
  'รายงาน',
  [
    {
      to: '/report/notification',
      icon: 'chartLine',
      label: 'ผลผลิตน้ำนมดิบของโค'
    },
    {
      to: '/report/parameter',
      icon: 'chartLine',
      label: 'รายได้จากผลผลิตน้ำนมดิบของฟาร์ม'
    },
    {
      to: '/report/parameter',
      icon: 'chartLine',
      label: 'ผลประกอบกิจการของฟาร์ม'
    },
  ],
  'ตั้งค่า',
  [
    {
      to: '/setting/notification',
      icon: 'messageBadgeOutline',
      label: 'การแจ้งเตือน'
    },
    {
      to: '/setting/parameter',
      icon: 'applicationVariableOutline',
      label: 'พารามิเตอร์'
    },
  ],
  
]
