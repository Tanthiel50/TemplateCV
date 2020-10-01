import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      mentions:
        "Statut du propriétaire : <b>Particulier<br/><br/>Hébergeur OVH<br/>2 rue Kellermann<br/>59100 ROUBAIX – France<br/><br/></b>Pour contacter cet hébergeur, rendez-vous à l’adresse suivante : http://www.ovh.com/fr/support/<br/><br/>Note : Tous les dessins, images et illustrations de ce site ne sont pas libres de droit. Merci de ne pas les utiliser sans mon autorisation.",
    };
  },
};
