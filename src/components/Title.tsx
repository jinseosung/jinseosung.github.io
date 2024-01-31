import { FunctionComponent } from "react";

type TitleProps = {
  prop: string;
};

const Title: FunctionComponent<TitleProps> = ({ prop }) => {
  return <h2 className="title">{prop}</h2>;
};

export default Title;
