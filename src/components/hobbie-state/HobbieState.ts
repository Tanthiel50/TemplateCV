import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class HobbieState extends Vue {
  @Prop() name!: string;
  @Prop() icon!: string;
}
