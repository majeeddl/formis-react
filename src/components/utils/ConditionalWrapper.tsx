export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (children: any) => any;
  children: any;
}) => (condition ? wrapper(children) : children);
