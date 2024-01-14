import { useState } from "react";

export const useFile = (filename: string) => {
  //   return fs.readFileSync(`/src/data/${filename}`, "utf8");
  const [data, setData] = useState<string>();

  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    if (event) {
      const fileText = event?.target?.result;
      setData(fileText as string);
    }
  };
  fileReader.readAsText(filename);

  return data;
};
