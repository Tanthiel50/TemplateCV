import { Component, Vue } from "vue-property-decorator";

@Component
export default class Education extends Vue {
  educList = [
    {
      name: "BTS NDRC",
      date: "2018 - 2020",
      place: "Nantes",
      description: "Négociation et digitalisation de la relation client",
    },
    {
      name: "Bachelor CCM University of Life",
      date: "2012 - 2013",
      place: "Nantes",
      description: "Commerce, communication et management",
    },
    {
      name: "Licence Lettres modernes",
      date: "2009 - 2011",
      place: "Nantes",
      description: "Obtention des 2 premières années",
    },
    {
      name: "BAC SES",
      date: "2009",
      place: "Nantes",
      description:
        "Sciences économiques et sociales, spécialisation mathématiques",
    },
  ];
}
