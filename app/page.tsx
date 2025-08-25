import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "New", tone: "orange" as const },
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    subtitle: "Men's Shoes",
    meta: "4 Colour",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Hot", tone: "red" as const },
  },
  {
    id: 3,
    title: "InfinityRN 4",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Trending", tone: "green" as const },
  },
  {
    id: 4,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-4.webp",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-heading-1">Latest Shoes</h1>
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              imageSrc={p.imageSrc}
              price={p.price}
              badge={p.badge}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
