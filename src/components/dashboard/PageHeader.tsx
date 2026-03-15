type PageHeaderProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {description ? <p className="text-sm text-gray-600 mt-1">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
