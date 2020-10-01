import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  contactAdress = "22 rue Edouard Lalo<br/>8500 Les Herbiers";
  contactMail = "cecile.blin@hotmail.fr";
  contactPhone = "06.33.43.17.62";
}
