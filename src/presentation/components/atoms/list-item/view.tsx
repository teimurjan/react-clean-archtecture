interface Props {
  title: string;
  subtitle: string;
}

const ListItem = ({ title, subtitle }: Props) => (
  <div style={{ padding: 5 }}>
    <h4>{title}</h4>
    <h6>{subtitle}</h6>
  </div>
);

export default ListItem;
