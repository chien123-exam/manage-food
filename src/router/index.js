import { createRouter, createWebHashHistory } from 'vue-router'


import HomeView from '../views/home/Index.vue'

import Order1Day from '../views/topcalendar/Order1Day.vue'
import Orderdays from '../views/topcalendar/Orderdays.vue'
import CalendarTop1Day from '../views/topcalendar/CalendarTop1Day.vue'
import CalendarTopDays from '../views/topcalendar/CalendaTopDays.vue'


import OrderConfirmation from '../views/order/OrderConfirmation.vue'
import OrderScreen from '../views/order/OrderScreen.vue'
import OrderCompleted from '../views/order/OrderCompleted.vue'
import OrderScreen32 from '../views/order/OrderScreen32.vue'
import OrderScreenClear from '../views/order/OrderScreenClear.vue'
import OrderCompletionScreen from '../views/order/OrderCompletionScreen.vue'


import ListAnnouncement from '../views/notification/ListAnnouncement.vue'
import DetailedNotice from '../views/notification/DetailedNotice.vue'

import Support111 from '../views/support/Support111.vue'

import CustomerRegistration from '../views/client/CustomerRegistration.vue'
import ConfirmationScreen from '../views/client/ConfirmationScreen.vue'
import Completed from '../views/client/Completed.vue'

import ManageOrderInformation from '../views/information/ManageOrderInformation.vue'
import RegisterOrderInformation from '../views/information/RegisterOrderInformation.vue'
import Confirm from '../views/information/Confirm.vue'
import Complete133 from '../views/information/Complete133.vue'
import Admin from '../views/information/Admin.vue'

import LoginScreen from '../views/login/LoginScreen.vue'

import MyPage from '../views/page/MyPage.vue'

import OrderHistoryByMonth from '../views/orderhistory/OrderHistoryByMonth.vue'
import OrderHistoryByDate from '../views/orderhistory/OrderHistoryByDate.vue'
import OrderDate from '../views/orderhistory/OrderDate.vue'

import Question from '../views/question/Question11.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/topcalendar',
    children: [
      {
        path: '/topcalendar/Order1Day',
        component: Order1Day,
        name: 'order1day'
      },

      {
        path: '/topcalendar/Orderdays',
        component: Orderdays,
        name: 'orderdays'
      },

      {
        path: '/topcalendar/CalendarTop1Day',
        component: CalendarTop1Day,
        name: 'calendartop1day'
      },

      {
        path: '/topcalendar/CalendarTopDays',
        component: CalendarTopDays,
        name: 'calendartopdays'
      }
    ]
  },


  {
    path:'/order',
    children: [
      {
        path: '/order/OrderConfirmation',
        component:OrderConfirmation,
        name: 'orderConfirmation'
      },

      {
        path: '/order/OrderConfirmation',
        component: OrderScreen,
        name: 'orderscreen'
      },

      {
        path: '/order/OrderCompleted',
        component: OrderCompleted,
        name: 'ordercompleted'
      },

      {
        path: '/order/OrderScreen32',
        component: OrderScreen32,
        name: 'orderscreen32'
      },

      {
        path: '/order/OrderScreenClear',
        component: OrderScreenClear,
        name: 'orderscreenclear'
      },

      {
        path: '/order/OrdeCompletionScreen',
        component: OrderCompletionScreen,
        name: 'ordercompletionscreen'
      }
    ]
  },


  {
    path: '/notification',
    children: [
      {
        path: '/notification/listannouncement',
        component: ListAnnouncement,
        name: 'listannouncement'
      },

      {
        path: '/notification/detailednotice',
        component: DetailedNotice,
        name: 'detailednotice'
      }
    ]
  },

  {
    path: '/support',
    component: Support111,
    name: 'support111'
  },

  {
    path: '/client',
    children: [
      {
        path: '/client/customerregistration',
        component: CustomerRegistration,
        name: 'customerregistration'
      },

      {
        path: '/client/confirmationscreen',
        component: ConfirmationScreen,
        name: 'confirmationscreen'
      },

      {
        path: '/client/completed',
        component: Completed,
        name: 'completed'
      }
    ]
  },

  {
    path: '/information',
    children: [
      {
        path: '/information/manageorderinformation',
        component: ManageOrderInformation,
        name: 'manageorderinformation'
      },

      {
        path: '/information/registerorderinformation',
        component: RegisterOrderInformation,
        name: 'Registerorderinformation'
      },

      {
        path: '/information/confirm',
        component: Confirm,
        name: 'confirm'
      },

      {
        path: '/information/Complete133',
        component: Complete133,
        name: 'complete133'
      },

      {
        path: '/information/Admin',
        component: Admin,
        name: 'admin'
      }
    ]
  },


  {
    path:'/login',
    component: LoginScreen,
    name: 'login'
  },

  {
    path: '/page',
    component: MyPage,
    name: 'mypage'
  },

  {
    path: '/orderhistory',
    children: [
      {
        path: '/orderhistory/orderhistorybymonth',
        component: OrderHistoryByMonth,
        name: 'orderhistorybymonth'
      },

      {
        path: '/orderhistory/orderhistorybydate',
        component: OrderHistoryByDate,
        name: 'orderhistorybydate'
      },

      {
        path: '/orderhistory/orderdate',
        component: OrderDate,
        name: 'orderdate'
      }
    ]
  },

  {
    path:'/question',
    component: Question,
    name: 'question'
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
