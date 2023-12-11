interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title: tittle,
  description,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tighter">{tittle}</h2>
      <p>{description}</p>
    </div>
  );
};

// export default Heading;
