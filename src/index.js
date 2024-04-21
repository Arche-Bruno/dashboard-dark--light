import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';




/*IMG USERS*/

import user1 from "./images/users/user-1.jpg"
import user2 from "./images/users/user-2.jpg"
import user3 from "./images/users/user-3.jpg"
import user4 from "./images/users/user-4.jpg"


/*REMINDERS*/
import TelegramIcon from '@mui/icons-material/Telegram';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const sidebarData = [
  {
    icon: DashboardIcon,
    name: "Dashboard",
  },
  {
    icon: PeopleIcon,
    name: "Users",
  },

  {
    icon: HistoryEduIcon,
    name: "History",
  },

  {
    icon: LeaderboardIcon,
    name: "Analytics",
  },

  {
    icon: ConfirmationNumberIcon,
    name: "Tickets",
    cant:"27",
  },

  {
    icon: ReceiptIcon,
    name: "Sale List",
  },

  {
    icon: FlagIcon,
    name: "Reports",
  },

  {
    icon: SettingsIcon,
    name: "Setting",
  },
  {
    icon: GroupAddIcon,
    name: "New login",
  },
];
export const rigthCardInfo = [
  {
    name:"Total Sales",
    cant :"65,024",
    porcentage:"+81",
    color:"#1B9C85"
  },
  {
    name:"Site Visit",
    cant :"24,981",
    porcentage:"-48",
    color:"#FF0060"
  },
  {
    name:"Searches",
    cant :"14,147",
    porcentage:"+21",
    color:"#1976d2"
  }
]
export const users = [
    {
      image:user1,
      name:"Marina Arche",
      status:"23 min"
    },
    {
      image:user2,
      name:"Joaquin Mallcco",
      status:"1 Hour ago"
    },
    {
      image:user3,
      name:"Juan Carlos",
      status:"3 days ago"
    },
    {
      image:user4,
      name:"Bruno Angelo",
      status:"2 min ago"
    },
    {
      image:GroupAddIcon,
      name:"Add",
      status:"New User"
    },
]
export const tableData = [
  {
    course : "Course Name",
    number : "Course Number",
    pay: "Payment",
    status : "Status",
    details :"",
  },
  {
    course : "JavaSript",
    number : "98596",
    pay: " Paypal",
    status : "Declined",
    details :"Details",
  },
  {
    course : "TypeScrit",
    number : "14526",
    pay: " Debito",
    status : "Active",
    details :"Details",
  },
  {
    course : "Next.js",
    number : "698569",
    pay: "Paypal",
    status : "Pending",
    details :"Details",
  },
]
export const reminders = [
  {
    icon_1:TelegramIcon,
    name:"Messages",
    subName: "08:00 AM - 12:00 PM",
   icon_2 : MoreVertIcon,
  },
  {
    icon_1:EditNotificationsIcon,
    name:"Notifications",
    subName: "11:35 AM - 12:56 PM",
      icon_2 : MoreVertIcon,
  },
  {
    icon_1:BorderColorIcon,
    name:"Workshop",
    subName: "07:30 AM - 11:00 PM",
      icon_2 : MoreVertIcon,
  },
  {
    icon_1:PlayArrowIcon,
    name:"Videos",
    subName: "05:00 AM - 11:35 PM",
      icon_2 : MoreVertIcon,
  },
]