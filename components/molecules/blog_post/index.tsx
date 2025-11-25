import { ImageBlog } from "@components/atoms/images";
import { Text, PrincipalText } from "@components/atoms/text";

export default function BlogPost({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string; 
}) {
  return (
    <div className="flex flex-col w-[30%] pb-4 bg-color-primario rounded-xl shadow-md">
      <ImageBlog url="Image.png" />

      <div className="flex flex-col px-7 mt-8">
        <Text text={title} />

        <div className="mt-3.5 text-color-texto-principal">
          <PrincipalText text={description} />
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 mt-5 text-primary-dark font-semibold hover:underline"
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}