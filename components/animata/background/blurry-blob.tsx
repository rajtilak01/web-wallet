import { cn } from "@/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
  thirdBlobColor: string;
  fourthBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
  thirdBlobColor,
  fourthBlobColor,
}: BlobProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Top Left Blob */}
        <div
          className={cn(
            "absolute top-0 left-0 h-72 w-72 animate-pop-blob rounded-full opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div>

        {/* Top Right Blob */}
        <div
          className={cn(
            "absolute top-0 right-0 h-72 w-72 animate-pop-blob rounded-full opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>

        {/* Bottom Left Blob */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-72 w-72 animate-pop-blob rounded-full opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            thirdBlobColor
          )}
        ></div>

        {/* Bottom Right Blob */}
        <div
          className={cn(
            "absolute bottom-0 right-0 h-72 w-72 animate-pop-blob rounded-full opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            fourthBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
