import { Component, Vue } from "vue-property-decorator";

import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Skills extends Vue {
  skillList = [
    {
      name: "Photoshop",
      value: 80,
    },
    {
      name: "Indesign",
      value: 65,
    },
    {
      name: "Illustrator",
      value: 55,
    },
    {
      name: "HTML / CSS",
      value: 80,
    },
    {
      name: "Javascript",
      value: 50,
    },
    {
      name: "JQuery",
      value: 40,
    },
    {
      name: "Bootstrap",
      value: 40,
    },
    {
      name: "Php",
      value: 40,
    },
    {
      name: "Zendesk",
      value: 75,
    },
    {
      name: "Selligent",
      value: 90,
    },
  ];

  otherSkillList = [
    "Esprit critique",
    "Organisation",
    "Flexibilité",
    "Négociation",
    "Envie d'apprendre",
    "Raisonnement analytique",
    "Travail d’équipe",
    "Créativité",
  ];
}
