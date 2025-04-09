import Image from "next/image";
import { Feature } from "../types";

export const FeatureList = ({ features }: { features: Feature[] }) => (
    <ul className="text-[16px] text-left  gap-2 mt-4">
        {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 py-1.5">
                <Image
                    aria-hidden
                    src={feature.icon}
                    alt={feature.alt}
                    width={22}
                    height={22}
                />
                <span>{feature.text}</span>
            </li>
        ))}
    </ul>
);

export default FeatureList;

