interface VideoPlaceholderProps {
  label?: string;
  className?: string;
}

export default function VideoPlaceholder({
  label = "Video Coming Soon",
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative aspect-video w-full bg-gray-100 border-2 border-pink rounded-xl flex flex-col items-center justify-center gap-3 ${className}`}
    >
      {/* Play icon */}
      <div className="w-16 h-16 rounded-full bg-pink/10 border-2 border-pink flex items-center justify-center">
        <svg
          className="w-7 h-7 text-pink ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-400 tracking-wide">{label}</p>
    </div>
  );
}
