interface HeadingProps {
  tittle: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ tittle, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tighter">{tittle}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
