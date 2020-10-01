import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop(String) name!: string;
  @Prop(Number) value!: number;
  progressList = ["Basique", "Intermédiaire", "Avancée", "Native"];
}
