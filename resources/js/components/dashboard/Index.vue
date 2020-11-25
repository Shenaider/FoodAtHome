<template>
  <div class="dashboard">
    WELCOME
  </div>
</template>

<script>
  //import BirthdayCard from '@/components/partials/BirthdayCard'
  //import BusinessList from '@/components/partials/BusinessList'
  //import Feed from '@/components/partials/Feed'
  //import NextEvents from '@/components/partials/NextEvents'
  //import PerformanceAndPrevisions from '@/components/partials/PerformanceAndPrevisions'
  //import ReportsAndContacts from '@/components/partials/ReportsAndContacts'
  //import TaskAndFutureActions from '@/components/partials/TaskAndFutureActions'
  //import TopClientsCard from '@/components/partials/TopClientsCard'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    components: {
      //BirthdayCard,
      //TopClientsCard,
      //ReportsAndContacts,
      //TaskAndFutureActions,
      //NextEvents,
      //BusinessList,
      //Feed,
      //PerformanceAndPrevisions
    },
    computed: {
      ...mapGetters({
        //currentUser: 'generic/CURRENT_USER'
      })
    },
    data () {
      return {
      }
    },
    created () {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #crm-app .dashboard .el-card__header {
    border-bottom: unset;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 150px;
  }

  .bg-purple {
    background: purple;
  }

  .feed {
    height: 500px;
  }

  .v-card__header span:first-child {
    float: left;
  }

  .client-name {
    color: #1d6ea0;
    font-size: 18px;
    line-height: 21px;
    margin-top: 0.25rem;
    display: block;
    text-align: left;
  }

  .description {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0.25px;
    line-height: 21px;
    text-align: left;
  }

  .date {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  }
</style>
