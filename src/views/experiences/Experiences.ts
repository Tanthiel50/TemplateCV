import { Component, Vue } from "vue-property-decorator";

@Component
export default class Experiences extends Vue {
  expList = [
    {
      name: "SPBI Jeanneau",
      date: "2018 - 2020",
      place: "Nantes",
      description:
        "Mise en place d'outil ticketing (Zendeks)<br/>Codage FAQ (Guide)<br/>Aide mise en place d'un e-shop (Prestashop)<br/>Mise en place parcours client digital<br/>Création de supports formation hôtesses",
    },
    {
      name: "SPBI Jeanneau",
      date: "2017 - 2018",
      place: "Nantes",
      description:
        "Gestion relation client<br/>Gestion e-shop<br/>Soutien à l'organisation d'évènements<br/>Création de books hôtesses",
    },
    {
      name: "Hôtel de France",
      date: "2015 - 2017",
      place: "Nantes",
      description:
        "Gestion hôtelière<br/>Service en salle<br/>Création de supports communication<br/>Création d'un site web<br/>Création et animation d'une page facebook",
    },
    {
      name: "Cultural Care au pair",
      date: "2014 - 2015",
      place: "New York",
      description: "Fille au pair aux Etats-Unis",
    },
  ];
}
