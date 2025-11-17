// src/components/Contact.jsx
import React, { useState } from "react";
import styles from "./Contact.module.css";
import AnimatedReveal from "./AnimatedReveal";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        // Remove error dynamically once user types
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Required";
        if (!form.email.trim()) newErrors.email = "Required";
        if (!form.message.trim()) newErrors.message = "Required";

        setErrors(newErrors);

        // If errors exist → block submission
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        setStatus("");

        // 🔥 VALIDATION first
        if (!validateForm()) {
            setStatus("Please fill in all required fields ❗");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("https://oz-studio-worker.omer-mnsu.workers.dev/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("Message sent successfully 🚀");
            setForm({ name: "", email: "", company: "", message: "" });
            setErrors({});
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message. Try again.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className={styles.contact}>
            <AnimatedReveal variant="subtle" delay={0.05}>
                <h2 className={styles.contact__title}>Engage for Your Next Build</h2>
                <p className={styles.contact__subtitle}>
                    Whether it’s a greenfield platform, migration, or performance
                    overhaul — you get one owner delivering across architecture,
                    implementation, DevOps, and quality.
                </p>
            </AnimatedReveal>

            <AnimatedReveal variant="float" delay={0.12}>
                <div className={styles.contact__card}>

                    {/* INPUT ROW */}
                    <div className={styles.contact__row}>

                        <div className={styles.contact__field}>
                            <input
                                name="name"
                                placeholder="Your Name *"
                                className={`${styles.contact__input} ${errors.name ? styles.errorInput : ""}`}
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>

                        <div className={styles.contact__field}>
                            <input
                                name="email"
                                placeholder="Email Address *"
                                className={`${styles.contact__input} ${errors.email ? styles.errorInput : ""}`}
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>

                        <div className={styles.contact__field}>
                            <input
                                name="company"
                                placeholder="Company (optional)"
                                className={styles.contact__input}
                                value={form.company}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {/* MESSAGE FIELD */}
                    <div className={styles.contact__fieldFull}>
                        <textarea
                            name="message"
                            placeholder="Message *"
                            className={`${styles.contact__textarea} ${errors.message ? styles.errorInput : ""}`}
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                    </div>

                    {/* BUTTON */}
                    <div className={styles.contact__buttonWrap}>
                        <button
                            type="button"
                            className={styles.contact__button}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                    <div className={styles.contact__buttonWrap}>
                        <button
                            type="button"
                            className={styles.contact__button}
                            onClick={() => window.location.href = "tel:+14253751844"}
                        >
                            Call OZ
                        </button>
                    </div>
                    {/* STATUS */}
                    {status && <p className={styles.contact__status}>{status}</p>}
                </div>
            </AnimatedReveal>
        </section>
    );
}
