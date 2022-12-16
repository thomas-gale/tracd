export interface InfoGridRowProps {
  start: string;
  end?: string;
  label: string;
  info?: JSX.Element | string;
}

export const InfoGridRow = ({ start, end, label, info }: InfoGridRowProps) => {
  return (
    <div className="flex flex-row space-x-1 pb-8">
      <div className="w-full">
        <div className="w-fit bg-neutral text-xs text-neutral-content rounded-xl py-1 px-2 shadow-lg">
          <b>{label}</b>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col space-y-1 ">
          <div className="badge badge-primary shadow-lg text-base-content">
            {start}
          </div>
          {!!end && (
            <div className="badge badge-primary shadow-lg text-base-content">
              {end}
            </div>
          )}
        </div>
        {!!info && (
          <div className="shadow-lg rounded-lg p-2 w-auto">{info}</div>
        )}
      </div>
    </div>
  );
};
