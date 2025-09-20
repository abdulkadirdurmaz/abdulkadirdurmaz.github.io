import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const references = [
    {
        name: "Alper SELEN",
        position_tr: "ASELSAN'da Takım Lideri",
        position_en: "A Team Lead working at ASELSAN",
        email: "csalperselen@gmail.com",
    },
    {
        name: "Fatih SOYGAZİ",
        position_tr: "Aydın Adnan Menderes Üniversitesi'nde Doç. Dr. Öğretim Üyesi",
        position_en: "Assistant Professor at Aydın Adnan Menderes University",
        email: " fatih.soygazi@adu.edu.tr",
    },
];

const References = ({ lang }) => {
    const [selectedRef, setSelectedRef] = useState(null);

    return (
        <section
            className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white-100/50"
            id="references"
        >
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 font-consolas">
                    {lang === "tr" ? "Referanslarım" : "References"}
                </h2>
                <p className="text-gray-600 font-consolas">
                    {lang === "tr"
                        ? "Beraber çalıştığım kişilerden hakkımda bilgi alın."
                        : "Learn about me from the people I work with."}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {references.map((ref, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">{ref.name}</h3>
                            <p className="text-gray-600 mb-4">
                                {lang === "tr" ? ref.position_tr : ref.position_en}
                            </p>

                            {/* İletişim butonu */}
                            <button
                                onClick={() => setSelectedRef(ref)}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
                            >
                                {lang === "tr" ? "İletişime Geç" : "Contact"}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {selectedRef && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
                        {/* Kapat Butonu */}
                        <button
                            onClick={() => setSelectedRef(null)}
                            className="absolute top-3 right-3 text-gray-200 hover:text-white text-lg"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl font-semibold mb-4 text-white">
                            {lang === "tr"
                                ? `${selectedRef.name} ile iletişime geçmek için bana ulaşın.`
                                : `Contact me to get in touch with ${selectedRef.name}`}
                        </h3>

                        <ContactForm lang={lang} recipientEmail={selectedRef.email} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default References;
