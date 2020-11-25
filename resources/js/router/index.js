import Vue from 'vue'
import Router from 'vue-router'

//import AccountsAdd from '@/components/accounts/Add'
//import AccountsEdit from '@/components/accounts/Edit'
//import AccountsTableList from '@/components/accounts/partials/ShowAccountsTable'
//import AccountShow from '@/components/accounts/Show'
//import BusinessesList from '@/components/businesses/Index'
//import BusinessShow from '@/components/businesses/Show'
//import BusinessGoalsList from '@/components/commercial-goals/Index'
import Dashboard from '../components/dashboard/Index'
import SignIn from '../components/user/SignIn'
//import Calendar from '@/components/events/Calendar'
//import GroupsTableList from '@/components/groups/partials/ShowGroupsTable'
//import GroupShow from '@/components/groups/Show'
//import AccountGroupPersonSearch from '@/components/partials/AccountGroupPersonSearch'
//import PersonsAdd from '@/components/persons/Add'
//import PersonsEdit from '@/components/persons/Edit'
//import PersonsTableList from '@/components/persons/partials/ShowPersonsTable'
//import PersonsShow from '@/components/persons/Show'
//import ReportsAndContactsList from '@/components/reports-and-contacts/Index'
//import TasksList from '@/components/tasks/Index'

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Dashboard
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        }
        /** Businesses
         {
      path: '/businesses',
      name: 'businessesList',
      component: BusinessesList
    },
         {
      path: '/businesses/:businessId(\\d+)',
      name: 'businessShow',
      component: BusinessShow
    },
         {
      path: '/businesses/:businessId(\\d+)/persons/create',
      name: 'businessPersonAdd',
      component: PersonsAdd
    },
         {
      path: '/businesses/:businessId(\\d+)/persons',
      name: 'businessRelatedPersons',
      component: PersonsTableList
    },
         /** ACCOUNTS
         {
      path: '/accounts',
      component: AccountGroupPersonSearch,
      children: [
        {
          path: '/',
          name: 'accountsTableList',
          component: AccountsTableList
        },
        {
          path: '/persons',
          name: 'personsTableList',
          component: PersonsTableList
        },
        {
          path: '/groups',
          name: 'groupsTableList',
          component: GroupsTableList
        }
      ]
    },
         {
      path: '/accounts/create',
      name: 'accountsAdd',
      component: AccountsAdd
    },
         {
      path: '/accounts/:accountId(\\d+)',
      name: 'accountShow',
      component: AccountShow
    },
         {
      path: '/accounts/:accountId(\\d+)/edit',
      name: 'accountsEdit',
      component: AccountsEdit
    },
         {
      path: '/accounts/:accountId(\\d+)/persons',
      name: 'accountRelatedPersons',
      component: PersonsTableList
    },
         {
      path: '/accounts/:accountId(\\d+)/persons/create',
      name: 'accountPersonAdd',
      component: PersonsAdd
    },
         /** End Accounts
         /** GROUPS
         {
      path: '/groups/:groupId(\\d+)',
      name: 'groupShow',
      component: GroupShow
    },
         {
      path: '/groups/:groupId(\\d+)/accounts',
      name: 'groupRelatedAccounts',
      component: AccountsTableList
    },
         /** END groups
         /** Persons
         {
      path: '/persons/create',
      name: 'personAdd',
      component: PersonsAdd
    },
         {
      path: '/persons/:personId(\\d+)',
      name: 'personsShow',
      component: PersonsShow
    },
         {
      path: '/persons/edit/:personId(\\d+)',
      name: 'personsEdit',
      component: PersonsEdit
    },
         {
      path: '/persons/:personId(\\d+)/accounts',
      name: 'personsRelatedAccounts',
      component: AccountsTableList
    },
         /** End Persons
         {
      path: '/reports-and-contacts',
      name: 'ReportsAndContactsList',
      component: ReportsAndContactsList
    },
         {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
         {
      path: '/tasks',
      name: 'TasksList',
      component: TasksList
    },
         {
      path: '/commercial-goals',
      name: 'businessGoals',
      component: BusinessGoalsList
    } */
    ]
})

export default router
