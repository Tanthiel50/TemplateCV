import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() isLegacy!: boolean;
}
