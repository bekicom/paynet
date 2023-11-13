import SettingsIcon from "@mui/icons-material/Settings";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmsIcon from "@mui/icons-material/Sms";
import SimCardIcon from "@mui/icons-material/SimCard";
import LanguageIcon from "@mui/icons-material/Language";

export const INNER_ROUTS = [
  {
    title: "Internet paketlar",
    path: "/internet",
    icon: <LanguageIcon />,
  },
  {
    title: "Usd kodlar",
    path: "/ussd",
    icon: "#",
  },
  {
    title: "Tarif rejalari",
    path: "/tarif",
    icon: <SimCardIcon />,
  },
  {
    title: "SMS toplamlar",
    path: "/sms",
    icon: <SmsIcon />,
  },
  {
    title: "Daqiqalar",
    path: "/minutes",
    icon: <AccessTimeIcon />,
  },
  {
    title: "Xizmatlar",
    path: "/servises",
    icon: <SettingsIcon />,
  },
];

export const DATA = [
  {
    id: "provider-1",
    title: "Ucell",
    path: "ucell",
  },
  {
    id: "provider-2",
    title: "Beeline",
    path: "beeline",
  },
  {
    id: "provider-3",
    title: "Mobiuz",
    path: "mobiuz",
  },
  {
    id: "provider-4",
    title: "Uzmobile",
    path: "uzmobile",
  },
];

export const INTERNETS = [
  {
    id: "internet-1",
    depId: "provider-1",
    items: [
      {
        title: "1000 mb",
        price: 8900,
        usd: "*558*555*3*1*16512#",
      },
      {
        title: "1500 mb  ",
        price: 13000,
        usd: "*558*555*3*2*16512#",
      },
      {
        title: "2000 mb  ",
        price: 15000,
        usd: "*558*555*3*3*16512#",
      },
      {
        title: "4000mb",
        price: 25000,
        usd: "*558*555*3*4*16512#",
      },
      {
        title: "7000mb",
        price: 35000,
        usd: "*558*555*3*5*16512#",
      },
      {
        title: "10000mb",
        price: 45000,
        usd: "*558*555*3*13*16512#",
      },
      {
        title: "13000mb",
        price: 55000,
        usd: "*558*555*3*6*16512#",
      },
      {
        title: "20000mb  ",
        price: 65000,
        usd: "*558*555*3*7*16512#",
      },
      {
        title: "30000mb  ",
        price: 75000,
        usd: "*558*555*3*8*16512#",
      },
      {
        title: "50000mb",
        price: 85000,
        usd: "*558*555*3*9*16512#",
      },
      {
        title: "80000mb",
        price: 115000,
        usd: "*558*555*3*10*16512#",
      },
      {
        title: "90 000 mb  ",
        price: 135000,
        usd: "*558*555*3*11*16512#",
      },
      {
        title: "135000mb",
        price: 188000,
        usd: "*558*555*3*12*16512#",
      },
    ],
  },
  {
    id: "internet-2",
    depId: "provider-2",
    items: [
      {
        title: "1000mb",
        price: 10000,
        usd: "*1*1*6050#",
      },
      {
        title: "3000mb",
        price: 20000,
        usd: "*1*2*6050#",
      
      },
      {
        title: "6000mb",
        price: 30000,
        usd: "*1*3*6050#",
      },
      {
        title: "9000mb",
        price: 40000,
        usd: "*1*4*6050#",
      },
      {
        title: "12000mb",
        price: 50000,
        usd: "*1*5*6050#",
      },
      {
        title: "15000mb",
        price: 60000,
        usd: "*1*6*6050#",
      },
      {
        title: "20000mb",
        price: 70000,
        usd: "*1*7*6050#",
      },
      {
        title: "30000mb",
        price: 90000,
        usd: "*1*8*6050#",
      },
    ],
  },
  {
    id: "internet-3",
    depId: "provider-3",
    items: [
      {
        title: "300mb",
        price: 8000,
        usd: "*171*019*1*011000308*1#",
      },
      {
        title: "500mb",
        price: 9000,
        usd: "*171*019*9*011000308*1#",
      },
      {
        title: "1000mb",
        price: 11000,
        usd: "*171*019*2*011000308*1#",
      },
      
      {
        title: "2000mb",
        price: 17000,
        usd: "*171*019*3*011000308*1#",
      },
      {
        title: "3000mb",
        price: 25000,
        usd: "*171*019*4*011000308*1#",
      },
      {
        title: "5000mb",
        price: 33000,
        usd: "*171*019*5*011000308*1#",
      },
      {
        title: "10000mb",
        price: 50000,
        usd: "*171*019*6*011000308*1#",
      },
      {
        title: "20000mb",
        price: 55000,
        usd: "*171*019*8*011000308*1#",
      },
      {
        title: "30000mb",
        price: 65000,
        usd: "*171*019*9*011000308*1#",
      },
      {
        title: "50000mb",
        price: 75000,
        usd: "*171*019*10*011000308*1#",
      },
    ],
  },
  {
    id: "internet-4",
    depId: "provider-4",
    items: [
      {
        title: "1000mb",
        price: 9000,
        usd: "*147*10072*56594#",
      },
      {
        title: "1500mb",
        price: 14000,
        usd: "*147*10073*56594#",
      },
      {
        title: "3000mb ",
        price: 18000,
        usd: "*147*10074*56594#",
      },
      {
        title: "5000mb",
        price: 25000,
        usd: "*147*10075*56594#",
      },
      {
        title: "8000mb",
        price: 35000,
        usd: "*147*10076*56594#",
      },
      {
        title: "12000mb",
        price: 50000,
        usd: "*147*10077*56594#",
      },
      {
        title: "20000mb",
        price: 65000,
        usd: "*147*10078*56594#",
      },
      {
        title: "30000mb",
        price: 75000,
        usd: "*147*10079*56594#",
      },
      {
        title: "50000mb",
        price: 85000,
        usd: "*147*10080*56594#",
      },
      {
        title: "75000mb",
        price: 110000,
        usd: "*147*10150*56594#",
      },
    ],
  },
];
export const Tarif = [
  {
    id: "internet-1",
    depId: "provider-1",
    items: [
      {
        title: "Doimiy 25",
        internet: "6 GB ",
        ishtiomoiy: "Facebook va Instagram",
        qonggiroqlar:"Cheksiz",
        smspaket:"500 sms",
        narxi:25000,
        usd:"*120#"
      },
    ],
  },
];