// Miscellaneous components used in the website

type SeparatorProps = {
  id?: string;
};

export function Separator(props: SeparatorProps) {
  return <div id={props.id || ''} className="h-10 md:h-16 lg:h-24" />;
}
