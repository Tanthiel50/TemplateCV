import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  aboutText =
    "Avide d'aventures et de découvertes, j'ai toujours préféré apprendre par la pratique au sein d'entreprises afin que ces nouvelles connaissances soient utiles à des projets immédiats. Je souhaite aujourd'hui, valider ces connaissances, sans cesser d'apprendre, par le biais d'une formation en alternance.";
  cvFile = "./CV_Cecile_Blin.pdf";
}
