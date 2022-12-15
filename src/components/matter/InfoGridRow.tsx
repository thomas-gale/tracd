export interface InfoGridRowProps {
  start: string;
  end?: string;
  label: string;
  info: JSX.Element | string;
  last?: boolean;
}

export const InfoGridRow = ({ label, info }: InfoGridRowProps) => {
  return (
    <li className="step step-accent">
      <div className="flex flex-row space-x-2">
        <p className="w-full">
          <b>{label}</b>
        </p>
        <p className="w-full">{info}</p>
      </div>
    </li>
  );
};
