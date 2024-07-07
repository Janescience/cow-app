
export default [
  [
    {
      to: '/overview/farm',
      icon: 'chartPie',
      label: 'ภาพรวมฟาร์ม'
    },
    {
      to: '/overview/cow',
      icon: 'graph',
      label: 'ภาพรวมโค'
    },
    {
      to: '/todolist',
      icon: 'formatListChecks',
      label: 'รายการที่ต้องทำ'
    },
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
      label: 'ผสมพันธุ์'
    },
    {
      to: '/manage/birth',
      icon: 'humanPregnant',
      label: 'ติดตามโคท้อง/คลอดลูก'
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
      label: 'ฉีดวัคซีน'
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
    {
      to: '/setting/parameter',
      icon: 'cash',
      label: 'ราคาน้ำนมดิบ/กก.'
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
      label: 'คนงาน',
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
      to: '/manage/bill',
      icon: 'cashMultiple',
      label: 'ค่าใช้จ่ายเพิ่มเติม'
    },
  ],
  'รายงาน',
  [
    {
      to: '/report/raw-milk',
      icon: 'microsoftExcel',
      label: 'รายงานผลผลิตน้ำนมดิบ'
    },
    {
      to: '/report/cow',
      icon: 'microsoftExcel',
      label: 'รายงานข้อมูลโค'
    },
    {
      to: '/report/reproduct',
      icon: 'microsoftExcel',
      label: 'รายงานข้อมูลการสืบพันธุ์'
    },
    {
      to: '/report/heal',
      icon: 'microsoftExcel',
      label: 'รายงานข้อมูลการรักษา'
    }
    
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
]
