export interface InfoGridRowProps {
  label: string;
  info: string;
  last?: boolean;
}

export const InfoGridRow = ({ label, info }: InfoGridRowProps) => {
  return (
    <>
      <div className="flex flex-row space-x-2">
        <p className="w-full">
          <b>{label}</b>
        </p>
        <p className="w-full">{info}</p>
      </div>
      <div className="divider" />
    </>
  );
};
