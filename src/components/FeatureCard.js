import { motion } from "framer-motion";
import { cardVariants } from "@/animations/variants";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default FeatureCard;
