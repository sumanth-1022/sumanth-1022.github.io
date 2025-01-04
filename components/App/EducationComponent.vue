<template>
  <v-timeline align-top dense>
    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <v-row no-gutters>
            <strong>January 2023 - December 2023</strong>
          </v-row>
          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://louisville.edu/">
              <img :src="require(`@/assets/education/Uofl.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <strong>M.S. in Business Analytics</strong>
          <div class="text-caption">
            University of Louisville
          </div>
          <v-list>
            <li class="ml-4">
              Grade: 3.959 (on a scale of 4.0)
            </li>
            <li class="ml-4">
              Coursework:
              Data Management,
              Programming for Analytics,
              Linear Algebra,
              Introduction to Statistical Packages,
              Introduction to BI Architecture,
              Statistical Foundations of Business Analytics,
              Marketing Analytics,
              Predictive Analytics,
              Story Telling with Data,
              Advanced Analytical Tools,
              Applied Machine Learning,
              Deep Learning,
              Digital Advertising Analytics,
              Natural Language Processing
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <v-row no-gutters>
            <strong>August 2017 - August 2021</strong>
          </v-row>
          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://www.bits-pilani.ac.in/">
              <img :src="require(`@/assets/education/Bits.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <v-row no-gutters>
            <strong>B.E. in Electrical & Electronics</strong>
          </v-row>
          <v-row no-gutters>
            <strong>Minor in Finance</strong>
          </v-row>

          <div class="text-caption">
            Birla Institute of Technology and Science - Pilani
          </div>
          <v-list>
            <li class="ml-4">
              Grade: 8.13 (on a scale of 10.0)
            </li>
            <li class="ml-4">
              Activities: VolleyBall
            </li>
            <li class="ml-4">
              Coursework:

              Business Communication,
              Symbolic Logic,
              Object Oriented Programming,
              Optimization,
              Probability and Statistics,
              Mathematics,
              Cultural Studies,
              Derivatives and Risk Management,
              Financial Risk Analytics and Management,
              Security Analysis and Portfolio Management,
              Financial Management,
              Business Analysis and Valuation,
              Fundamentals of Finance and Accounting
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>
