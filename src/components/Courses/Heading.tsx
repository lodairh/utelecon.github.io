interface Props {
  children?: string | JSX.Element | JSX.Element[];
  pageSlug?: string;
  defaltLayer?: number;
}

const Heading = ({ children, pageSlug, defaltLayer }: Props) => {
  if (defaltLayer == 4) {
    return pageSlug == "faculty_members" ? (
      <h5>{children}</h5>
    ) : (
      <h4>{children}</h4>
    );
  }
  return pageSlug == "faculty_members" ? (
    <h4>{children}</h4>
  ) : (
    <h3>{children}</h3>
  );
};

export default Heading;
