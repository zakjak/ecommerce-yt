import Image from "next/image";

export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
  title: string;
  imageSrc: string;
  price?: string | number;
  imageAlt?: string;
  badge?: { label: string; tone?: BadgeTone };
}

const Card = ({
  title,
  imageSrc,
  price,
  badge,
  imageAlt = title,
}: CardProps) => {
  const content = (
    <article className="group rounded-xl bg-light-100 ring-1 ring-light-300 transition-colors hover:ring-dark-500">
      <div className="relative aspect-square overflow-hidden rounded-t-xl bg-light-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <h3 className="text-heading-3 text-dark-900">{title}</h3>
          {/* price */}
        </div>
      </div>
    </article>
  );
  return <div>{content}</div>;
};

export default Card;
