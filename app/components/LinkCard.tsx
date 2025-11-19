import Link from 'next/link';

interface LinkCardProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export default function LinkCard({ href, label, icon }: LinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-6 border border-[rgba(0,0,0,0.04)] rounded-lg bg-white hover:border-[rgba(0,0,0,0.08)] hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9BCBFF] focus:ring-offset-2"
    >
      {icon && (
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-600 group-hover:text-black transition-colors">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="font-medium text-black group-hover:text-[#9BCBFF] transition-colors">
          {label}
        </div>
        <div className="text-sm text-gray-500 mt-1 break-all">
          {href}
        </div>
      </div>
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );
}
