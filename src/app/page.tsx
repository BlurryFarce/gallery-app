import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
// const mockUrls = [
//   "https://utfs.io/f/d91eabc9-964b-4a48-aa8b-3a331397c268-80l3ov.jpg",
//   "https://utfs.io/f/1231f97b-2d36-4934-9bc6-23d3de439467-284p1l.jfif",
//   "https://utfs.io/f/683790f8-6d2a-431e-9a0f-99c8761ab0a8-bj0szv.jfif",
//   "https://utfs.io/f/347da0c6-9058-42ee-bdc1-0eac5f96a034-p3ncav.jpg",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      Gallery-app Loading
    </main>
  );
}
