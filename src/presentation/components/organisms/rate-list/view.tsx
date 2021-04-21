import { Container, Error, ListItem, Loading } from "../../atoms";

interface Props {
  loading: boolean;
  error?: string;
  items: { title: string; subtitle: string }[];
}

const RateListView = ({ loading, error, items }: Props) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Container>
      {items.map(({ title, subtitle }) => (
        <ListItem key={subtitle} title={title} subtitle={subtitle} />
      ))}
    </Container>
  );
};

export default RateListView;
