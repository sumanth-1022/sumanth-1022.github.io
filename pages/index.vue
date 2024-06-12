<template>
  <v-container class="pa-10" fluid>
    <v-row no-gutters>
      <v-col cols="3">
        <v-card outlined class="rounded-xl pa-3">
          <v-row no-gutters align="center" class="pt-6">
            <v-col class="text-h4 text-center">
              Sumanth Guduguntla
            </v-col>
          </v-row>

          <v-row no-gutters align="center" class="text-h5 mt-16 pt-16 text-center">
            <v-col>Data Analyst</v-col>
          </v-row>
          <a :href="`tel:+1 (502)-498-3844`" style="text-decoration: none; color: inherit;">
            <v-row no-gutters align="center" class="text-h5 pt-6 text-center">
              <v-col class="text-h5 pt-4">
                <v-icon> {{ mdiPhone }}</v-icon>
                +1 (502)-498-3844</v-col>
            </v-row>
          </a>
          <a :href="`mailto:sumanth.1022@gmail.com`" style="text-decoration: none; color: inherit;">
            <v-row no-gutters align="center" class="text-h5 pt-6 text-center">
              <v-col class="text-h5 pt-4">
                <v-icon> {{ mdiEmail }}</v-icon>
                sumanth.1022@gmail.com</v-col>
            </v-row>
          </a>

          <v-row no-gutters align="center" class="text-h5 pt-6 text-center">
            <v-col cols="5" class="text-right">
              <a :href="`https://www.linkedin.com/in/sumanth-guduguntla/`" style="text-decoration: none; color: inherit;">
                <v-icon> {{ mdiLinkedin }}</v-icon>
              </a>
            </v-col>
            <v-spacer />
            <v-col cols="5" class="text-left">
              <a :href="`https://github.com/sumanth-1022`" style="text-decoration: none; color: inherit;">
                <v-icon> {{ mdiGithub }}</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-card>

        <v-card outlined class="rounded-xl pa-3 mt-6">
          <v-row no-gutters align="center">
            <v-col class="text-h4 text-left" cols="auto">
              Skills
            </v-col>
          </v-row>
          <v-row no-gutters align="center">
            <v-col
              v-for="(item, index) in imagePaths"
              :key="index"
              cols="3"
              class="text-center pa-4"
            >
              <img :src="require(`@/assets/technical/${item}`)" alt="Image">
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card outlined class="rounded-xl ml-10">
          <v-tabs
            v-model="tab"
            right
            dark
          >
            <v-tab
              v-for="item in items"
              :key="item.tab"
            >
              {{ item.tab }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in items"
              :key="item.tab"
            >
              <v-card flat>
                <v-card-text><component :is="item.component" /></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail, mdiGithub, mdiLinkedin, mdiPhone } from '@mdi/js'
export default {
  name: 'Portfolio',
  data () {
    return {
      mdiEmail,
      mdiPhone,
      mdiLinkedin,
      mdiGithub,
      tab: null,
      items: [
        { tab: 'About', component: 'AppAboutComponent' },
        { tab: 'Work Experience', component: 'AppExperienceComponent' },
        { tab: 'Education', component: 'AppEducationComponent' }
      ],
      imagePaths: []
    }
  },

  head () {
    return {
      title: 'Sumanth Guduguntla'
    }
  },

  mounted () {
    this.fetchImages()
  },
  methods: {
    fetchImages () {
      const context = require.context('@/assets/technical', false, /\.png$/)
      this.imagePaths = context.keys().map(key => key.replace('./', ''))
    }
  }

}
</script>
