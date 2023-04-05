import styles from "./index.module.scss";
import { useContext } from "react";

const Hero = () => {
	return (
		<div className={styles.Hero}>
			<h1>Bentornato</h1>
			<div className={styles.infos}>
				<div>
					<p>
						Oggi è {new Date().toLocaleString("it-IT", { weekday: "long" })}
					</p>
					<p>{new Date().toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
