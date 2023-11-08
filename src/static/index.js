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
        title: "1000mb",
        price: 8900,
        usd:'57627utyu'
      },
      {
        title: "1300mb",
        price: 13000,
        usd:'57627utyu'
      },
    ],
  },
  {
    id: "internet-2",
    depId: "provider-2",
    items: [
      {
        title: "1GB",
        price: 9000,
      },
    ],
  },
  {
    id: "internet-3",
    depId: "provider-3",
    items: [
      {
        title: "1GB",
        price: 8000,
      },
    ],
  },
  {
    id: "internet-4",
    depId: "provider-4",
    items: [
      {
        title: "1GB",
        price: 11_000,
      },
    ],
  },
];
