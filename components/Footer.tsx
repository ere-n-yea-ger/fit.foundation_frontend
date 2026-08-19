import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div>
          <p className="font-display font-bold uppercase text-lg tracking-tight mb-2">
            Fit<span className="text-volt">.</span>Foundation
          </p>
          <p className="font-body text-zinc-500 text-sm flex items-center gap-1.5">
            <MapPin size={14} />
            Tynor Badminton Club, Phase VI &middot; Balongi School
          </p>
        </div>
      </div>
      <p className="font-body text-zinc-700 text-xs text-center mt-10">
        &copy; {new Date().getFullYear()} Fit Foundation. Built for the
        children of Balongi.
      </p>
    </footer>
  );
}
