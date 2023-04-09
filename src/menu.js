
export default [
  [
    {
      to: '/dashboard',
      icon: 'chartPie',
      label: 'ภาพรวมฟาร์ม'
    }
  ]
  ,
  'โค',
  [
    {
      to: '/manage/cow',
      icon: 'cow',
      label: 'ข้อมูลโค'
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
    
  ],
  'ดูแล',
  [
    {
      to: '/manage/heal',
      icon: 'medication',
      label: 'การรักษา'
    },
    {
      to: '/manage/protection',
      icon: 'needle',
      label: 'การป้องกัน/บำรุง'
    },
    {
      to: '/manage/food',
      icon: 'corn',
      label: 'การให้อาหาร'
    },
  ],
  'ผลผลิต',
  [
    {
      to: '/manage/milk',
      icon: 'cupWater',
      label: 'น้ำนมดิบ (การรีดนม)'
    },
  ],
  'ต้นทุน',
  [
    {
      to: '/manage/maintenance',
      icon: 'progressWrench',
      label: 'การซ่อมบำรุง'
    },
    {
      to: '/manage/equipment',
      icon: 'shovel',
      label: 'อุปกรณ์'
    },
    {
      to: '/manage/building',
      icon: 'barn',
      label: 'สิ่งปลูกสร้าง'
    },
    {
      to: '/manage/worker',
      icon: 'accountHardHat',
      label: 'คนงาน'
    },
    {
      to: '/manage/vaccine',
      icon: 'needle',
      label: 'วัคซีน'
    },
    {
      to: '/manage/recipe',
      icon: 'scale',
      label: 'สูตรอาหาร'
    },
    {
      to: '/manage/recipe',
      icon: 'homeLightningBoltOutline',
      label: 'ค่าใช้จ่ายอื่นๆ'
    },
  ],
  'รายงาน',
  [
    {
      label: 'ผลผลิต',
      icon: 'chartBoxOutline',
      menu: [
        {
          to: '/report/raw-milk',
          icon: 'water',
          label: 'น้ำนมดิบ'
        }
      ]
    },
    // {
    //   label: 'รายรับ-รายจ่าย',
    //   icon: 'cashRegister',
    //   menu: [
    //     {
    //       to: '/report/parameter',
    //       icon: 'chartLine',
    //       label: 'รายได้จากผลผลิตน้ำนมดิบ'
    //     },

    //     {
    //       to: '/report/parameter',
    //       icon: 'chartLine',
    //       label: 'รายจ่ายไม่ก่อเกิดรายได้'
    //     },
    //   ]
    // },
    {
      label: 'ประวัติต่างๆ',
      icon: 'textBoxSearchOutline',
      menu: [
        {
          to: '/report/history',
          icon: 'cow',
          label: 'ประวัติและคุณลักษณะของวัว'
        },
        // {
        //   to: '/report/parameter',
        //   icon: 'chartLine',
        //   label: 'ประวัติการรักษา ป้องกัน และฟื้นฟู'
        // },
        // {
        //   to: '/report/parameter',
        //   icon: 'chartLine',
        //   label: 'ประวัติการสืบพันธุ์ และการคลอดลูก'
        // },
      ]
    },
    // {
    //   label: 'วิเคราะห์',
    //   icon: 'calculator',
    //   menu: [
    //     {
    //       to: '/report/parameter',
    //       icon: 'chartLine',
    //       label: 'ผลประกอบกิจการ'
    //     },
    //     {
    //       to: '/report/parameter',
    //       icon: 'chartLine',
    //       label: 'ความคุ้มค่าของวัว'
    //     },
    //   ]
    // },
    
  ],
  'ตั้งค่า',
  [
    {
      icon: 'messageBadgeOutline',
      label: 'การแจ้งเตือน',
      menu : [
        {
          to: '/setting/notification/log',
          icon: 'clipboardTextClockOutline',
          label: 'ประวัติการแจ้งเตือน'
        },
        {
          to: '/setting/notification/calendar',
          icon: 'calendar',
          label: 'ปฏิทินกำหนดการ'
        },
        {
          to: '/setting/notification/parameter',
          icon: 'bellCogOutline',
          label: 'ตั้งค่าแจ้งเตือน'
        }
      ]
    },
    {
      to: '/setting/parameter',
      icon: 'applicationVariableOutline',
      label: 'พารามิเตอร์'
    },
  ],
  
]
