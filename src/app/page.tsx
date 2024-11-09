import * as motion from "framer-motion/client"

export default function Home() {
	return (
		<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		>
			hii
		</motion.div>

);
}
