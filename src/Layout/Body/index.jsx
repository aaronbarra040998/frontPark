import styles from "./Hero.module.css";
import Textobody from "../../components/Textobody";
import Imagenboby from "../../components/Imagenbody";
// import styles from "./Hero.module.css";

export default function Body() {
  return (
    <section className={styles.container}>
    

      <Textobody />
      <Imagenboby />
      
      </section>
  );
}
