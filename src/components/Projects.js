"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import deep_learning_project1_part1_image from "../images/project_images/deep-learning-p1-p1.png";
import deep_learning_project1_part2_image from "../images/project_images/deep-learning-p1-p2.png";
import deep_learning_project2_image from "../images/project_images/deep-learning-p2.png";
import naturel_language_processing_project1_part1_image from "../images/project_images/naturel_language_processing_p1_p1.png";
import naturel_language_processing_project1_part2_image from "../images/project_images/naturel_language_processing_p1_p2.png";
import naturel_language_processing_project2_image from "../images/project_images/naturel_language_processing_p2.png";
import metaheuristic_project_image from "../images/project_images/metaheuristic_project.png";
import big_data_image from "../images/project_images/big_data.png";
import parking_simulation_image from "../images/project_images/parking-simulation.png";

import deep_learning_project1_part1_image_mobile from "../images/project_images_mobile/deep-learning-p1-p1-mobile.png";
import deep_learning_project1_part2_image_mobile from "../images/project_images_mobile/deep-learning-p1-p2-mobile.png";
import deep_learning_project2_image_mobile from "../images/project_images_mobile/deep-learning-p2-mobile.png";
import naturel_language_processing_project1_part1_image_mobile from "../images/project_images_mobile/nlp-p1-p1-mobile.png";
import naturel_language_processing_project1_part2_image_mobile from "../images/project_images_mobile/nlp-p1-p2-mobile.png";
import naturel_language_processing_project2_image_mobile from "../images/project_images_mobile/nlp-p2-mobile.png";
import metaheuristic_project_image_mobile from "../images/project_images_mobile/metaheuristic-mobile.png";
import big_data_image_mobile from "../images/project_images_mobile/metaheuristic-mobile.png";
import parking_simulation_image_mobile from "../images/project_images_mobile/parking-simulation-mobile.png";


