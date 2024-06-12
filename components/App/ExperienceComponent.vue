<template>
  <v-timeline align-top dense>
    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <V-row no-gutters>
            <strong>December 2023 - Present</strong>
          </V-row>

          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://www.rqsi.com/">
              <img :src="require(`@/assets/companies/RQSI.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <strong>Junior Software Engineer</strong>
          <div class="text-caption">
            RQSI
          </div>
          <v-list>
            <li class="ml-4">
              Developed a custom web-based dashboard to evaluate and rank trading models based on performance metrics,
              risk assessment, and statistical analysis for stakeholder review, focusing primarily on front-end
              development.
            </li>
            <li class="ml-4">
              Created a full-stack web application that reduced quarterly NFA report preparation time from 2 days to 5
              minutes.
            </li>
            <li class="ml-4">
              Currently managing code migration and also handling AWS EC2 instance related queries and fixes
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <v-row no-gutters>
            <strong>April 2023 - December 2023</strong>
          </v-row>
          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://www.rqsi.com/">
              <img :src="require(`@/assets/companies/RQSI.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <strong>Research Analyst Intern</strong>
          <div class="text-caption">
            RQSI
          </div>
          <v-list>
            <li class="ml-4">
              Enhanced CRM data integrity and efficiency by validating email addresses with ZeroBounce and Proofy,
              migrating to a robust schema, and integrating Auth0 for secure access. Optimized database structure with
              triggers, constraints, keys, and indices, resulting in a 20% increase in email deliverability and a 30% reduction
              in query response times.
            </li>
            <li class="ml-4">
              Led the transformation of a legacy compliance application to a modern Vuetify + ASP.net Web API-based
              system. Conducted intricate SQL database schema modifications and migrated reports to AWS S3 buckets
              to ensure seamless integration with evolving application requirements.
            </li>
            <li class="ml-4">
              Refined hallway dashboards by aligning code with in-house universal styles, improving aesthetics, and ensuring a cohesive display.
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <v-row no-gutters>
            <strong>August 2021 - December 2022</strong>
          </v-row>
          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://www.rqsi.com/">
              <img :src="require(`@/assets/companies/HSBC.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <strong>Financial Risk Data Analyst</strong>
          <div class="text-caption">
            HSBC
          </div>
          <v-list>
            <li class="ml-4">
              Collaborated with the Stress Testing team in the UK, engaging with cross-border IT, operations, and risk
              management units to deliver comprehensive market risk analysis (VaR) and stress test results across 7 banking
              regions to risk managers and regulators.
            </li>
            <li class="ml-4">
              Managed critical data feeds and executed L2 line of defense checks, ensuring the seamless functionality of
              internal reporting processes encompassing planning, execution, and review.
            </li>
            <li class="ml-4">
              Spearheaded a paradigm shift in weekly reporting by crafting a cutting-edge platform leveraging Python,
              SQL, Excel, and Tableau, resulting in an impressive 80% reduction in manual tasks and a decrease in report
              creation time from 12 hours to a mere 1 hour weekly.
            </li>
            <li class="ml-4">
              Elevated Prudential Regulatory Reporting standards by sourcing, validating, and wrangling data, steadfastly
              upholding the highest quality standards.
            </li>
            <li class="ml-4">
              Documented and disseminated 10 process enhancements devised during the initiatives above, optimizing
              internal operations and fortifying audit readiness while fostering transparency and best practice adherence.
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item color="pink" small>
      <v-row class="pt-1">
        <v-col cols="3">
          <v-row no-gutters>
            <strong>August 2020 - December 2020</strong>
          </v-row>
          <v-row no-gutters class="mt-10 ml-6">
            <a href="https://www.rqsi.com/">
              <img :src="require(`@/assets/companies/JPM.png`)" alt="Image" style="width: 120px; height: 120px">
            </a>
          </v-row>
        </v-col>
        <v-col>
          <strong>Equity Derivatives Reporting Analyst Intern</strong>
          <div class="text-caption">
            JP Morgan
          </div>
          <v-list>
            <li class="ml-4">
              Led initiatives to enhance reporting processes and efficiency within Equity Derivatives Structuring in North
              America.
            </li>
            <li class="ml-4">
              Spearheaded VBA automation for client presentation data updates, reducing time expenditure by 80% and
              significantly boosting team productivity.
            </li>
            <li class="ml-4">
              Managed version changes, creation, and testing of 100+ client reports, utilizing Pandas, NumPy, Python,
              and Git for streamlined processes and accurate outputs.
            </li>
            <li class="ml-4">
              Contributed to Python code migrations, report construction, debugging, index publishing, and daily reconciliation, optimizing reporting procedures.
            </li>
            <li class="ml-4">
              Resolved Bloomberg data feed breaks using Excel and Bloomberg, ensuring accurate and timely reporting
              outputs.
            </li>
          </v-list>
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>
