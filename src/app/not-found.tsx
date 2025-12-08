import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sf-gray-100">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-sf-navy mb-4">404</div>
        <h1 className="text-3xl font-bold text-sf-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-sf-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been 
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Go Home
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link href="/dumps" className="btn-secondary inline-flex items-center gap-2">
            Browse Dumps
          </Link>
        </div>
      </div>
    </div>
  );
}

