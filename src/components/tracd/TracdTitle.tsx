import Link from "next/link";

export interface TracdTitleProps {
  subTitle?: string;
}

export const TracdTitle = ({ subTitle }: TracdTitleProps) => {
  return (
    <>
      {!!subTitle && (
        <>
          <span>{subTitle}</span>
          <span className="text-accent">.</span>
        </>
      )}
      <span>
        <Link href="/">tracd</Link>
      </span>
      <span className="text-accent">.</span>
    </>
  );
};
