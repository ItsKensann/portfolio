import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="fixed inset-0 flex flex-col bg-[#323639]">
      <div className="h-12 w-full bg-[#202124] flex items-center px-4 justify-between border-b border-black/20 z-10">
        <Link href="/">
          <button className="text-white text-sm font-sans hover:bg-white/10 px-3 py-1 rounded transition-colors">
            ← Back to Portfolio
          </button>
        </Link>
        <h1 className="text-white text-sm font-sans font-medium opacity-80">
          Kensan_Putra_Resume.pdf
        </h1>
        <div className="w-20" />
      </div>
      <div className="flex-1 w-full h-full overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-none"
          title="Resume Preview"
        />
      </div>
    </div>
  );
}
