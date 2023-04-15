import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
  return (
    <div className="sweet-loading flex justify-center mt-9">
      <RingLoader color={"#123abc"} loading={true} css={override} size={150} />
    </div>
  );
}

export default Loading;