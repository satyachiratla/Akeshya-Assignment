import { ElementType } from "react";

type FeatureCardProps = {
  icon: ElementType;
  title: string;
};

export default function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 bg-[#f6f6f6] p-4 w-full hover:bg-sky-50">
      <span>
        <Icon />
      </span>
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
}
