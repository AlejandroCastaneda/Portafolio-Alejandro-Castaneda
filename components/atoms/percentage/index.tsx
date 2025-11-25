export default function Percentage({ classExtra }: { classExtra: string }) {
  return (
    <div className="flex flex-col justify-center px-px py-1 mt-3 border border-primary border-solid rounded-[30px]">
      <div className={`shrink-0 h-1 color-primary rounded-[30px] ${classExtra}`} />
    </div>
  );
}
