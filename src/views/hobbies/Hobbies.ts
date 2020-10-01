import { Component, Vue } from "vue-property-decorator";

import HobbieState from "@/components/hobbie-state/HobbieState.vue";

@Component({
  components: {
    HobbieState,
  },
})
export default class Hobbies extends Vue {
  hobbieList = [
    {
      name: "Voyage",
      icon: "airplane",
    },
    {
      name: "Cinéma",
      icon: "video-camera",
    },
    {
      name: "Littérature",
      icon: "book",
    },
    {
      name: "Jeux vidéo",
      icon: "pacman",
    },
    {
      name: "Exercices physiques",
      icon: "accessibility",
    },
  ];
}
