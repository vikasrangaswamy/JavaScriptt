import { useParams } from "react-router-dom";

const Member = () => {
  const params = useParams();
  console.log("Params ", params);
  return (
    <>
      <h2>Welcome Member number</h2>
    </>
  );
};

export default Member;