import "../../../assets/style/start.css";
import CreateRticles from "./createRticles";
import Subjects from "./subjects";

export function Layout() {
  return (
    <>
      <section id="startPage">
        <Subjects />
        <CreateRticles />
      </section>
    </>
  );
}
