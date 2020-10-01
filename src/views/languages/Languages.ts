import { Component, Vue } from "vue-property-decorator";

import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Languages extends Vue {
  languageList = [
    {
      name: "Français",
      value: 100,
    },
    {
      name: "Anglais",
      value: 75,
    },
  ];

  otherLanguageList = [];
}
