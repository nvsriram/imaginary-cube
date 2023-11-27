import { useSearchParams } from "react-router-dom";

export const Shruggie = () => {
  const [searchParams] = useSearchParams();

  const color = searchParams.get("color") ?? "#00ffff";

  return (
    <>
      <span className="text-vivid1 selection:!text-vivid1">¯\_</span>
      <span className="selection:!text-inherit" style={{ color }}>
        (
      </span>
      <span className="text-folderTextColor">ツ</span>
      <span className="selection:!text-inherit" style={{ color }}>
        )
      </span>
      <span className="text-vivid1 selection:!text-vivid1">_/¯</span>
    </>
  );
};
