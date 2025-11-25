export default function Icon({
  icon,
  href,
  classExtra,
}: {
  icon: string;
  href?: string;
  classExtra?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center 
        w-12 h-12 rounded-full color-primary
        cursor-pointer hover:opacity-90 transition
        ${classExtra}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
      >
        <path fill="currentColor" d={icon} />
      </svg>
    </a>
  );
}