const projects = [
    {
        title: "https://movion.org",
        type: "live",
        url: "https://movion.org",
        description_tr: "AI destekli film öneri platformu. Kullanıcılara kişiselleştirilmiş film önerileri sunar.",
        description_en: "AI-powered movie recommendation platform. Provides users with personalized movie recommendations.",
    },
    {
        title: "Deep Learning Project-I Part-I ",
        type: "github",
        image: deep_learning_project1_part1_image,
        image_mobile: deep_learning_project1_part1_image_mobile,
        url: "https://github.com/captain-alpha/Deep_Learning_Project1_part1",
        description_tr: "Fruits-360 dataset kullanarak PCA, Random Forest, XGBoost ve ANN ile meyve sınıflandırma projesi.",
        description_en: "Fruit classification project using Fruits-360 dataset with PCA, Random Forest, XGBoost and ANN.",
    },
    {
        title: "Deep Learning Project-I Part-II ",
        type: "github",
        image: deep_learning_project1_part2_image,
        image_mobile: deep_learning_project1_part2_image_mobile,
        url: "https://github.com/captain-alpha/Deep_Learning_Project1_part2/",
        description_tr: "Transfer learning ve fine-tuning yoluyla Fruits-360 veri setini kullanarak meyve sınıflandırmasının performansını iyileştirmek.",
        description_en: "Improving the performance of fruit classification using Fruits-360 dataset via transfer learning and fine-tuning.",
    },
    {
        title: "Deep Learning Project-II ",
        type: "github",
        image: deep_learning_project2_image,
        image_mobile: deep_learning_project2_image_mobile,
        url: "https://github.com/captain-alpha/Deep_Learning_Project2/",
        description_tr: "Bir ağ trafiği paketleri veri seti kullanarak DoS saldırılarını tespiti.",
        description_en: "Detecting DoS attacks using a network traffic packets dataset.",
    },
    {
        title: "Naturel Language Processing Project-I Part-I",
        type: "github",
        image: naturel_language_processing_project1_part1_image,
        image_mobile: naturel_language_processing_project1_part1_image_mobile,
        url: "https://github.com/captain-alpha/Naturel_Language_Processing_Project1_part1",
        description_tr: "Türkçe tweetler üzerinde machine learning algoritmaları kullanarak bir nefret söylemi tespit sistemi.",
        description_en: "A hate speech detection system using machine learning algorithms on Turkish tweets.",
    },
    {
        title: "Naturel Language Processing Project-I Part-II",
        type: "github",
        image: naturel_language_processing_project1_part2_image,
        image_mobile: naturel_language_processing_project1_part2_image_mobile,
        url: "https://github.com/captain-alpha/Naturel_Language_Processing_Project1_part2",
        description_tr: "Bu projede, Zemberek modeli kullanarak yazım hatalarını düzelttim, Turkish Word2Vec modeli ile fine-tune uyguladım, machine learning ve ANN modelleri eğiterek sonuçları kıyasladım.",
        description_en: "In this project, I corrected spelling errors using the Zemberek model, fine-tuned the Turkish Word2Vec model, and compared the results by training machine learning and ANN models.",
    },
    {
        title: "Naturel Language Processing Project-II",
        type: "github",
        image: naturel_language_processing_project2_image,
        image_mobile: naturel_language_processing_project2_image_mobile,
        url: "https://github.com/captain-alpha/Naturel_Language_Processing_Project2",
        description_tr: "Amacım TTC4900 Haber veri kümesi üzerinde bir metin sınıflandırma uygulaması geliştirmekti.",
        description_en: "My goal was to develop a text classification application on the TTC4900 News dataset.",
    },
    {
        title: "Metaheuristic",
        type: "github",
        image: metaheuristic_project_image,
        image_mobile: metaheuristic_project_image_mobile,
        url: "https://github.com/captain-alpha/Metaheuristic_Project",
        description_tr: "Bu projede, hyper parameter optimizasyonu için metaheuristic algoritmalar tasarlama ve uygulama konusunda pratik deneyim kazandırmayı amaçladım.",
        description_en: "In this project, I aimed to gain practical experience in designing and implementing metaheuristic algorithms for hyperparameter optimization.",
    },
    {
        title: "Big Data",
        type: "github",
        image: big_data_image,
        image_mobile: big_data_image_mobile,
        url: "https://github.com/captain-alpha/Big_Data",
        description_tr: "Bu projede, anime dizilerine ait verileri inceleyerek ve işleyerek aralarında en çok tercih edilenleri grafiklere dönüştürdüğümüz bir ekip projesi yürüttük.",
        description_en: "In this project, we carried out a team project in which we examined and processed the data of anime series and converted the most preferred ones into graphics.",
    },
    {
        title: "Parking Simulation",
        type: "github",
        image: parking_simulation_image,
        image_mobile: parking_simulation_image_mobile,
        url: "https://github.com/captain-alpha/ParkingSimulation",
        description_tr: "SUMO Simulation kullanarak otopark doluluk oranı simüle eden ekip projemiz.",
        description_en: "Our team project simulating parking lot occupancy rate using SUMO Simulation.",
    },
];

const Projects = ({ lang }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevProject = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setDirection(1);
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const project = projects[current];

    return (
        <section
            id="projects"
            className="py-20 bg-darkBlue/60 text-white font-consolas text-center"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Ana Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    {lang === "tr" ? "Öne Çıkan Projelerim" : "Featured Projects"}
                </h2>

                {/* Proje Başlık + Navigasyon */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={prevProject}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Proje Başlığı (arama kutusu görünümü) */}
                    <div className="flex-1 mx-4">
                        <div className="bg-gray-900/70 border border-gray-700 rounded-full px-6 py-2 shadow text-lg font-semibold">
                            {project.title}
                        </div>
                    </div>

                    <button
                        onClick={nextProject}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Proje İçeriği (Animasyonlu) */}
                <div className="relative h-[500px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={project.title}
                            custom={direction}
                            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            {project.type === "live" ? (
                                // Monitor mockup (iframe)
                                <div className="bg-gray-900 rounded-2xl shadow-xl p-4 relative h-full flex flex-col">
                                    <div className="bg-black rounded-lg overflow-hidden flex-1">
                                        <iframe
                                            src={project.url}
                                            title={project.title}
                                            className="w-full h-full"
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                        />
                                    </div>
                                    <div className="w-32 h-3 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
                                </div>
                            ) : (
                                // GitHub Projesi (açıklama + link)

                                <div className="bg-gray-900 rounded-2xl shadow-xl p-4 relative h-full flex flex-col">
                                    <div className="bg-black rounded-lg overflow-hidden flex-1">
                                        <a href={project.url} target="_blank" rel="noreferrer">
                                            <picture>
                                                <source media="(max-width: 800px)" srcSet={project.image_mobile} />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="w-32 h-3 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
