// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import AnimatedReveal from "./AnimatedReveal";

export default function Projects() {
    const screenshot = (url) =>
        `https://api.microlink.io/?url=${encodeURIComponent(
            url
        )}&screenshot=true&type=png&meta=false&embed=screenshot.url`;

    const projects = [
        {
            title: "NYC Lux Ride",
            desc: "Luxury chauffeur booking platform with real-time pricing, payments, dispatch integration, and SEO worker.",
            url: "https://nycluxride.com",
            img: screenshot("https://nycluxride.com"),
        },
        {
            title: "Skylight KSA",
            desc: "Enterprise-level construction & engineering website with multi-service structure, SEO automation, and cloud deployment.",
            url: "https://mz9201ju.github.io/skylight-ksa",
            img: screenshot("https://mz9201ju.github.io/skylight-ksa"),
        },
        {
            title: "Omer Portfolio",
            desc: "Space-themed personal portfolio with 3D visuals, AI worker integration, and multi-page React architecture.",
            url: "https://omerzahid.com",
            img: screenshot("https://omerzahid.com"),
        },
        {
            title: "Bell Aviation / ROMISOFT LLC",
            desc: "Bell Aviation Services has a rich history in Aircraft Maintenance, Repair, Operations, Worldwide Recovery, Avionics, Fleet Maintenance & Logistics.",
            url: "https://mz9201ju.github.io/bell-aviation-romisoft/",
            img: screenshot("https://mz9201ju.github.io/bell-aviation-romisoft/"),
        },
        {
            title: "Deeba's Day Care",
            desc: "At Deeba's Daycare, we offer exceptional home day care services, so the little ones are properly taken care of during your busy day.",
            url: "https://mz9201ju.github.io/deebasDayCare/",
            img: screenshot("https://mz9201ju.github.io/deebasDayCare/"),
        },
        {
            title: "ELIA Barber Shop",
            desc: "A local Bellevue barber shop website I built to help the business grow its online visibility.",
            url: "https://mz9201ju.github.io/ELIA_BarberShop_WebSite/",
            img: screenshot("https://mz9201ju.github.io/ELIA_BarberShop_WebSite/"),
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <AnimatedReveal variant="subtle" delay={0.05}>
                <h2 className={styles.projects__title}>Featured Projects</h2>
                <p className={styles.projects__subtitle}>
                    Real-world engineering across cloud, web, automation, and platform delivery.
                </p>
            </AnimatedReveal>

            <div className={styles.projects__grid}>
                {projects.map((p, idx) => (
                    <AnimatedReveal
                        key={p.title}
                        variant="float"
                        delay={0.08 + idx * 0.06}
                    >
                        <div
                            className={styles.projects__card}
                            onClick={() => window.open(p.url, "_blank")}
                        >
                            {/* Screenshot */}
                            <div className={styles.projects__imageWrap}>
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className={styles.projects__image}
                                    loading="lazy"
                                />
                            </div>

                            {/* Text content */}
                            <h3 className={styles.projects__cardTitle}>{p.title}</h3>
                            <p className={styles.projects__cardDesc}>{p.desc}</p>

                            <span className={styles.projects__cardCTA}>
                                View Project →
                            </span>
                        </div>
                    </AnimatedReveal>
                ))}
            </div>
        </section>
    );
}
