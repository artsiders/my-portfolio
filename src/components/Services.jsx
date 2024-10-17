import contentCreator from "../assets/services/content-creator.webp";
import graphicDesigner from "../assets/services/graphic-designer.webp";
import mobile from "../assets/services/mobile-developer.webp";
import web from "../assets/services/web-developer.webp";

import contentCreatorIll from "../assets/services/illustration-content-creator.webp";
import graphicDesignerIll from "../assets/services/illustration-graphic-designer.webp";
import mobileIll from "../assets/services/illustration-mobile-developer.webp";
import webIll from "../assets/services/illustration-web-developer.webp";

import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();

    const services = [
        {
            title: t("services.webDeveloper"),
            icon: web,
            image: webIll,
            description: t("services.webDevDesc"),
        },
        {
            title: t("services.graphicDesigner"),
            icon: graphicDesigner,
            image: graphicDesignerIll,
            description: t("services.graphicDesignerDesc"),
        },
        {
            title: t("services.mobileDeveloper"),
            icon: mobile,
            image: mobileIll,
            description: t("services.mobileDeveloperDesc"),
        },
        {
            title: t("services.contentCreator"),
            icon: contentCreator,
            image: contentCreatorIll,
            description: t("services.contentCreatorDesc"),
        },
    ];

    return (
        <section
            id="overview"
            className="relative z-0 py-2 mx-auto padding max-w-7xl"
        >
            <div className="flex flex-wrap justify-center gap-4 mt-20 xs:gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};