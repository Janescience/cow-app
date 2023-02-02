
export default [
  [
    {
      to: '/dashboard',
      icon: 'chartPie',
      label: 'ภาพรวมฟาร์ม'
    }
  ]
  ,
  'การจัดการ',
  [
    {
      to: '/manage/cow',
      icon: 'cow',
      label: 'โค'
    },
    {
      to: '/manage/milk',
      icon: 'cupWater',
      label: 'น้ำนมดิบ (การรีดนม)'
    },
    {
      to: '/manage/reproduct',
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
      to: '/manage/food',
      icon: 'foodDrumstickOutline',
      label: 'การให้อาหาร'
    },
    {
      to: '/manage/recipe',
      icon: 'calculatorVariantOutline',
      label: 'สูตรอาหาร'
    },
  ],
  'รายงาน',
  [
    {
      label: 'ผลผลิต',
      icon: 'chartBoxOutline',
      menu: [
        {
          to: '/report/notification',
          icon: 'chartLine',
          label: 'ผลผลิตน้ำนมดิบของโค'
        }
      ]
    },
    {
      label: 'รายรับ-รายจ่าย',
      icon: 'cashRegister',
      menu: [
        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'รายได้จากผลผลิตน้ำนมดิบ'
        },

        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'รายจ่ายไม่ก่อเกิดรายได้'
        },
      ]
    },
    {
      label: 'ประวัติต่างๆ',
      icon: 'textBoxSearchOutline',
      menu: [
        {
          to: '/report/history',
          icon: 'chartLine',
          label: 'ประวัติและคุณลักษณะของวัว'
        },
        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'ประวัติการรักษา ป้องกัน และฟื้นฟู'
        },
        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'ประวัติการสืบพันธุ์ และการคลอดลูก'
        },
      ]
    },
    {
      label: 'วิเคราะห์',
      icon: 'calculator',
      menu: [
        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'ผลประกอบกิจการ'
        },
        {
          to: '/report/parameter',
          icon: 'chartLine',
          label: 'ความคุ้มค่าของวัว'
        },
      ]
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
