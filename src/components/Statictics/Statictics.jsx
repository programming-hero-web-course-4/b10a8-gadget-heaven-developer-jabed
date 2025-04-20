import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Phones", value: 400 },
  { name: "Laptops", value: 300 },
  { name: "Smart Watches", value: 200 },
  { name: "iPhones", value: 100 },
];

const COLORS = ["#6366f1", "#22c55e", "#facc15", "#f472b6"];

const Statictics = () => {
  return (
    <motion.div
      className="mt-24 p-10 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center text-gray-800 mb-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        📊 Product Insights
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Dive into a visual overview of your current inventory distribution. From
        trending phones to essential smart gadgets, track what’s making waves in
        your store.
      </motion.p>

      <div className="w-full h-96">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Statictics;
